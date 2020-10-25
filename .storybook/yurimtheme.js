// YurimTheme.js

import { create } from "@storybook/theming/create";

export default create({
  base: "nomal",

  colorPrimary: "rgb(242, 242, 242)",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "#4271e9",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "rgb(242, 242, 242)",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Yurim storybook",
  brandUrl: "https://example.com",
  brandImage: "http://yurimxu.dothome.co.kr/image/yurim_storybook_logo1.png",
});
