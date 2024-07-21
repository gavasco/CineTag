import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import { useFavoritosContext } from "../../contextos/FavoritosContext";
import filmes from '../../json/db.json';

const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    gap: 24px;
`;

export default function Inicio() {
    const { listaFavoritos, alternarFavorito } = useFavoritosContext();

    return (
        <>
            <Banner imagem='bannerAzul' />
            <Titulo> Um lugar para guardar seus vídeos e filmes! </Titulo>
            <ContainerCard>
                {filmes.map(filme => (
                    <Card 
                        key={filme.id}
                        id={filme.id}
                        capa={filme.capa}
                        titulo={filme.titulo}
                        isFavorito={listaFavoritos.some(favorito => favorito.id === filme.id)}
                        alternarFavorito={alternarFavorito}
                    />
                ))}
            </ContainerCard>
        </>
    );
}
