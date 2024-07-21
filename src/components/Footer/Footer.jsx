import styled from "styled-components"


const Rodape = styled.footer`
    background-color: var(--preto);
    padding: .5em 12em;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        text-decoration: none;
        color: var(--cinza);
        font-size: 19px;
    }
`

export default function Footer () {
    return (
        <Rodape>
            <p> Desenvolvido por Gabriel Vasco </p>
        </Rodape>
    )
}