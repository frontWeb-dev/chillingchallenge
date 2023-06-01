import React from "react";
import styled, { css } from "styled-components/native";
import dayjs, { Dayjs } from "dayjs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CalendarProps {
  selectedDate: Dayjs;
  onSelectDate: (date: Dayjs) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isAttended: string[];
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onSelectDate,
  onPrevMonth,
  onNextMonth,
  isAttended,
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
      const isAttendedDay = isAttended.includes(day.format("YYYY-MM-DD"));

      days.push(
        <DayButton
          key={day.format("YYYY-MM-DD")}
          onPress={() => onSelectDate(day)}
          isSelected={isSelected}
          isCurrentMonth={isCurrentMonth}
          isAttendedDay={isAttendedDay}
        >
          {isAttendedDay ? (
            <MaterialCommunityIcons name="leaf-circle" size={30} color="#6EBE75" />
          ) : (
            <DayText isSelected={isSelected} isCurrentMonth={isCurrentMonth}>
              {day.format("D")}
            </DayText>
          )}
        </DayButton>
      );
    }
    weeks.push(<WeekContainer key={week.format("YYYY-MM-DD")}>{days}</WeekContainer>);
    week = week.add(7, "day");
  }

  return (
    <>
      <CalendarContainer>
        <HeaderContainer>
          <MoveButton activeOpacity={0.8} onPress={onPrevMonth}>
            <MoveButtonText>{`<`}</MoveButtonText>
          </MoveButton>
          <HeaderText>{selectedDate.format("YYYY M월")}</HeaderText>
          <MoveButton onPress={onNextMonth}>
            <MoveButtonText>{`>`}</MoveButtonText>
          </MoveButton>
        </HeaderContainer>
        <ColumnContainer>
          <ColumnText>S</ColumnText>
          <ColumnText>M</ColumnText>
          <ColumnText>T</ColumnText>
          <ColumnText>W</ColumnText>
          <ColumnText>T</ColumnText>
          <ColumnText>F</ColumnText>
          <ColumnText>S</ColumnText>
        </ColumnContainer>
        <CalendarFrame>{weeks}</CalendarFrame>
      </CalendarContainer>
    </>
  );
};

// styled

const CalendarContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #f0f4f1;
  border-radius: 20px;
`;

const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10;
  padding: 0 20px;
`;

const HeaderText = styled.Text`
  font-size: 18;
  font-family: "ExtraBold";
`;

const MoveButton = styled.TouchableOpacity`
  padding: 5px 0;
`;

const MoveButtonText = styled.Text`
  font-size: 18;
  font-family: "ExtraBold";
`;

const ColumnContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 6px 0;
`;

const CalendarFrame = styled.View`
  width: 100%;
`;

const WeekContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 6px 0;
`;

const DayButton = styled.TouchableOpacity<{
  isCurrentMonth: boolean;
  isSelected: boolean;
  isAttendedDay: boolean;
}>`
  width: 30;
  height: 30;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ${(props) =>
    props.isCurrentMonth &&
    !props.isAttendedDay &&
    css`
      background-color: ${props.isSelected ? "#6EBE75" : "transparent"};
    `}
`;

const ColumnText = styled.Text`
  font-size: 12px;
  font-family: "ExtraBold";
`;

const DayText = styled.Text<{ isCurrentMonth: boolean; isSelected: boolean }>`
  font-size: 12px;
  font-family: "Medium";
  ${(props) =>
    !props.isCurrentMonth &&
    css`
      opacity: 0.3;
    `}
  ${(props) =>
    props.isCurrentMonth &&
    css`
      color: ${props.isSelected ? "#FFFFFF" : "#000000"};
    `}
`;

export default Calendar;
