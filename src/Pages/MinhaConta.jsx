import Footer from "./Footer"
import NavBar from "./NavBar"

function MinhaConta(){
    return(
        <div className="flex justify-between flex-col h-screen">
            <div className="bg-blue-500 text-gray-200 ">
                <NavBar/>
            </div>
            <div className="w-[1000px] h-[350px] mx-auto bg-red-400 border">
                <div className="bg-red-200">
                    <h1>Ola Mundo!</h1>
                </div>
            </div>
            <div className="bg-blue-500 text-gray-200">
                <Footer/>
            </div>
        </div>
    )
}
export default MinhaConta

