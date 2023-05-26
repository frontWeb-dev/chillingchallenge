import React, { useState } from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Margin from "../components/Margin";
import Profile from "../components/profile/Profile";
import UserButton from "../components/profile/UserButton";
import Calendar from "../components/profile/Calendar";

const UserScreen: React.FC = () => {
  // 버튼 선택 관련 state
  const [isSelected, setIsSelected] = useState(1);

  // 달력 날짜 선택 관련 state
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // 달력 관련 hooks
  const handleSelectDate = (date: dayjs.Dayjs) => {
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


  return (
    <Layout>
      <Header text="나의 칠링챌링" />
      <Margin props={16} />
      <Container>
        <Profile
          username="웃고 싶은 날엔"
          registerDate={55}
          missionNumber={1}
        />
        <Margin props={30} />
        <UserButton
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <Margin props={30} />
        {isSelected === 3 && (
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />
        )}
      </Container>
    </Layout>
  );
};

export default UserScreen;

// styled
const Container = styled.View`
  paddingHorizontal: 15px;
`;
