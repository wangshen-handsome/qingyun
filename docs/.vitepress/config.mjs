import { defineConfig } from "vitepress";

import cooperation from "./cooperation.js";

import store from "./store.js";

import disease from "./disease.js";

// const BASE_URL = "/qingyun/";
const BASE_URL = "";

const withBase = (path) => `${BASE_URL}${path}`.replace(/\/+/g, "/");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "户县青云种养殖专业合作社",
  description: "欢迎来到户县青云种养殖专业合作社",
  // base: "/qingyun/",
  // head: [["link", { rel: "icon", href: withBase("/logo.svg") }]],
  head: [["link", { rel: "icon", href: withBase("/logo.png") }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    outline: "deep",
    // search: {
    //   provider: 'local'
    // },
    nav: [
      { text: "合作社简介", link: "/cooperation/cooperationAbout" },
      { text: "葡萄小故事", link: "/store/wangzhan" },
      { text: "葡萄相关病症", link: "/disease/frequentGasBurning" },
    ],
    //侧边栏
    sidebar: [
      {
        text: "合作社简介",
        collapsed: true,
        items: cooperation,
      },
      {
        text: "葡萄小故事",
        collapsed: true,
        items: store,
      },
      {
        text: "葡萄相关病症",
        collapsed: true,
        items: disease,
      },
    ],
    footer: {
      message: "户县青云种养殖专业合作社",
      copyright: "Copyright © 2023",
    },
    ignoreDeadLinks: true,
    //添加搜索
    search: {
      provider: "local",
    },
  },
  cleanUrls: true,
  //搜索
});
