import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => <StyledDiv>{children}</StyledDiv>;
