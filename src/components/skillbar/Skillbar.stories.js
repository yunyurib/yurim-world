import React from "react";

import { Skillbar } from "./Skillbar";

export default {
  title: "components/Skillbar",
  component: Text,
  argTypes: {},
};
export const DefaultSkill = (args) => {
  return <Skillbar {...args} />;
};
