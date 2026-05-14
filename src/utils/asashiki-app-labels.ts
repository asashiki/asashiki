export interface AppLabel {
	desc: string;
	name: string;
}

export const APP_LABELS: Record<string, AppLabel> = {
	"7zfm": { desc: "在解压文件~", name: "7-Zip" },
	applicationframehost: { desc: "在用 UWP 应用~", name: "UWP 应用" },
	brave: { desc: "正在用 Brave 浏览~", name: "Brave" },
	chrome: { desc: "正在用 Chrome 浏览~", name: "Chrome" },
	cmd: { desc: "在敲 cmd~", name: "Cmd" },
	code: { desc: "正在 coding~", name: "VS Code" },
	"com.android.chrome": { desc: "正在浏览网页~", name: "Chrome" },
	"com.android.settings": { desc: "正在改设置~", name: "系统设置" },
	"com.anthropic.claude": { desc: "正在和 Claude 聊天~", name: "Claude" },
	"com.android.deskclock": { desc: "正在看闹钟~", name: "时钟" },
	"com.android.vending": { desc: "正在逛 Play 商店~", name: "Play 商店" },
	"com.bilibili.app.blue": { desc: "正在刷 B站~", name: "哔哩哔哩" },
	"com.bilibili.app.in": { desc: "正在刷 B站~", name: "B站" },
	"com.douban.frodo": { desc: "正在刷豆瓣~", name: "豆瓣" },
	"com.google.android.apps.youtube.music": {
		desc: "正在听 YT Music~",
		name: "YouTube Music",
	},
	"com.google.android.youtube": { desc: "正在看 YouTube~", name: "YouTube" },
	"com.google.android.gm": { desc: "正在看邮件~", name: "Gmail" },
	"com.google.android.apps.maps": { desc: "正在导航~", name: "Google Maps" },
	"com.google.android.apps.bard": {
		desc: "正在和 Gemini 聊天~",
		name: "Gemini",
	},
	"com.github.android": { desc: "正在逛 GitHub~", name: "GitHub" },
	"com.instagram.android": { desc: "正在刷 INS~", name: "Instagram" },
	"com.microsoft.emmx": { desc: "正在浏览网页~", name: "Edge" },
	"com.microsoft.outlook": { desc: "正在处理邮件~", name: "Outlook" },
	"com.microsoft.teams": { desc: "正在 Teams 开会~", name: "Teams" },
	"com.miui.gallery": { desc: "正在翻相册~", name: "相册" },
	"com.miui.home": { desc: "在桌面发呆~", name: "桌面" },
	"com.miui.notes": { desc: "正在记便签~", name: "便签" },
	"com.miui.player": { desc: "正在听小米音乐~", name: "小米音乐" },
	"com.miui.weather2": { desc: "正在看天气~", name: "天气" },
	"com.netease.cloudmusic": { desc: "正在听网易云~", name: "网易云音乐" },
	"com.netease.newsreader.activity": {
		desc: "正在看网易新闻~",
		name: "网易新闻",
	},
	"com.notion.id": { desc: "正在整理 Notion~", name: "Notion" },
	"com.okinc.okex.gp": { desc: "正在看 OKX~", name: "OKX" },
	"com.openai.chatgpt": { desc: "正在和 ChatGPT 聊天~", name: "ChatGPT" },
	"com.server.auditor.ssh.client": { desc: "正在连 SSH~", name: "SSH" },
	"com.spotify.music": { desc: "正在听 Spotify~", name: "Spotify" },
	"com.taobao.idlefish": { desc: "正在逛闲鱼~", name: "闲鱼" },
	"com.taobao.taobao": { desc: "正在逛淘宝~", name: "淘宝" },
	"com.tencent.mm": { desc: "正在刷微信~", name: "微信" },
	"com.tencent.mobileqq": { desc: "正在和朋友聊 QQ~", name: "QQ" },
	"com.twitter.android": { desc: "正在刷 Twitter~", name: "Twitter / X" },
	"com.wbrawner.simplemarkdown": { desc: "正在写 Markdown~", name: "Markdown" },
	"com.weibo.android": { desc: "正在刷微博~", name: "微博" },
	"com.xingin.xhs": { desc: "正在刷小红书~", name: "小红书" },
	"com.xiaomi.bluetooth": { desc: "正在连接蓝牙~", name: "蓝牙" },
	"com.zhihu.android": { desc: "正在看知乎~", name: "知乎" },
	"com.zui.launcher": { desc: "在桌面发呆~", name: "桌面" },
	codex: { desc: "正在用 Codex~", name: "Codex" },
	cursor: { desc: "正在 coding (Cursor)~", name: "Cursor" },
	discord: { desc: "在 Discord 摸鱼~", name: "Discord" },
	explorer: { desc: "在翻文件夹~", name: "文件资源管理器" },
	firefox: { desc: "正在用 Firefox 浏览~", name: "Firefox" },
	hillsplayer: { desc: "正在看本地视频~", name: "Hills Player" },
	md: { desc: "正在记笔记~", name: "Obsidian" },
	msedge: { desc: "正在用 Edge 浏览~", name: "Edge" },
	notepad: { desc: "在记事本写东西~", name: "记事本" },
	openwith: { desc: "正在打开文件~", name: "打开方式" },
	"org.mozilla.firefox": { desc: "正在浏览网页~", name: "Firefox" },
	"org.telegram.messenger": { desc: "正在看 Telegram~", name: "Telegram" },
	obsidian: { desc: "在 Obsidian 记笔记~", name: "Obsidian" },
	powershell: { desc: "在敲 PowerShell~", name: "PowerShell" },
	pwsh: { desc: "在敲 PowerShell~", name: "PowerShell" },
	qqmusic: { desc: "在听 QQ 音乐~", name: "QQ音乐" },
	searchhost: { desc: "在 Windows 搜索~", name: "搜索" },
	shellexperiencehost: { desc: "切系统界面~", name: "系统界面" },
	snippingtool: { desc: "正在截图~", name: "截图工具" },
	startmenuexperiencehost: { desc: "在翻开始菜单~", name: "开始菜单" },
	steam: { desc: "在 Steam 上挑游戏~", name: "Steam" },
	telegram: { desc: "在看 Telegram~", name: "Telegram" },
	"tv.danmaku.bili": { desc: "正在刷 B站~", name: "哔哩哔哩" },
	windowsterminal: { desc: "在敲命令行~", name: "Windows Terminal" },
	"windows.afk": { desc: "暂时离开~", name: "AFK" },
	"windows.idle": { desc: "Windows 待机~", name: "Windows" },
	winrar: { desc: "在解压文件~", name: "WinRAR" },
	wt: { desc: "在敲命令行~", name: "Windows Terminal" },
};

