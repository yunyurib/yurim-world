// .storybook/manager.js

import { addons } from "@storybook/addons";
import yurimtheme from "./yurimtheme";
// import { themes } from "@storybook/theming";

addons.setConfig({
  theme: yurimtheme,
});
