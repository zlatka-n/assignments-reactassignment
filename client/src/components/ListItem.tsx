import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => (
    <StyledDiv>
        <StyledContainer>
            <Checkbox {...checkboxProps} />
            <Label>{label}</Label>
        </StyledContainer>
        <div>
        <button onClick={() => handleEdit()}>
            <TrashIcon />
        </button>
        <button onClick={() => handleRemoval()}>
            <Pencil1Icon />
        </button>
        </div>
    </StyledDiv>
);
