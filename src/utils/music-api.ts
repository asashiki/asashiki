const METING_API_BASE = "https://api.qijieya.cn/meting/";

export type MetingServer =
	| "netease"
	| "tencent"
	| "kugou"
	| "kuwo"
	| "baidu"
	| string;

export type MusicSong = {
	id: number | string;
	name: string;
	artists: string;
	cover: string;
	url: string;
	lrc: string;
	server: MetingServer;
};

export type ParsedLrcLine = {
	time: number;
	text: string;
};

type MetingSongItem = {
	name?: string;
	artist?: string;
	url?: string;
	pic?: string;
	lrc?: string;
};

function buildMetingUrl(
	type: string,
	id: number | string,
	server: MetingServer = "netease",
) {
	const params = new URLSearchParams({
		server,
		type,
		id: String(id),
	});

	return `${METING_API_BASE}?${params.toString()}`;
}

async function fetchJson<T>(url: string): Promise<T> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Meting API request failed: ${response.status}`);
	}

	return response.json() as Promise<T>;
}

export function getMetingSongUrl(
	id: number | string,
	server: MetingServer = "netease",
) {
	return buildMetingUrl("url", id, server);
}

export function getMetingPictureUrl(
	id: number | string,
	server: MetingServer = "netease",
) {
	return buildMetingUrl("pic", id, server);
}

export function getMetingLyricUrl(
	id: number | string,
	server: MetingServer = "netease",
) {
	return buildMetingUrl("lrc", id, server);
}

export async function getMetingSong(
	id: number | string,
	server: MetingServer = "netease",
): Promise<MusicSong | null> {
	const data = await fetchJson<MetingSongItem[]>(
		buildMetingUrl("song", id, server),
	);
	const item = data[0];
	if (!item) return null;

	return {
		id,
		name: item.name || "未知歌曲",
		artists: item.artist || "",
		cover: item.pic || "",
		url: item.url || getMetingSongUrl(id, server),
		lrc: item.lrc || getMetingLyricUrl(id, server),
		server,
	};
}

export async function getLyricByUrl(url: string) {
	if (!url) return "";
	const response = await fetch(url);
	if (!response.ok) return "";
	return response.text();
}

export async function getLyric(
	id: number | string,
	server: MetingServer = "netease",
) {
	return getLyricByUrl(getMetingLyricUrl(id, server));
}

export function parseLRC(lrcText: string): ParsedLrcLine[] {
	const lines = lrcText.split("\n");
	const result: ParsedLrcLine[] = [];
	const timeRegex = /\[(\d+):(\d+)(?:\.(\d+))?\]/g;

	for (const line of lines) {
		const text = line.replace(timeRegex, "").trim();
		if (!text) continue;

		timeRegex.lastIndex = 0;
		let match = timeRegex.exec(line);
		while (match !== null) {
			const min = Number.parseInt(match[1], 10);
			const sec = Number.parseInt(match[2], 10);
			const ms = match[3] ? Number.parseInt(match[3].padEnd(3, "0"), 10) : 0;
			result.push({ time: min * 60 + sec + ms / 1000, text });
			match = timeRegex.exec(line);
		}
	}

	return result.sort((a, b) => a.time - b.time);
}
