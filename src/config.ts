import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Asashiki",
	subtitle: "浅仪式的博客",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 150, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/green-miku.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "ガード下のメニューー歩く人", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/121764304", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/圆角-莉赛特.jpg", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
		{
			src: "/favicon/圆角-莉赛特01.jpg", // Path of the favicon, relative to the /public directory
			theme: "dark", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		// 关于：本站内部页面收纳于此。父项「关于」可点击进入站点介绍页，
		// 之后想加站内页（如时间线、手记）直接往 children 里补即可。
		{
			name: "关于",
			url: "/about/",
			children: [
				{ name: "关于本站", url: "/about/" },
				{ name: "实时状态", url: "/status/" },
				{ name: "时间胶囊", url: "/capsule/" },
				{ name: "追番", url: "/bangumi/" },
			],
		},
		// 探索：站外目的地收纳于此。父项「探索」可点击进入 /explore 总览页，
		// 子项均为外链。按需增删；以后想再细分小分类时这里好扩展。
		{
			name: "探索",
			url: "/explore/",
			children: [
				{
					name: "时间胶囊 · 全站",
					url: "https://timeline.asashiki.com",
					external: true,
				},
				{ name: "项目展示", url: "https://show.asashiki.com", external: true },
				{ name: "文档", url: "https://doc.asashiki.com", external: true },
				{
					name: "Hibi 日々 · 设备时间线",
					url: "https://link.asashiki.com",
					external: true,
				},
				{
					name: "MCP Switch",
					url: "https://switch.asashiki.com",
					external: true,
				},
				{ name: "GitHub", url: "https://github.com/asashiki", external: true },
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/莉赛特01.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "浅仪式",
	bio: "意気地無し、それでも男?              ——「草莓棉花糖」",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com/asashiki_",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/asashiki_timeline",
		},
		{
			name: "Bangumi",
			icon: "material-symbols:list-alt-rounded",
			url: "https://bangumi.tv/user/asashiki",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
