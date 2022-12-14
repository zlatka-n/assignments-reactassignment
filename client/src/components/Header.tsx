import React, { useState } from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form/Form";
import { getTodoItems, postTodo } from "../api/axios";
import { Button } from "./Button";
import { GetTodoItems } from "../types";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: () => { open: boolean; handleOpen: () => void; handleClose: () => void };
    getNewData: (newData: GetTodoItems) => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    button {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.grass9};
        color: #fff;
        width: 25px;
        height: 25px;
    }
    h1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: 600;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children, getNewData }) => {
    const { open, handleOpen, handleClose } = handleAddItem();

    const onClickAdd = (data: string) => {
        if (!data) return;

        postTodo({ title: data, done: false }).then((response) => {
            return getTodoItems().then((response) => {
                getNewData(response);
            });
        });
        handleClose();
    };

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {open ? (
                <Form handleSubmit={(data) => onClickAdd(data)} handleCancel={handleClose} initialValue="" />
            ) : (
                <Button onClick={handleOpen} icon={<PlusIcon />} />
            )}
        </StyledDiv>
    );
};
