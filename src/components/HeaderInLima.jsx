import api_usuario from "@/api/usuario";
import { useRouter } from "next/navigation";

export default function HeaderInLima({ toggleNav, Nav, role, mun }) {

    const handleLogout = async() => {
        await api_usuario.cerrarSesion();
        window.location.href = '/login';
    }

    return (
        <div className="bg-inLima_red py-5 text-center text-white font-bold text-xl flex justify-between items-center">
            <button onClick={toggleNav} className={`ml-5 transition ${Nav ? 'rotate-0' : 'rotate-90'} hover:text-gray-200`}>
                |||
            </button>
            <div className="flex-1 text-center">
                <span className="hidden md:block">
                    {role === 1 ? "Sistema de quejas de Lima" : "Sistema de Gestión de quejas de Lima"}
                    {mun ? ` - ${mun.nombre}` : ''}
                </span>
                <span className="block md:hidden">
                    {role === 1 ? "Quejas de Lima" : "Gestión de Lima"}
                    {mun ? ` - ${mun.nombre}` : ''}
                </span>
            </div>
            <div className="mr-5">
                <button onClick={handleLogout}>Salir</button>
            </div>
        </div>
    );
}
