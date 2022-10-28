import React from "react";
import styled from "styled-components";

const StyledDiv = styled.footer`
    display: flex;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6}; ;
`;

export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};
export const Footer: React.FC<FooterProps> = ({ todoItems, doneItems }) => (
    
    <StyledDiv>
        Todo: {todoItems ? todoItems : 0}
        Done: {doneItems ? doneItems : 0}
    </StyledDiv>
);
