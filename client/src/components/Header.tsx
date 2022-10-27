import React from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: () => void;
};

const StyledDiv = styled.header`
    display: flex;
    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.grass9};
        color: #fff;
        width: 25px;
        height: 25px;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => (
    <StyledDiv>
        <h1>{children}</h1>
        <button onClick={() => handleAddItem()}>
            <PlusIcon />
        </button>
    </StyledDiv>
);