const BROWSER_PROCS = new Set([
	"msedge",
	"chrome",
	"firefox",
	"opera",
	"brave",
]);
const EDITOR_PROCS = new Set([
	"code",
	"cursor",
	"windsurf",
	"devenv",
	"rider64",
	"idea64",
	"pycharm64",
	"webstorm64",
	"notepad",
]);
const TERMINAL_PROCS = new Set([
	"windowsterminal",
	"wt",
	"powershell",
	"pwsh",
	"cmd",
]);
const BROWSER_SUFFIX_RE =
	/\s*[-—–]\s*(Microsoft\s*Edge|Google Chrome|Mozilla Firefox|Opera|Brave)\s*$/i;
const EDITOR_SUFFIX_RE =
	/\s*[-—–]\s*(Visual Studio Code|Visual Studio|Cursor|Windsurf|JetBrains [^-—–]+|Rider|IntelliJ IDEA|PyCharm|WebStorm)\s*$/i;

function clean(value: string) {
	return value.replace(/[​-‍﻿ ]/g, " ").trim();
}

export function truncate(value: string, max: number) {
	return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

export function appLabel(appId: null | string | undefined): AppLabel {
	if (!appId) return { desc: "发呆中~", name: "未知" };
	if (APP_LABELS[appId]) return APP_LABELS[appId];
	const last = appId.split(".").pop() ?? appId;
	const name =
		last.length > 0 ? last.charAt(0).toUpperCase() + last.slice(1) : last;
	return { desc: `正在用 ${name}~`, name };
}

export function appName(appId: null | string | undefined) {
	return appLabel(appId).name;
}

export function liveDescription({
	appId,
	windowTitle,
	who = "Asashiki",
}: {
	appId: null | string | undefined;
	who?: string;
	windowTitle?: null | string;
}) {
	const label = appLabel(appId);
	const title = windowTitle ? clean(windowTitle) : "";

	if (appId && BROWSER_PROCS.has(appId) && title) {
		const tab = clean(title.replace(BROWSER_SUFFIX_RE, ""));
		if (tab && tab !== title) {
			const lower = tab.toLowerCase();
			if (lower.includes("youtube"))
				return `${who} 在 ${label.name} 上看 YouTube：${truncate(tab, 40)}`;
			if (lower.includes("bilibili") || lower.includes("哔哩哔哩"))
				return `${who} 在 ${label.name} 上刷 B 站：${truncate(tab, 40)}`;
			if (lower.includes("github"))
				return `${who} 在 ${label.name} 上逛 GitHub：${truncate(tab, 40)}`;
			if (lower.includes("twitter") || lower.includes(" / x"))
				return `${who} 在 ${label.name} 上刷 Twitter`;
			if (lower.includes("stack overflow"))
				return `${who} 在 ${label.name} 上查 Stack Overflow`;
			return `${who} 在 ${label.name} 看「${truncate(tab, 50)}」`;
		}
	}

	if (appId && EDITOR_PROCS.has(appId) && title) {
		const stripped = clean(title.replace(EDITOR_SUFFIX_RE, ""));
		if (stripped && stripped !== title) {
			const file = stripped.split(/\s*[-—–]\s*/)[0];
			if (file) return `${who} 在 ${label.name} 写 ${truncate(file, 50)}`;
		}
	}

	if (appId && TERMINAL_PROCS.has(appId) && title) {
		return `${who} 在 ${label.name}：${truncate(title, 60)}`;
	}

	return `${who} ${label.desc}`;
}
