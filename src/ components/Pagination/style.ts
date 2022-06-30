import styled from "styled-components"
import { COLORS } from '../../constants/colors';

interface Props {
    isActive: boolean,
}

export const Container = styled.div`
    margin: 1em 0;
    display: flex;
    justify-content: flex-end;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5em;
`

export const Page = styled.div<Props>`
    font-size: 1em;
    padding: 0.5em;
    border-radius: 2px;

    ${({isActive}) => isActive && `background: ${COLORS.linearGradientGrey};`}
    ${({isActive}) => isActive && `border: 1px solid ${COLORS.darkGrey};`}
    ${({isActive}) => !isActive && 'cursor: pointer;'}

    &:hover {
        ${({isActive}) => !isActive && 'color: white;'}
        ${({isActive}) => !isActive && 'background-color: black;'}
    }
`

export const PageItems = styled.div`
    display: flex;
    column-gap: 0.5em;
`

export const LeftArrow = styled.div`
    font-weight: bold;
    cursor: pointer;
`

export const RightArrow = styled.div`
    font-weight: bold;
    cursor: pointer;
`