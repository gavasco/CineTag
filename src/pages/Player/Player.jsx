import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import filmes from '../../json/db.json'
import styled from "styled-components";
import Pagina401 from "../Pagina401/Pagina401";

const SectionFilme = styled.section`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
`

export default function Player() {
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
                <iframe
                    width="660"
                    height="415"
                    src={filme.link}
                    title={filme.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </SectionFilme>
        </>
    )
}