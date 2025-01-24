import React, { useState } from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

export const DatePickerComponent = ({ selectedDateStrings, setSelectedDateStrings }) => {
  const [, setSelectedDates] = useState([]);

  const handleDateChange = (dates, dateStrings) => {
    setSelectedDates(dates);
    setSelectedDateStrings(dateStrings);
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker onChange={handleDateChange} />
    </Space>
  );
};
