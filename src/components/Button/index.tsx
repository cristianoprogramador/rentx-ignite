import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  disabled,
  loading = false,
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
        <Title>{title}</Title>
      )}
    </Container>
  );
}
