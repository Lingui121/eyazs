export default function BotaoLogin({texto, clicado, type}){
    return(
        <button onClick={clicado} type={type} className="bg-blue-500 w-full m-3 py-1 border border-none rounded-[50px] text-gray-200 hover:bg-blue-700">
            {texto}
        </button>
    )
}