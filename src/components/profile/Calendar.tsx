import React from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
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
          isSelected={isSelected}
          isCurrentMonth={isCurrentMonth}
        >
          <DayText
            isSelected={isSelected}
            isCurrentMonth={isCurrentMonth}
          >
            {day.format("D")}
          </DayText>
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
    <>
      <CalendarContainer>
        <HeaderContainer>
          <MoveButton onPress={onPrevMonth}>
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
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  paddingHorizontal: 15px;
  paddingVertical: 15px;
  backgroundColor: #F0F4F1;
  borderRadius: 20px;
`;

const HeaderContainer = styled.View`
  width: 100%;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  marginBottom: 10;
  paddingHorizontal: 20px;
`;

const HeaderText = styled.Text`
  fontSize: 18;
  fontFamily: "ExtraBold";
`;

const MoveButton = styled.TouchableOpacity`
  activeOpacity: 0.8;
  paddingVertical: 5px;
`;

const MoveButtonText = styled.Text`
  fontSize: 18;
  fontFamily: "ExtraBold";
`;

const ColumnContainer = styled.View`
  width: 100%;  
  display: flex;
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
  paddingVertical: 6px;
`;

const CalendarFrame = styled.View`
  width: 100%;  
  display: flex;
  flexDirection: column;
`;

const WeekContainer = styled.View`
  width: 100%;
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
  paddingVertical: 6px;
`;

const DayButton = styled.TouchableOpacity`
  width: 30;
  height: 30;
  justifyContent: center;
  alignItems: center;
  borderRadius: 10px;
  ${(props: { isCurrentMonth: boolean; isSelected: boolean; }) =>
    props.isCurrentMonth &&
    css`
      background-color: ${props.isSelected ? "#6EBE75" : "transparent"};
    `}
`;

const ColumnText = styled.Text`
  fontSize: 12px;
  fontFamily: "ExtraBold";
`;

const DayText = styled.Text`
  fontSize: 12px;
  fontFamily: "Medium";
  ${(props: { isCurrentMonth: boolean; isSelected: boolean }) =>
  !props.isCurrentMonth &&
  css`
    opacity: 0.3;
  `}
  ${(props: { isCurrentMonth: boolean; isSelected: boolean; }) =>
    props.isCurrentMonth &&
    css`
      color: ${props.isSelected ? "#FFFFFF" : "#000000"};
    `}
`;

export default Calendar;