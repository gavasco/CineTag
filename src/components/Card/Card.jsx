import styled from 'styled-components';
import desfavoritarIcon from '../../components/Card/assets/desfavoritar.png';
import favoritarIcon from '../../components/Card/assets/favoritar.png';
import { Link } from 'react-router-dom';

const DivCard = styled.div`
    background-color: var(--cinza);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 202px;
    h2 {
        font-weight: 700;
        font-size: 18px;
        padding: 0 1em;
    }
`;
const ImgCapa = styled.img`
    width: 100%;
`;
const ImgFavorito = styled.img`
    width: 25px;
    padding: 0 1em 1em 1em;
    cursor: pointer;
`;
const LinkEstilizado = styled(Link)`
    cursor: pointer;
`

export default function Card({ id, capa, titulo, isFavorito, alternarFavorito }) {
    const iconeFavorito = isFavorito ? favoritarIcon : desfavoritarIcon;

    return (
        <DivCard>
            <LinkEstilizado to={`/${id}`}>
                <ImgCapa src={capa} alt={titulo} />
            </LinkEstilizado>
            <h2>{titulo}</h2>
            <ImgFavorito
                src={iconeFavorito}
                alt={isFavorito ? "icone favoritar" : "icone desfavoritar"}
                onClick={() => alternarFavorito(id)}
            />
        </DivCard>
    );
}
