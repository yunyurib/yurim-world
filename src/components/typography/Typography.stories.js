import React from "react";

import { Normal } from "./Normal";
import { Art } from "./Art";
import { Design } from "./Design";

export default {
  title: "components/Typography",
  component: Text,
  argTypes: {},
};

export const NormalText = (args) => {
  return <Normal {...args} />;
};
export const ArtText = (args) => {
  return <Art {...args} />;
};
export const DefaultDesign = (args) => {
  return <Design {...args} />;
};
