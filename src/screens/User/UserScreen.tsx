import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import Profile from "../../components/profile/Profile";
import UserButton from "../../components/profile/UserButton";
import Calendar from "../../components/profile/Calendar";
import Bedge from "../../components/profile/Bedge";
import Tree from "../../components/profile/Tree";

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
    <Layout color="#6ebe75">
      <Header text="마이 페이지" noBack={true} color="#6ebe75" />
      <Container>
        <Profile username="웃고 싶은 날엔" registerDate={55} missionNumber={1} />
        <Margin props={30} />
      </Container>
      <TabContainer>
        <UserButton isSelected={isSelected} setIsSelected={setIsSelected} />
        {isSelected === 1 && <Bedge />}
        {isSelected === 2 && <Tree badgeNumber={9} />}
        {isSelected === 3 && (
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            isAttended={isAttended}
          />
        )}
      </TabContainer>
    </Layout>
  );
};

export default UserScreen;

// styled
const Container = styled.View`
  padding: 10px 15px 0 15px;
  background-color: #6ebe75;
`;
const TabContainer = styled.View`
  flex: 1;
  gap: 30px;
  padding: 10px 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.color.white};
`;
