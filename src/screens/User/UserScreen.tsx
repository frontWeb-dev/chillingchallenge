import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import Profile from "../../components/profile/Profile";
import UserButton from "../../components/profile/UserButton";
import Calendar from "../../components/profile/Calendar";

import { useCalendar } from "../../hooks/useCalendar";
import { getAttendance } from "../../utils/Attendance";

const UserScreen: React.FC = () => {
  // state
  const [isSelected, setIsSelected] = useState(1); // 카테고리 선택 관련
  const [isAttended, setIsAttended] = useState(["2023-05-15", "2023-05-16"]); // 출석 관련
  
  // 달력 관련 hooks
  const { selectedDate, handleSelectDate, handlePrevMonth, handleNextMonth } = useCalendar();

  // 출석 상태 불러오기
  useEffect(() => {
    const fetchAttendance = async () => {
      const attendanceList = await getAttendance();
      setIsAttended(attendanceList);
    };
    fetchAttendance();
  }, [isAttended]);
  
  return (
    <Layout>
      <Header text="나의 칠링챌링" noBack={true} />
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
            isAttended={isAttended}
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
