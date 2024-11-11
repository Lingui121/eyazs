import Footer from "./Footer";
import NavBar from "./NavBar";

export default function HistoricoPagammento() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div className=" bg-blue-500">
                <NavBar />
            </div>
            <div className="w-[1200px] border rounded-xl h-auto mx-auto m-12">
                <div className="flex justify-center m-4 flex-col">
                <h2 className="mb-2 text-gray-600">Historico de Pagamento</h2>
                    <table className="border border-gray-50 over w-[100%]">
                        <thead className="border rounded-[50px]" >
                            <tr className="bg-gray-100 border rounded-lg text-gray-500">
                                <th className="border text-center py-1 " >ID</th>
                                <th className="border text-center py-1 " >Data</th>
                                <th className="border text-center py-1 " >Metodo de Pagamento</th>
                                <th className="border text-center py-1 " >Montante</th>
                                <th className="border text-center mx-auto " >Recibo</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-500">
                            <tr>
                                <td className="border text-center py-1 text-sm " >001</td>
                                <td className="border text-center py-1 text-sm " >2024-08-09</td>
                                <td className="border text-center py-1 text-sm " >Vodacom-Mpesa</td>
                                <td className="border text-center py-1 text-sm " >2320.00</td>
                                <td className="border text-center py-1 text-sm flex justify-center" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center py-1 text-sm " >002</td>
                                <td className="border text-center py-1 text-sm " >2024-09-09</td>
                                <td className="border text-center py-1 text-sm " >Movitel - Emola</td>
                                <td className="border text-center py-1 text-sm " >2320.00</td>
                                <td className="border text-center py-1 text-sm flex justify-center" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td className="border text-center py-1 text-sm " >002</td>
                                <td className="border text-center py-1 text-sm " >2024-09-09</td>
                                <td className="border text-center py-1 text-sm " >Movitel - Emola</td>
                                <td className="border text-center py-1 text-sm " >2320.00</td>
                                <td className="border text-center py-1 text-sm flex justify-center" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-blue-500">
                <Footer />
            </div>
        </div>
    )
}