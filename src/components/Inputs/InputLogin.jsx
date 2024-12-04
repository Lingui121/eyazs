export default function InputLogin({type, placeholder, mudar, value}){
    return(
        <input  type={type} placeholder={placeholder} onChange={(e) => {
            mudar(e)
        }} className="px-12 py-1 border rounded-[50px] w-full border-blue-500 outline-none"
        value={value}
        />
    )
}