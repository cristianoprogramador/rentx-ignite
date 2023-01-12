import React, { useState } from "react";
import theme from "../../styles/theme";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  InputText,
  IconContainer,
  ChangePasswordVisibilityButton,
} from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>

      <InputText
        secureTextEntry={isPasswordVisible}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
      />
      <IconContainer isFocused={isFocused}>
        <ChangePasswordVisibilityButton
          onPress={handlePasswordVisibilityChange}
        >
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </ChangePasswordVisibilityButton>
      </IconContainer>
    </Container>
  );
}
