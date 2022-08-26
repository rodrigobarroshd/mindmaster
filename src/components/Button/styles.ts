import styled from "styled-components";


// import pixelToRem from "../../utils/pxToRem";

// import { ButtonProps } from ".";

function pixelToRem(...values: number[]){
    return values
    .reduce((acc, current) =>(acc += current / 16 + `rem `), "")
    .trim();
}


export const ButtonComponent = styled.button`
  background: var(--mars);
  width: ${pixelToRem(256)};
  height: ${pixelToRem(62)};
  border: none;
  border-radius: ${pixelToRem(6)};
  color: var(--text);
  font: var(--text-3);
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;