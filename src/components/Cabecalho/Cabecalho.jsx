import { Link } from 'react-router-dom'
import logoCineTag from './assets/logo.png'
import styled from 'styled-components'

const Header = styled.header`
    background-color: var(--preto);
    padding: 1.1em 12em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LinkEstilizado = styled(Link)`
    text-decoration: none;
    color: var(--cinza);
    font-size: 19px;
    padding: 1em;
    &:hover{
        text-decoration: underline;
    }
`

export default function Cabecalho () {
    return (
        <Header>
            <img src={logoCineTag} alt="logo cineTag" />
            <div>
                <LinkEstilizado to='/'> Home </LinkEstilizado>
                <LinkEstilizado to='/favoritos'> Favoritos </LinkEstilizado>
            </div>
        </Header>
    )
}