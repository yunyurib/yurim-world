import React from "react";

import { Button } from "./Button";
import { Buttondd } from "./Buttondd";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {},
};

export const DefaultButton = (args) => {
  return <Button {...args} />;
};
DefaultButton.argTypes = {
  innerText: { control: { type: "text" } },
  isDisabled: { control: { type: "boolean" } },
  size: { control: { type: "select", options: ["small", "medium", "large"] } },
};

export const DefaultButtondd = (args) => {
  return <Buttondd {...args} />;
};
DefaultButtondd.argTypes = {
  innerText: { control: { type: "text" } },
  isDisabled: { control: { type: "boolean" } },
  size: { control: { type: "select", options: ["small", "medium", "large"] } },
};
