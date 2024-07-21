import { useNavigate, useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import filmes from '../../json/db.json'
import styled from "styled-components";
import Pagina401 from "../Pagina401/Pagina401";
import Botao from "../../components/Button/Button";

const SectionFilme = styled.section`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
`
const DivBotao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Player() {
    const navigate = useNavigate();
    const params = useParams(); //acessar parametros da URL, retorna ID como string
    const filme = filmes.find(filme => {
        return filme.id === Number(params.id)
    })

    if (!filme) {
        return <Pagina401 />
    }
    return (
        <>
            <Banner imagem='bannerVerde' />
            <Titulo>Player</Titulo>
            <SectionFilme>
                <iframe width="560"
                    height="315"
                    src={filme.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </SectionFilme>
            <DivBotao>
                <Botao corDeFundo='#03a051' hover='#00cc66' onClick={() => navigate('/')}>
                    Retornar para home
                </Botao>
            </DivBotao>
        </>
    )
}