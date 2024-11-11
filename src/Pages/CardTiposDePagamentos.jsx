
export default function CardTiposDePagamentos(props){
    return(
        <div className=" text-black hover:bg-gray-50 hover:text-azul shadow-lg border w-[240px] h-[150px] flex-col flex justify-center items-center rounded-[30px] bg-white p-4 px-2 border-blue-300 font-medium">
            <img className=" w-[140px]" src={props.url} width={65} alt="" />
            <span className="mt-4 font-semibold text-sm">{props.descricao}</span>
        </div>
    )
}
