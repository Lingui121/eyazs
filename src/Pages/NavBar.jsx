import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

    const [autenticado, setAutenticado] = useState(false);
    const [user, setUser] = useState("");
    const [profile, setProfile] = useState("");
    const [saldo, setSaldo] = useState(true)
    
    function verificarLogin() {
        try {
            const dadosDoLocalStorage = JSON.parse(localStorage.getItem("usuario"))
            if(dadosDoLocalStorage.profile == "DESATVADO"){
                setUser(dadosDoLocalStorage.name)
                setSaldo(false)
                setAutenticado(true)
            }else{
                setUser(dadosDoLocalStorage.name)
                setSaldo(true)
                setProfile(dadosDoLocalStorage.profile)
                setAutenticado(true)
            }
        } catch (erro) {
            console.log(erro)
        }
    }

    function logOut() {
        try {
            const dadosDoLocalStorage = localStorage.removeItem("usuario")
            navigate("/")
        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {
        verificarLogin()
    }, [])


    return (
        <div className="text-gray-200 mx-auto container flex justify-between bg-blue-500 bg-fixed shadow-md font-questrial">
            <div className="">
                <img width={140} src="../../images/logo.png" alt="Logotipo" />
            </div>
            <div className="flex space-x-4 items-center">
                <Link to="/home" className="hover:bg-red-500 border rounded-xl px-4">Inicio</Link>
                <Link to="/about" className="hover:hover:bg-red-500 border rounded-xl px-4">Suporte</Link>
                <Link to="/services" className="hover:hover:bg-red-500 border rounded-xl px-4">Ajuda</Link>
                <Link to="/contact" className="hover:hover:bg-red-500 border rounded-xl px-4">Contato</Link>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center space-x-1">
                    <span>Hello, {user}</span>
                    {
                        autenticado ?
                            <svg onClick={() => {
                                logOut()
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:text-red-400 size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                            </svg> : ""
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div>
                    {
                        saldo ?
                            <span className="text-green-400"> {profile} {saldo?"Ativo":""}</span>:
                            <span className="text-red-300 font-semibold">Sua Mensalidade Expirou, Pague sua Subscricao!</span>
                    }
                </div>
            </div>
        </div>
    )
}
export default NavBar;