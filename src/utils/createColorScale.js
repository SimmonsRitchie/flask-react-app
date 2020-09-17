import { schemeBlues } from "d3-scale-chromatic";
import { extent } from "d3-array";
import { scaleQuantize } from "d3-scale";
import filterOutliers from "./dataHelpers/removeOutliers";

const createColorScale = ({ data, accessor, colorSteps = 5 }) => {
  /**
   * Removes outliers from data and builds a d3 quantize scale. Good for choropleth maps.
   *
   * @param data: Arr of objects. Data to use for scale.
   * @param accessor: String. Target prop, that will be used for the scale.
   * @param colorSteps: Int. Number of steps in color scheme.
   */
  // SET COLOR SCHEME
  let colorScheme = schemeBlues[colorSteps + 1];
  colorScheme = colorScheme.filter((_, i) => i !== 0);
  // GET VALUES FOR DOMAIN
  let dataArr = data.map((item) => item[accessor]);
  /**
   * REMOVE OUTLIERS & GET DOMAIN
   * Because some counties have extremely high per capita rates, we remove outliers before configuring our domain.
   */
  dataArr = filterOutliers(dataArr);
  let dataExtent = extent(dataArr);
  /**
   * HANDLE SMALL AND IRREGULAR VALUES
   * So that our legend doesn't look funny, we adjust the domain to better handle small values and to try
   * and round it to numbers that best fit the number of items in the range.
   */
  const maxVal = dataExtent[1];
  const rangeLength = colorScheme.length;
  if (maxVal < rangeLength + 1) {
    dataExtent = [dataExtent[0], rangeLength];
  } else {
    const floor = Math.ceil(maxVal / (rangeLength * 10)) * (rangeLength * 10);
    dataExtent = [dataExtent[0], floor];
  }
  /**
   * BUILD SCALE
   * Using quantize scale, rather than quantile, because that seems to be a more accurate way to display data
   * with such an extreme distribution.
   */
  const colorScale = scaleQuantize()
    .domain(dataExtent)
    .range(colorScheme)
    .nice();

  return colorScale;
};

export default createColorScale;
