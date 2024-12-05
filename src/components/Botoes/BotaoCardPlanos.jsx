export default function BotaoCardplanos({clicado, texto, type}) {
    return (
        <button className="hover:bg-red-400 bg-blue-500 border rounded-lg w-full flex justify-center text-gray-200" type={type} onClick={clicado}><div className="flex space-x-1">
            <span>{texto}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </div> </button>
    )
}