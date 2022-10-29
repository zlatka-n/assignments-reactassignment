import React, { useCallback } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useHandleOpen } from "../hooks/useHandleOpen";
import { Form } from "./form/Form";
import { deleteTodo, patchTodo } from "../api/axios";

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
    todoId: number
};

export const ListItem: React.FC<LiteItemProp> = ({ label, todoId, handleRemoval, handleEdit, ...checkboxProps }) => {
    const { open, handleOpen, handleClose } = useHandleOpen()

    const onClickEdit = useCallback((data: string) => {

        patchTodo({title: data}, todoId)
        handleClose()

    }, [todoId])

    const onClickDelete = useCallback(() => {
        deleteTodo(todoId)
    },[todoId])

    return (
        <StyledDiv>
            <StyledContainer>
                <Checkbox {...checkboxProps} />
                <Label>{label}</Label>
            </StyledContainer>            
            {open ? <Form handleSubmit={(data) => onClickEdit(data)} handleCancel={handleClose} initialValue={label} /> : (
                <div>
                    <button onClick={handleOpen}>
                    <Pencil1Icon />
                    </button>
                    <button onClick={onClickDelete}>
                        <TrashIcon />
                    </button>
                </div>
            )}
        </StyledDiv>
    );
}
