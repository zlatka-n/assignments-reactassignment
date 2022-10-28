import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    background-color: yellow;
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => <StyledDiv>{children}</StyledDiv>;