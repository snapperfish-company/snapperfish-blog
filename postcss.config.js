module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            colorNeutral: "#8C8D91",
            colorNeutralDark: "#111",
            colorNeutralLight: "#FBFCFC",
            colorPrimary: "#007acc",
            colorPrimaryDark: "#107491",
            colorSecondary: "#46BE77",
            colorSecondaryDark: "#22846C",
            colorText: "#555",
            colorTextLight: "#FFF",
            maxWidth: "60rem",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
