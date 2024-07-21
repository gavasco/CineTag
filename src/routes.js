import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Footer/Footer";
import Favoritos from "./pages/Favoritos/Favoritos";
import FavoritosContextProvider from "./contextos/FavoritosContext";
import Player from "./pages/Player/Player";
import Pagina401 from "./pages/Pagina401/Pagina401";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <FavoritosContextProvider>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/:id" element={<Player />} />
                    <Route path="*" element={<Pagina401 />} />
                </Routes>
            </FavoritosContextProvider>
            <Footer />
        </BrowserRouter>
    )
}