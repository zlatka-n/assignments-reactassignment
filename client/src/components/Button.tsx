import React from "react";

type ButtonProps = {
    onClick?: () => void;
    type?: "submit" | "reset" | "button";
    icon: React.ReactNode;
};

export const Button = ({ onClick, type, icon }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type}>
            {icon}
        </button>
    );
};
