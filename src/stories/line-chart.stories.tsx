import { Story, Meta } from "@storybook/react/types-6-0";
import { LineChart, LineChartProps } from "../components/graph/line-chart";

export default {
  title: "Chart/Line",
  component: LineChart,
} as Meta;

const canvasSize = { width: 500, height: 500 };

const Template: Story<LineChartProps> = (args) => {
  return (
    <div style={canvasSize}>
      <LineChart {...args} />
    </div>
  );
};

export const line = Template.bind({});

line.args = {
};
