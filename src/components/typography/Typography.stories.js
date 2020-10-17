import React from "react";

import { Small } from "./Small";

export default {
  title: "components/Typography",
  component: Text,
  argTypes: {},
};

export const DefaultSmall = (args) => {
  return <Small {...args} />;
};
DefaultSmall.argTypes = {
  innerText: { control: { type: "text" } },
  isDisabled: { control: { type: "boolean" } },
  size: { control: { type: "select", options: ["small", "medium", "large"] } },
};
