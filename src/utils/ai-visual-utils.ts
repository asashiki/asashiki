import { url } from "@utils/url-utils";

export type AiVisualMetric = {
	label: string;
	value: string;
	detail?: string;
};

export type AiVisualNode = {
	title: string;
	label: string;
	description: string;
	accent?: string;
};

export type AiVisualTimelineItem = {
	time: string;
	title: string;
	description: string;
};

export type AiVisualSignal = {
	label: string;
	value: string;
};

export type AiVisualFeatureCard = {
	title: string;
	label: string;
	description: string;
	value?: string;
};

export type AiVisualAward = {
	title: string;
	work: string;
	description?: string;
};

export type AiVisualAudio = {
	title: string;
	artist?: string;
	note?: string;
	provider?: "audio" | "meting";
	server?: string;
	src?: string;
	metingId?: number | string;
	songId?: number | string;
	neteaseId?: number | string;
	cover?: string;
	style?: "disc" | "save" | string;
	kicker?: string;
};

export type AiVisualStatBar = {
	label: string;
	value: string;
	ratio: number;
	detail?: string;
};

export type AiVisualJumpLink = {
	label: string;
	fragment: string;
	description?: string;
};

export type AiVisualDetailPanel = {
	label: string;
	title: string;
	description: string;
	items?: string[];
};

export type AiVisualCopyBlock = {
	label?: string;
	title: string;
	content: string;
	buttonLabel?: string;
};

export type AiVisualPage = {
	slug: string;
	title?: string;
	subtitle: string;
	eyebrow?: string;
	tone: string;
	lead: string;
	variant?: string;
	mapTitle?: string;
	timelineTitle?: string;
	featureTitle?: string;
	collectionTitle?: string;
	collectionDescription?: string;
	collectionItemLabel?: string;
	collectionPerPage?: number;
	metrics: AiVisualMetric[];
	statBars?: AiVisualStatBar[];
	featureCards?: AiVisualFeatureCard[];
	memoryNodes: AiVisualNode[];
	awards?: AiVisualAward[];
	timeline: AiVisualTimelineItem[];
	signals: AiVisualSignal[];
	jumpLinks?: AiVisualJumpLink[];
	detailPanels?: AiVisualDetailPanel[];
	copyBlock?: AiVisualCopyBlock;
	audio?: AiVisualAudio;
	quote: string;
	closing: string;
};

const modules = import.meta.glob<{ default: AiVisualPage }>(
	"/src/data/ai-pages/**/*.json",
	{ eager: true },
);

function slugFromPath(path: string) {
	return path.replace(/^\/src\/data\/ai-pages\//, "").replace(/\.json$/, "");
}

const pages = Object.entries(modules).map(([path, module]) => ({
	...module.default,
	slug: module.default.slug || slugFromPath(path),
}));

const pageMap = new Map(pages.map((page) => [page.slug, page]));

export function getAllAiVisualPages() {
	return pages;
}

export function getAiVisualPage(slug: string) {
	return pageMap.get(slug);
}

export function hasAiVisualPage(slug: string) {
	return pageMap.has(slug);
}

export function getAiVisualPageUrl(slug: string) {
	return url(`/ai/${slug}/`);
}
