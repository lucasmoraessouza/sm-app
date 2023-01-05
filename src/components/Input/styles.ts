import styled from "styled-components/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { COLORS, FONTS } from "../../theme";

export const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${COLORS.GRAY};
  padding-bottom: 12px;
  align-items: center;
  margin-top: 32px;
`;

export const InputIcon = styled(MaterialIcons).attrs({
  size: 24,
  color: COLORS.GRAY,
})`
  margin-right: 12px;
`;

export const Input = styled.TextInput.attrs({ autoCapitalize: "none" })`
  flex: 1;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.BLACK};
  font-size: 18px;
`;

export const EyeWrapper = styled.TouchableOpacity`
  margin-left: 12px;
`;

export const EyeIcon = styled(Ionicons).attrs({
  size: 24,
  color: COLORS.GRAY,
})``;
