import { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
  isBlack?: boolean;
}

const Button: FC<ButtonProps> = ({ buttonText, isBlack, onPress }) => (
  <S.Wrapper onPress={onPress} isBlack={isBlack}>
    <S.ButtonText isBlack={isBlack}>{buttonText}</S.ButtonText>
  </S.Wrapper>
);

export default Button;
