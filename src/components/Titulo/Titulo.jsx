import styled from "styled-components"


const H1 = styled.h1`
    font-weight: 500;
    size: 32px;
    text-align: center;
`

export default function Titulo ({ children }) {
    return (
        <H1> {children} </H1>
    )
}