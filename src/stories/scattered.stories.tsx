import { Story, Meta } from "@storybook/react/types-6-0";
import { Scattered, ScatteredProps } from "../components/graph/scattered";

export default {
  title: "Chart/Scattered",
  component: Scattered,
} as Meta;

const canvasSize = { width: 500, height: 500 };

const Template: Story<ScatteredProps> = (args) => {
  return (
    <div style={canvasSize}>
      <Scattered {...args} />
    </div>
  );
};

export const scattered = Template.bind({});

scattered.args = {
};
