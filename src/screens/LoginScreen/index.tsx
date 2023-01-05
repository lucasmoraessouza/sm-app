import { useState } from "react";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClientService from "@src/services/ClientService";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as S from "./styles";

export default function LoginScreen() {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <S.Wrapper onPress={Keyboard.dismiss}>
      <S.Content>
        <S.Logo />
        <S.Title>Sign In</S.Title>
        <Input
          iconName="alternate-email"
          value={body.email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          iconName="lock-outline"
          value={body.password}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={!isVisible}
          isPassword
          onEyePress={() => setIsVisible((oldState) => !oldState)}
        />
        <S.ForgotPasswordWrapper>
          <S.ForgotPasswordLabel>Forgot your password?</S.ForgotPasswordLabel>
        </S.ForgotPasswordWrapper>

        <Button buttonText="Sign In" isBlack />

        {/* <S.OrText>OR</S.OrText>

        <Button buttonText="Twitter" onPress={handleTwitterLogin} /> */}
      </S.Content>
    </S.Wrapper>
  );
}
