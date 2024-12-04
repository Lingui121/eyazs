import React, { useRef } from 'react';

const InputPesquisa = (props) => {
  return (
    <input className='w-1/3 px-4 py-2 text-xl border-[1px] border-gray-400 shadow-md shadow-blue-100 text-center rounded-[50px] ' 
    type={props.type} onChange={(e) => props.mudar(e)}
    value={props.value}
    placeholder={props.placeholder}/>
  );
};

export default InputPesquisa;
