import React, { useCallback } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useHandleOpen } from "../hooks/useHandleOpen";
import { Form } from "./form/Form";
import { deleteTodo, deleteTodoFromDone, getTodoItems, patchTodo, postDoneTodo } from "../api/axios";
import { Button } from "./Button";
import { GetTodoItems } from "../types";

const StyledButtonsDiv = styled.div`
    display: none;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    &: hover ${StyledButtonsDiv} {
        display: inline;
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
    handleEdit?: () => void;
    handleRemoval?: () => void;
    todoId: number;
    getNewData: (newData: GetTodoItems) => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, todoId, handleRemoval, handleEdit, getNewData, ...checkboxProps }) => {
    const { open, handleOpen, handleClose } = useHandleOpen();

    const onClickEdit = useCallback(
        (data: string) => {
            patchTodo({ title: data }, todoId).then((response) => {
                return getTodoItems().then((response) => {
                    getNewData(response);
                });
            });
            handleClose();
        },
        [todoId]
    );

    const onClickDelete = useCallback(() => {
        deleteTodo(todoId).then((response) => {
            return getTodoItems().then((response) => {
                getNewData(response);
            });
        });
    }, [todoId]);

    const onClickCheckbox = (checked: CheckedState) => {
        // update for endpoint: /items
        patchTodo({ done: checked }, todoId).then((response) => {
            return getTodoItems().then((response) => {
                getNewData(response);
            });
        });

        // endpoint: /done
        if (checked) postDoneTodo({ title: label, done: checked, id: todoId });
        if (!checked) deleteTodoFromDone(todoId);
    };

    return (
        <StyledDiv>
            <StyledContainer>
                <Checkbox {...checkboxProps} onCheckedChange={(checked: CheckedState) => onClickCheckbox(checked)} />
                <Label>{label}</Label>
            </StyledContainer>
            {open ? (
                <Form handleSubmit={(data) => onClickEdit(data)} handleCancel={handleClose} initialValue={label} />
            ) : (
                <StyledButtonsDiv>
                    <Button onClick={handleOpen} icon={<Pencil1Icon />} />
                    <Button onClick={onClickDelete} icon={<TrashIcon />} />
                </StyledButtonsDiv>
            )}
        </StyledDiv>
    );
};
