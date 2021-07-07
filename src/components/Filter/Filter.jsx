import PropTypes from "prop-types";
import { ContactTitle, InputFind } from "./Filter.styles";

function Filter({ value, onChange }) {
  return (
    <div>
      <ContactTitle>Find contacts by name</ContactTitle>
        <InputFind
            type="text"
            value={value}
            onChange={onChange} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
