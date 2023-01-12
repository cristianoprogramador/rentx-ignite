import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  disabled,
  loading = false,
  light = false,
}: Props) {
  const theme = useTheme();

  return (
    <Container
      color={color}
      onPress={onPress}
      disabled={disabled}
      style={{ opacity: disabled === true || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
