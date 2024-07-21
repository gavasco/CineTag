import styled from "styled-components"

const Button = styled.button`
    border: none;
    background-color: ${props => props.corDeFundo};
    border-radius: 22px;
    color: white;
    padding: 1em 2em;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.hover};
    }
`

export default function Botao ({ children, corDeFundo, hover, onClick }) {
    return (
        <Button corDeFundo={corDeFundo} hover={hover} onClick={onClick}>
            {children}
        </Button>
    )
}