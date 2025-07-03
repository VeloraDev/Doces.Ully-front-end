import { useRef } from 'react';
import { DivInput } from './styled';

function InputOrder({ label, register, field, isDescription }) {
  const ref = useRef();

  return (
    <DivInput
      onClick={() => ref.current?.focus()}
      $isDescription={isDescription}>
      <label htmlFor={label}>{label}</label>
      {!isDescription ? (
        <input ref={ref} id={label} type="text" {...register(field)} />
      ) : (
        <textarea
          ref={ref}
          id={label}
          rows="5"
          cols="50"
          {...register(field)}></textarea>
      )}
    </DivInput>
  );
}

export default InputOrder;
