import ToastContainer from "@components/ToastContainer";
import { SignUpProps } from "@pages/Join/SignUpPage";
import React from "react";
import styled from "styled-components/native";

export interface ModalProps extends SignUpProps {
  children: React.ReactNode;
  toast: boolean;
  toastText: string;
  tab: number;
}

const Modal = ({ children, toast, setToast, toastText, tab, setTab }: ModalProps) => {
  return (
    <>
      <Wrapper>
        <ToastContainer text={toastText} show={toast!} setShow={setToast} />
        <ModalWrapper>
          <Tab>
            <TabButton onPress={() => setTab!(1)} isSelected={tab === 1}>
              <TabText>로그인</TabText>
            </TabButton>
            <TabButton onPress={() => setTab!(2)} isSelected={tab === 2}>
              <TabText>회원가입</TabText>
            </TabButton>
          </Tab>
          {children}
        </ModalWrapper>
      </Wrapper>
    </>
  );
};

export default Modal;

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 28px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.View`
  width: 100%;
  height: 480px;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
`;

const Tab = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  margin-bottom: 10px;
`;

const TabButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => (props.isSelected ? props.theme.color.green_200 : "#fff")};
  padding: 0px 10px 10px 10px;
`;

const TabText = styled.Text``;
