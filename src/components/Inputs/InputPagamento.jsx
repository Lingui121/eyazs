import React, { useRef } from 'react';

const InputPagamento = (props) => {
  return (
    <input className='w-full px-4 py-1 border rounded-[50px] ' ref={props.referencia} type={props.type} placeholder={props.placeholder}></input>
  );
};

export default InputPagamento;
