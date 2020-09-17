import React from "react";
import {
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  CartesianGrid,
} from "recharts";
import PropTypes from "prop-types";
import { schemeTableau10 } from "d3-scale-chromatic";
import CustomTooltip from "./Tooltip";
import ChartWrapper from "./ChartWrapper";

const Chart = ({
  title,
  data,
  xAxisKey,
  yAxisKey,
  yAxisWidth,
  xAxisHeight,
  includePercent,
  xAxisLabel,
  xAxisTickFormatter,
  yAxisTickFormatter,
  tooltipFormatter,
  tooltipLabelFormatter,
}) => {
  return (
    <ChartWrapper title={title}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={800}
          data={data}
          margin={{
            top: 20,
            right: 9,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            tick={{ fontSize: 16 }}
            axisLine={false}
            tickLine={false}
            height={xAxisHeight}
            label={xAxisLabel}
            type="category"
            dataKey={xAxisKey}
            tickFormatter={xAxisTickFormatter}
          />
          <YAxis
            tick={{ fontSize: 16 }}
            interval={0}
            width={yAxisWidth}
            tickLine={false}
            axisLine={false}
            type="number"
            tickFormatter={yAxisTickFormatter}
          />
          <Tooltip
            content={
              <CustomTooltip
                includePercent={includePercent}
                tooltipFormatter={tooltipFormatter}
                tooltipLabelFormatter={tooltipLabelFormatter}
              />
            }
          />
          <CartesianGrid horizontal vertical={false} />
          <Bar dataKey={yAxisKey} fill={schemeTableau10[0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

Chart.defaultProps = {
  title: null,
  yAxisWidth: 80,
  includePercent: false,
  xAxisTickFormatter: null,
  xAxisLabel: null,
  xAxisHeight: 30,
  yAxisTickFormatter: null,
  tooltipFormatter: null,
  tooltipLabelFormatter: null,
};

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  xAxisKey: PropTypes.string.isRequired,
  xAxisTickFormatter: PropTypes.func,
  yAxisKey: PropTypes.string.isRequired,
  yAxisWidth: PropTypes.number,
  includePercent: PropTypes.bool,
  xAxisLabel: PropTypes.string,
  xAxisHeight: PropTypes.number,
  yAxisTickFormatter: PropTypes.func,
  tooltipFormatter: PropTypes.func,
  tooltipLabelFormatter: PropTypes.func,
};

export default Chart;
