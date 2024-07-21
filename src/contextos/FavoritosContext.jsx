import { createContext, useContext, useState } from "react";
import filmes from '../json/db.json';

export const FavoritosContext = createContext();

export function useFavoritosContext() {
    return useContext(FavoritosContext);
}

export default function FavoritosContextProvider({ children }) {
    const [listaFavoritos, setListaFavoritos] = useState([]);

    function alternarFavorito (id) {
        setListaFavoritos(listaAntiga => {
            const filme = filmes.find(filme => filme.id === id);
            if (!filme) return listaAntiga;

            if (listaAntiga.some(filme => filme.id === id)) {
                return listaAntiga.filter(filme => filme.id !== id)
            } else {
                return [...listaAntiga, filme]
            }
        })
    }

    const contexto = {
        listaFavoritos,
        setListaFavoritos,
        alternarFavorito,
    }

    return (
        <FavoritosContext.Provider value={contexto}>
            {children}
        </FavoritosContext.Provider>
    )
}