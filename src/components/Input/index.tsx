import { FC } from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  iconName: string;
  onEyePress?: () => void;
  isPassword?: boolean;
}

const Input: FC<InputProps> = ({
  iconName,
  isPassword,
  onEyePress,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
}) => (
  <S.Wrapper>
    <S.InputIcon name={iconName} />
    <S.Input
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
    {isPassword && (
      <S.EyeWrapper onPress={onEyePress}>
        <S.EyeIcon name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} />
      </S.EyeWrapper>
    )}
  </S.Wrapper>
);

export default Input;
