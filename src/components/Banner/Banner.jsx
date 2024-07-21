import styled from "styled-components"

const Div = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    height: 247px;
`

export default function Banner ({ imagem }) {
    return (
        <Div style={{ backgroundImage: `url(/assets/${imagem}.png)`}}/>
    )
}