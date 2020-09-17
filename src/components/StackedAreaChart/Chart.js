import React from "react";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import PropTypes from "prop-types";
import { schemeTableau10 as colorScheme } from "d3-scale-chromatic";
import CustomTooltip from "./Tooltip";
import ChartWrapper from "./ChartWrapper";
import CustomLegend from "./Legend";
import { titleCase } from "../../utils/dataHelpers/formatters";

const Chart = ({
  title,
  data,
  dataKey,
  stackCategories,
  yAxisWidth,
  includePercent,
  xAxisLabel,
  stackedPercent,
}) => {
  const toPercent = (decimal, fixed = 0) =>
    `${(decimal * 100).toFixed(fixed)}%`;
  let yAxisFormatter;
  let stackOffset;
  if (stackedPercent) {
    yAxisFormatter = toPercent;
    stackOffset = "expand";
  }

  return (
    <ChartWrapper title={title}>
      <ResponsiveContainer>
        <AreaChart
          stackOffset={stackOffset}
          width={500}
          height={800}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            tick={{ fontSize: 16 }}
            axisLine={false}
            tickLine={false}
            // height={50}
            label={xAxisLabel}
            dataKey={dataKey}
            type="category"
          />
          <YAxis
            tick={{ fontSize: 16 }}
            tickFormatter={yAxisFormatter}
            width={yAxisWidth}
            tickLine={false}
            type="number"
            interval="preserveEnd"
          />
          <Tooltip
            content={
              <CustomTooltip includePercent={includePercent} reverseList />
            }
          />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="square"
            iconSize={10}
            wrapperStyle={{ marginLeft: 0 }}
            content={<CustomLegend />}
          />
          <CartesianGrid horizontal={false} />
          {stackCategories.map((catKey, idx) => {
            console.log(catKey);
            return (
              <Area
                type="monotone"
                key={catKey}
                dataKey={catKey}
                stackId="a"
                fill={colorScheme[idx]}
                stroke={colorScheme[idx]}
                name={titleCase(catKey)}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

Chart.defaultProps = {
  title: null,
  yAxisWidth: 50,
  includePercent: false,
  xAxisLabel: null,
  stackedPercent: false,
};

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  stackCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxisWidth: PropTypes.number,
  includePercent: PropTypes.bool,
  xAxisLabel: PropTypes.string,
  stackedPercent: PropTypes.bool,
};

export default Chart;
