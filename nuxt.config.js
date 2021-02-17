module.exports = {
  buildModules: ["bootstrap-vue/nuxt"],
  css: [
    {
      src: "~assets/scss/variables/variables.scss",
      lang: "sass",
    },
    {
      src: "~assets/scss/global.scss",
      lang: "sass",
    },
  ],
  plugins: ["~/plugins/i18n.js"],
  /*
   ** Headers of the page
   */
  head: {
    title: "ksu-vue",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "site kursk state university",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
