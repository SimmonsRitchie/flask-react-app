import { format } from "d3-format";
import { countDecimals } from "./misc";

// Formats thousands, 1000 becomes 1k, etc.
export const formatK = format("~s");

// Formats commas, 1000 becomes 1,000
export const formatComma = (value, { defaultVal = "" } = {}) => {
  const formatter = format(",");
  if (value === undefined || value === null) {
    return defaultVal;
  }
  return formatter(value);
};

// formats commas but with 0 dp, 1000.45 becomes 1,000
export const formatCommaZeroDp = (value, { defaultVal = "" } = {}) => {
  const formatter = format(",.0f");
  if (value === undefined || value === null) {
    return defaultVal;
  }
  return formatter(value);
};

// Formats commas to X dp. eg if x is 2. 1000.33532343 becomes 1,000.33
// If number of decimal places is lower than set dp, then final val will
// just use that number of dp.
export const formatCommaXDp = (value, dp = 2, { defaultVal = "" } = {}) => {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return defaultVal;
  }
  const existingDp = countDecimals(value);
  const formatter =
    existingDp > dp ? format(`,.${dp}f`) : format(`,.${existingDp}f`);
  return formatter(value);
};

// formats numbers as percent with 1 dp, eg. 49.343 becomes "49.3%".
// Second param will change dp.
export const formatPerc = (value, dp = 1, { defaultVal = "" } = {}) => {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return defaultVal;
  }
  const newValue = formatCommaXDp(value, dp);
  return `${newValue}%`;
};

export const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i += 1) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};
