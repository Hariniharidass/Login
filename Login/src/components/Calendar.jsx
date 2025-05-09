import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      console.log("Range selected:", start, "to", end);
    }
  };
  const excludedDays = [addDays(new Date(), 3), addDays(new Date(), 10)];
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        excludeDates={excludedDays}
        selectsRange
        selectsDisabledDaysInRange
        inline
      />
    </div>
  );
};

export default Calendar;
