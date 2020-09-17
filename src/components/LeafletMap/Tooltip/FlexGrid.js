import React from "react";
import PropTypes from "prop-types";

export const FlexGrid = ({ data, fields }) => {
  return (
    <div className="tooltip-flex-grid__container">
      {fields.map((row) => {
        const { fieldName, accessor, formatter } = row;
        let value = data[accessor];
        if (formatter) {
          value = formatter(value);
        }
        return <FlexRow key={fieldName} label={fieldName} value={value} />;
      })}
    </div>
  );
};

FlexGrid.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const FlexRow = ({ label, value }) => {
  return (
    <div className="tooltip-flex-grid__row">
      <FlexCell>{label}</FlexCell>
      <FlexCell>{value}</FlexCell>
    </div>
  );
};

FlexRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export const FlexCell = ({ children }) => {
  return <div className="tooltip-flex-grid__cell">{children}</div>;
};

FlexCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
