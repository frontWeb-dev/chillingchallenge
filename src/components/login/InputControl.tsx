import React from "react";
import { Control, Controller, FieldError, FieldErrors, FieldValues } from "react-hook-form";
import styled from "styled-components/native";

interface InputControlProps {
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
  errors: any;
}

const InputControl = ({ control, name, placeholder, errors }: InputControlProps) => {
  return (
    <InputView>
      <Controller
        control={control}
        rules={{ required: `${name}을 입력해주세요.` }}
        name={name}
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={placeholder}
            secureTextEntry={name === "password"}
          />
        )}
      />
      {errors && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
    </InputView>
  );
};

export default InputControl;

const InputView = styled.View`
  width: 100%;
  gap: 10px;
`;

const Input = styled.TextInput`
  width: 100%;
  font-family: "Light";
  border: 1px solid #ddd;
  padding: 15px 20px;
  border-radius: 5px;
`;

const ErrorMessage = styled.Text`
  padding-left: 10px;
  font-size: 14px;
  color: red;
`;
