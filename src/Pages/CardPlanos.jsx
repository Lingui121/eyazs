
export default function CardPlanos(props){
    return(
        <div className="text-black w-full hover:bg-red-300 hover:text-azul shadow-lg border h-44 flex-col flex justify-center items-center rounded-[50px] bg-white p-4 px-2 border-blue-300 font-medium">
            <img className="" src={props.url} width={65} alt="" /><br />
            <span>{props.descricao}</span>
        </div>
    )
}
