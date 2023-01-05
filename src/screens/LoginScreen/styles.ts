import styled from "styled-components/native";

import { COLORS, FONTS } from "../../theme";

import logo from "../../assets/stacked-logo.png";

export const Wrapper = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 48px 32px;
`;

export const Logo = styled.Image.attrs({ source: logo, resizeMode: "contain" })`
  width: 100%;
  height: 30%;
`;

export const Title = styled.Text`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BLACK};
  font-size: 32px;
  align-self: flex-start;
  margin-bottom: 16px;
`;

export const ForgotPasswordWrapper = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 32px 0;
`;

export const ForgotPasswordLabel = styled.Text`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.BLACK};
  font-size: 14px;
`;

export const OrText = styled.Text`
  font-family: ${FONTS.BOLD};
  color: ${COLORS.GRAY};
  font-size: 14px;
  margin-bottom: 32px;
`;
