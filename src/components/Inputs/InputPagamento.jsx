import React, { useRef } from 'react';

const InputPagamento = (props) => {
  return (
    <input className='w-full px-4 py-1 border rounded-[50px] ' 
    type={props.type} onChange={(e) => props.mudar(e)}
    value={props.value}
    placeholder={props.placeholder}/>
  );
};

export default InputPagamento;
