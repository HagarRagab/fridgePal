import { styled } from "@mui/material";
import { Link } from "react-router";

const LinkStyle = styled(Link)<{ $color: string }>(
    ({ $color }: { $color: string }) => ({
        color: $color,
        transition: "transform var(--transition)",
        "&:hover": {
            transform: "scale(1.05)",
        },
    })
);

type LinkTextProps = {
    children: string;
    color: string;
    to: string;
};

function LinkText({ children, color, to }: LinkTextProps) {
    return (
        <LinkStyle to={to} $color={color}>
            {children}
        </LinkStyle>
    );
}

export default LinkText;
