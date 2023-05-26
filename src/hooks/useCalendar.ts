import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const handleSelectDate = (date: Dayjs) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    const newDate = selectedDate.subtract(1, "month");
    setSelectedDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = selectedDate.add(1, "month");
    setSelectedDate(newDate);
  };

  return { selectedDate, handleSelectDate, handlePrevMonth, handleNextMonth };
};