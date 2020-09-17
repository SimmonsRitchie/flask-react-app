import React from "react";
import PropTypes from "prop-types";

const List = ({ data, fields }) => {
  return (
    <React.Fragment>
      {fields.map((row) => {
        const { fieldName, accessor, formatter } = row;
        let value = data[accessor];
        if (formatter) {
          value = formatter(value);
        }
        return <ListItem key={fieldName} label={fieldName} value={value} />;
      })}
    </React.Fragment>
  );
};

List.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const ListItem = ({ label, value }) => {
  return (
    <div className="tooltip-list__container">
      <span>{`${label}: `}</span>
      <span className="tooltip-list__value">{value}</span>
    </div>
  );
};

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default List;
