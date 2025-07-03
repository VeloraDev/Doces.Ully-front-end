import { useState } from 'react';
import {
  DivInput,
  Option,
  OptionsContainer,
  OptionsSection,
  Select,
  SelectContainer,
  SelectTop,
} from './styles';
import { ArrowSelectIcon } from '../../../assets';

function CustomSelect({ label, options = [], selectLabel = '', onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <SelectContainer>
      <DivInput>
        <label htmlFor={label}>{label}</label>
        <Select onClick={() => setOpen(prev => !prev)} id={label} type="text">
          <SelectTop>
            <p>{selectLabel || 'selecione'}</p>
            <ArrowSelectIcon />
          </SelectTop>
        </Select>
      </DivInput>

      <OptionsContainer $onSelect={open}>
        <OptionsSection $onSelect={open}>
          {options.map(option => (
            <Option
              key={typeof option === 'object' ? option.id : option}
              onClick={() => {
                setOpen(false);
                onSelect(option);
              }}>
              {typeof option === 'object' ? option.name : option}
            </Option>
          ))}
        </OptionsSection>
      </OptionsContainer>
    </SelectContainer>
  );
}

export default CustomSelect;
