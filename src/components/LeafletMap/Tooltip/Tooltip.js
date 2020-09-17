import React from "react";
import PropTypes from "prop-types";
import TooltipWrapper from "./TooltipWrapper";
import { FlexGrid } from "./FlexGrid";
import List from "./List";

const Tooltip = ({ data, schema, table = false, footnote = null }) => {
  const mainLabel = schema.find((item) => item.mainLabel);
  const mainLabelVal = mainLabel ? data[mainLabel.accessor] : null;
  const subLabel = schema.find((item) => item.subLabel);
  const subLabelVal = subLabel ? data[subLabel.accessor] : null;

  const fields = schema.filter((item) => !item.mainLabel && !item.subLabel);
  if (data) {
    return (
      <TooltipWrapper
        label={mainLabelVal}
        subLabel={subLabelVal}
        footnote={footnote}
      >
        {table ? (
          <FlexGrid data={data} fields={fields} />
        ) : (
          <List data={data} fields={fields} />
        )}
      </TooltipWrapper>
    );
  }
  return null;
};

Tooltip.defaultProps = {
  table: false,
  data: null,
  footnote: null,
};

Tooltip.propTypes = {
  table: PropTypes.bool,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any),
  ]),
  schema: PropTypes.arrayOf(PropTypes.any).isRequired,
  footnote: PropTypes.arrayOf(PropTypes.any),
};

export default Tooltip;
