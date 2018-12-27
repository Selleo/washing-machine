import React from "react";
import DatePicker from "react-datepicker";

const TimePickerWrapper = ({ input: { onChange, value }, meta: { error } }) => {
  console.log(value);
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      dateFormat="h:mm aa"
      timeCaption="Time"
    />
  );
};
export default TimePickerWrapper;
