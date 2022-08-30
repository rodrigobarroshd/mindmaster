import styled from "styled-components";


function pixelToRem(...values: number[]){
    return values
    .reduce((acc, current) =>(acc += current / 16 + `rem `), "")
    .trim();
}


export const Header = styled.div`

    display: flex;
    background-color: var(--space);
    width: 100%
    font: var(--font-display);
`;

export const Logo = styled.image`

    width: pixeltoRem(201);
    height: pixeltoRem(41);


`;

export const HeaderMain = styled.div`

    width: pixeltoRem(201);
    height: pixeltoRem(41);


`;

export const Tittle = styled.div`

    width: pixeltoRem(201);
    height: pixeltoRem(41);


`;

export const Subtitle = styled.div`

    width: pixeltoRem(201);
    height: pixeltoRem(41);


`;