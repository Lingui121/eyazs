import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { BadgeHelp, Headset, House, LogOut, Menu, Phone, X } from "lucide-react";

function NavBar() {
  const navigate = useNavigate();
  const { logout, isAdmin, profile, saldo, user, autenticado, verificarLogin } =
    useContext(AuthContext);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    verificarLogin();
  }, [verificarLogin]);

  const mostrarMenu = () => setMostrar(true);
  const removerMenu = () => setMostrar(false);

  return (
    <div className="text-gray-200 mx-auto container bg-blue-500 shadow-md font-questrial">
      {/* Menu para dispositivos móveis */}
      <div
        className={`${
          mostrar
            ? "fixed items-start inset-0 bg-blue-700 w-[70%] flex flex-col justify-start pl-4 pt-2 z-50"
            : "hidden"
        }`}
      >
        <div className="space-y-4 flex flex-col w-full">
          <div className=" group flex justify-around w-[50%] hover:bg-white border rounded-xl items-center px-1">
            <House className="group-hover:text-blue-500" />
            <Link
              to="/home"
              className="hover:bg-white w-[60%] text-center hover:text-blue-500 rounded-xl px-4 py-2"
            >
              Início
            </Link>
          </div>
          <div className="group hover:bg-white flex justify-around w-[50%] border rounded-xl items-center px-1">
            <Headset className="group-hover:text-blue-500" />
            <Link
              to="/about"
              className="hover:bg-white w-[60%] text-center group-hover:text-blue-500 px-4 py-2"
            >
              Suporte
            </Link>
          </div>
          <div className="group hover:bg-white flex justify-around w-[50%] border rounded-xl items-center px-1">
            <BadgeHelp className="group-hover:text-blue-500" />
            <Link
              to="/services"
              className="hover:bg-white w-[60%] text-center group-hover:text-blue-500 px-4 py-2"
            >
              Ajuda
            </Link>
          </div>
          <div className="hover:bg-white group flex justify-around w-[50%] border rounded-xl items-center px-1">
            <Phone className="group-hover:text-blue-500" />
            <Link
              to="/contact"
              className="hover:bg-white w-[60%] text-center group-hover:text-blue-500 px-4 py-2"
            >
              Contato
            </Link>
          </div>
          <div className="hover:bg-white group flex justify-around w-[50%] border rounded-xl items-center px-1">
            <LogOut className="group-hover:text-blue-500" />
            <button
              onClick={() => {
                logout()
                navigate("/")
              }
              }
              className="hover:bg-white w-[60%] text-center group-hover:text-blue-500 px-4 py-2"
            >
              sair
            </button>
          </div>
        </div>
        <X
          onClick={removerMenu}
          size={38}
          className="absolute left-[86%] bottom-[93%] cursor-pointer"
        />
      </div>

      {/* Container principal do NavBar */}
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center flex-col">
          <img
            className="sm:w-[100px]"
            width={140}
            src="../../images/logo.png"
            alt="Logotipo"
          />
          <Menu
            className="lg:hidden md:hidden sm:block focus:outline-none text-end"
            size={32}
            onClick={mostrarMenu}
          />
        </div>

        {/* Links para dispositivos médios ou maiores */}
        {isAdmin ? (
          <div>
            <h1 className="lg:text-4xl md:text-3xl">Administrador</h1>
          </div>
        ) : (
          <div className="hidden md:flex lg:flex items-center space-x-4">
            <Link
              to="/home"
              className="hover:bg-white border hover:text-blue-500 rounded-xl px-4 py-2"
            >
              Início
            </Link>
            <Link
              to="/about"
              className="hover:bg-white hover:text-blue-500 border rounded-xl px-4 py-2"
            >
              Suporte
            </Link>
            <Link
              to="/services"
              className="hover:bg-white border hover:text-blue-500 rounded-xl px-4 py-2"
            >
              Ajuda
            </Link>
            <Link
              to="/contact"
              className="hover:bg-white hover:text-blue-500 border rounded-xl px-4 py-2"
            >
              Contato
            </Link>
          </div>
        )}
        {/* Informações de perfil e logout */}
        <div>
          <div className="hidden md:flex lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>Hello,</span>
              <span className="uppercase font-semibold">{user}</span>
            </div>
            {autenticado && (
              <LogOut onClick={() => {
                logout()
                navigate("/")
              }} />
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div>
            <div className="">
              <div className="lg:hidden md:hidden text-xl flex gap-1 font-bold">
                <div>
                  <span>Hello,</span>
                  <span className="uppercase font-semibold">{user}</span>
                </div>
                <div>
                <LogOut className="ml-1" onClick={() => {
                  logout()
                  navigate("/")
                }} />
                </div>
              </div>
              <div>
                {saldo ? (
                  <span className="text-green-400">
                    {profile} {saldo ? "Ativo" : ""}
                  </span>
                ) : (
                  <span className="text-red-300 font-semibold">
                    Sua Mensalidade Expirou, Pague sua Subscrição!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Hambúrguer para dispositivos móveis */}
      </div>
    </div>
  );
}

export default NavBar;
