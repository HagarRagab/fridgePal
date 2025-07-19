import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

interface ContainedActionButtonProps extends ButtonProps {
    children: ReactNode | string;
    target?: string;
}

function ContainedActionButton({
    children,
    ...props
}: ContainedActionButtonProps) {
    return (
        <Button
            variant="contained"
            type="submit"
            sx={{
                fontSize: ".8rem",
                marginTop: ".5rem",
            }}
            {...props}
        >
            {children}
        </Button>
    );
}

export default ContainedActionButton;
