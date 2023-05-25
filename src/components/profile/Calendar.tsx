import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import dayjs, { Dayjs } from "dayjs";

interface CalendarProps {
  selectedDate: Dayjs;
  onSelectDate: (date: Dayjs) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onSelectDate,
  onPrevMonth,
  onNextMonth,
}) => {
  // 달력 앞 뒤 공백 채우기
  const startOfMonth = dayjs(selectedDate).startOf("month");
  const endOfMonth = dayjs(selectedDate).endOf("month");
  const startWeek = startOfMonth.startOf("week");
  const endWeek = endOfMonth.endOf("week");

  const weeks = [];
  let week = startWeek;

  while (week.isBefore(endWeek)) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = week.add(i, "day");
      const isCurrentMonth = day.isSame(selectedDate, "month");
      const isSelected = day.isSame(selectedDate, "day");

      days.push(
        <DayButton
          key={day.format("YYYY-MM-DD")}
          onPress={() => onSelectDate(day)}
        >
          <DayText>{day.format("D")}</DayText>
        </DayButton>
      );
    }
    weeks.push(
      <WeekContainer key={week.format("YYYY-MM-DD")}>
        {days}
      </WeekContainer>
    );
    week = week.add(7, "day");
  }

  return (
    <View>
      <HeaderContainer>
        <TouchableOpacity onPress={onPrevMonth}>
          <MoveButton>{`<`}</MoveButton>
        </TouchableOpacity>
        <HeaderText>{selectedDate.format("MMMM YYYY")}</HeaderText>
        <TouchableOpacity onPress={onNextMonth}>
          <MoveButton>{`>`}</MoveButton>
        </TouchableOpacity>
      </HeaderContainer>
      <CalendarFrame>{weeks}</CalendarFrame>
    </View>
  );
};

// styled
const HeaderContainer = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  marginBottom: 10;
`;

const HeaderText = styled.Text`
  fontSize: 18;
  fontFamily: "ExtraBold";
`;

const MoveButton = styled.Text`
  fontSize: 18;
  fontFamily: "ExtraBold";
`;

const CalendarFrame = styled.View`
  flexDirection: column;
`;

const WeekContainer = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  paddingVertical: 2px;
`;

const DayButton = styled.TouchableOpacity`
  width: 30;
  height: 30;
  justifyContent: center;
  alignItems: center;
  borderRadius: 10px;
`;

const DayText = styled.Text`
  fontSize: 12px;
  fontFamily: "Medium";
`;

export default Calendar;