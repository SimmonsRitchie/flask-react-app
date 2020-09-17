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
  Label,
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
}) => {
  return (
    <ChartWrapper title={title}>
      <ResponsiveContainer>
        <BarChart
          barCategoryGap={5}
          layout="vertical"
          width={500}
          height={800}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            tick={{ fontSize: 16 }}
            type="number"
            axisLine={false}
            tickLine={false}
            height={50}
            label={xAxisLabel}
          />
          <YAxis
            tick={{ fontSize: 16 }}
            width={yAxisWidth}
            interval={0}
            type="category"
            tickLine={false}
            dataKey={dataKey}
          />
          <Tooltip
            content={<CustomTooltip includePercent={includePercent} />}
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
            return (
              <Bar
                key={catKey}
                dataKey={catKey}
                stackId="a"
                fill={colorScheme[idx]}
                name={titleCase(catKey)}
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

Chart.defaultProps = {
  title: null,
  yAxisWidth: 80,
  includePercent: false,
  xAxisLabel: null,
};

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  stackCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxisWidth: PropTypes.number,
  includePercent: PropTypes.bool,
  xAxisLabel: PropTypes.string,
};

export default Chart;
