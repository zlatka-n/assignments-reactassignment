export type FormProps = {
    handleSubmit: (data: string) => void;
    handleCancel: () => void;
    initialValue: string;
};

export type InputProps = Pick<FormProps, "initialValue"> & {
    handleInputChange: (value: string) => void;
};
