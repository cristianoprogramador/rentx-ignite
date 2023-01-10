import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "../../components/Button";
import theme from "../../styles/theme";
import { Container, Header, Title, SubTitle, Footer } from "./styles";

export function SignIn() {
  return (
    <Container>
      <StatusBar backgroundColor="transparent" style="dark" translucent />
      <Header>
        <Title>Estamos {"\n"}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar {"\n"}uma experiência incrível.
        </SubTitle>
      </Header>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          disabled={true}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          onPress={() => {}}
          disabled={true}
          loading={false}
        />
      </Footer>
    </Container>
  );
}
