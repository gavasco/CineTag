import styled from "styled-components"

const H2 = styled.h2`
    font-weight: 700;
    font-size: 18px;
`

export default function Subtitulo ({ children }) {
    return (
        <H2> {children} </H2>
    )
}