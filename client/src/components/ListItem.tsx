import React, { useCallback } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useHandleOpen } from "../hooks/useHandleOpen";
import { Form } from "./form/Form";
import { deleteTodo, deleteTodoFromDone, patchTodo, postDoneTodo } from "../api/axios";

const StyledButtonsDiv = styled.div`
    display: none
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    &: hover ${StyledButtonsDiv} {
        display: inline
    }
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


    const onClickCheckbox = (checked: CheckedState) => {

        // update for endpoint: /items
        patchTodo({done: checked}, todoId)
        
        // endpoint: /done
        if (checked) postDoneTodo({title: label, done: checked, id: todoId})
        if (!checked) deleteTodoFromDone(todoId)
    }

    return (
        <StyledDiv>
            <StyledContainer>
                <Checkbox {...checkboxProps} onCheckedChange={(checked: CheckedState) => onClickCheckbox(checked)}/>
                <Label>{label}</Label>
            </StyledContainer>            
            {open ? <Form handleSubmit={(data) => onClickEdit(data)} handleCancel={handleClose} initialValue={label} /> : (
                <StyledButtonsDiv>
                    <button onClick={handleOpen}>
                    <Pencil1Icon />
                    </button>
                    <button onClick={onClickDelete}>
                        <TrashIcon />
                    </button>
                </StyledButtonsDiv>
            )}
        </StyledDiv>
    );
}
