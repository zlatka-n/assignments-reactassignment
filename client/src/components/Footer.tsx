import React from "react";
import styled from "styled-components";

const StyledDiv = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

const StyledText = styled.span`
    font-weight: 700;
`;

export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};
export const Footer: React.FC<FooterProps> = ({ todoItems, doneItems }) => (
    <StyledDiv>
        <p>
            Todo: <StyledText>{todoItems ? todoItems : 0}</StyledText>
        </p>
        <p>
            Done: <StyledText>{doneItems ? doneItems : 0}</StyledText>
        </p>
    </StyledDiv>
);
