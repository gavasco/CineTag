import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Botao from "../../components/Button/Button"

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 0 12em 0;
    h2{
        font-weight: 500;
        text-decoration: underline;
        color: #c90404;
        font-style: italic;
        font-size: 32px;
        margin-bottom: 2em;
    }
`

export default function Pagina401() {
    const navigate = useNavigate();
    return (
        <Div>
            <h2>Ops!!! A página que você procura ainda nao está disponível</h2>
            <Botao corDeFundo='#a00303' hover='#c90404' onClick={() => navigate('/')}> 
                Retornar para home 
            </Botao>
        </Div>
    )
}