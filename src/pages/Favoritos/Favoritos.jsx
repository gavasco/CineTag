import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Titulo from "../../components/Titulo/Titulo";
import { useFavoritosContext } from "../../contextos/FavoritosContext";
import Botao from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    gap: 24px;
`;
const H2 = styled.h2`
    font-weight: 500;
    text-decoration: underline;
    color: #8d0599;
    font-style: italic;
    font-size: 32px;
`
const DivBotao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LinkEstilizado = styled(Link)`
    text-decoration: none;
    font-size: 26px;
    margin: 20px ;
    color: #a905b8;
    cursor: pointer;
    &:hover{
        font-weight: bold;
    }
`

export default function Favoritos() {
    const { listaFavoritos, alternarFavorito } = useFavoritosContext();
    const navigate = useNavigate();

    return (
        <>
            <Banner imagem='bannerRoxo' />
            <Titulo> Meus Favoritos </Titulo>
            <LinkEstilizado to={'/'}> {'<<< Voltar'} </LinkEstilizado>
            <ContainerCard>
                {listaFavoritos.map(item => {
                    return <Card
                        key={item.id}
                        id={item.id}
                        capa={item.capa}
                        titulo={item.titulo}
                        isFavorito={true}
                        alternarFavorito={alternarFavorito}
                    />
                })}
                {(listaFavoritos.length === 0) && 
                    <DivBotao onClick={() => navigate('/')}>
                        <H2>Você ainda não favoritou nenhum vídeo</H2>
                        <Botao corDeFundo='#770381' hover='#a905b8'> Voltar para home</Botao>
                    </DivBotao>
                }
            </ContainerCard>
        </>
    )
}