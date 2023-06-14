import React from "react";
import { Control, Controller, FieldError, FieldErrors, FieldValues } from "react-hook-form";
import styled from "styled-components/native";

interface InputControlProps {
  label: string;
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
  errors: any;
}

const InputControl = ({ label, control, name, placeholder, errors }: InputControlProps) => {
  return (
    <InputView>
      <Label>{label}</Label>
      <Controller
        control={control}
        rules={{ required: true }}
        name={name}
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={placeholder}
            secureTextEntry={name.includes("password")}
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
`;

const Label = styled.Text`
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  font-family: "Light";
  font-size: 14px;
  border: 1px solid #999;
  border-radius: 10px;
`;

const ErrorMessage = styled.Text`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;
