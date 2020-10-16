import React from "react";

import { Button } from "./Button";

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
