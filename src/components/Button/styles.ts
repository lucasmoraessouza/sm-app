import styled from "styled-components/native";

import { COLORS, FONTS } from "../../theme";

type VariantProp = { isBlack?: boolean };

export const Wrapper = styled.TouchableOpacity<VariantProp>`
  width: 100%;
  background-color: ${({ isBlack }) => (isBlack ? COLORS.BLACK : COLORS.GRAY)};
  justify-content: center;
  align-items: center;
  height: 56px;
  border-radius: 16px;
  margin-bottom: 32px;
`;

export const ButtonText = styled.Text<VariantProp>`
  font-family: ${FONTS.BOLD};
  color: ${({ isBlack }) => (isBlack ? COLORS.WHITE : COLORS.BLACK)};
  font-size: 18px;
`;
