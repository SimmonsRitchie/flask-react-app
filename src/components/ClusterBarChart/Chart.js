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
import CustomLegend from "./Legend";
import { titleCase } from "../../utils/dataHelpers/formatters";

const Chart = ({
  title,
  data,
  dataKey,
  clusterCategories,
  yAxisWidth,
  xAxisHeight,
  includePercent,
  xAxisLabel,
  barCategoryGap,
  colorScheme,
  yAxisTickFormatter,
  tooltipFormatter,
  legendHeight,
}) => {
  return (
    <ChartWrapper title={title}>
      <ResponsiveContainer>
        <BarChart
          barCategoryGap={barCategoryGap}
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
            axisLine={false}
            tickLine={false}
            height={xAxisHeight}
            label={xAxisLabel}
            type="category"
            dataKey={dataKey}
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
              />
            }
          />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="square"
            iconSize={10}
            wrapperStyle={{ marginLeft: 0 }}
            content={<CustomLegend />}
            height={legendHeight}
          />
          <CartesianGrid horizontal vertical={false} />
          {clusterCategories.map((catKey, idx) => {
            return (
              <Bar
                key={catKey}
                dataKey={catKey}
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
  barCategoryGap: 10,
  colorScheme: schemeTableau10,
  xAxisHeight: 30,
  yAxisTickFormatter: null,
  tooltipFormatter: null,
  legendHeight: 50,
};

Chart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  clusterCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxisWidth: PropTypes.number,
  includePercent: PropTypes.bool,
  xAxisLabel: PropTypes.string,
  barCategoryGap: PropTypes.number,
  colorScheme: PropTypes.arrayOf(PropTypes.string),
  xAxisHeight: PropTypes.number,
  yAxisTickFormatter: PropTypes.func,
  tooltipFormatter: PropTypes.func,
  legendHeight: PropTypes.number,
};

export default Chart;
