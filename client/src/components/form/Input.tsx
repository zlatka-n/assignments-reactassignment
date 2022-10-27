import React, { useState } from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input``;

export const Input = (props: InputProps): JSX.Element => {
    const [value, setValue] = useState(props.initialValue);

    return (
        <StyledInput
            value={value}
            onChange={(e) => {
                const value = e.currentTarget.value;
                setValue(value);
                props.handleInputChange(value);
            }}
        />
    );
};
