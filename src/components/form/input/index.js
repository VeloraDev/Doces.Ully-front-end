import { useRef, useState } from 'react';
import { InputContainer } from './styles';

import {
  UserIcon,
  CellIcon,
  CadIcon,
  EyeCloseIcon,
} from '../../../assets/index';

function Input({ typeField, placeholder, register, field }) {
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);

  const inputType =
    typeField === 'name'
      ? { icon: UserIcon }
      : typeField === 'phone'
        ? { icon: CellIcon }
        : { icon: CadIcon, secIcon: EyeCloseIcon };

  const inputRef = useRef();

  return (
    <InputContainer onClick={() => inputRef.current?.focus()}>
      <inputType.icon />
      <input
        ref={inputRef}
        type={!confirmIsVisible ? 'text' : 'password'}
        placeholder={placeholder}
        {...register(field)}
      />
      {inputType.secIcon && (
        <inputType.secIcon onClick={() => setConfirmIsVisible(prev => !prev)} />
      )}
    </InputContainer>
  );
}

export default Input;
