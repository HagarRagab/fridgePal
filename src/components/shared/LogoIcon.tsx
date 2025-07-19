import KitchenIcon from "@mui/icons-material/Kitchen";
import { Link } from "react-router";
import { styled, type Theme } from "@mui/material";

const LogoStyle = styled(KitchenIcon)<{ $size: number }>(
    ({ theme, $size }: { theme: Theme; $size: number }) => ({
        background: `linear-gradient(
        100deg,
        ${theme.palette.primary.main} 0%,
        ${theme.palette.primary.light} 100%
        )`,
        color: theme.palette.primary.contrastText,
        borderRadius: "8px",
        padding: `${($size * 0.18).toFixed(1)}rem`,
        width: `${$size}rem`,
        height: `${$size}rem`,
        boxShadow: "1px 1px 8px 0px rgba(0, 0, 0, 0.15)",
        "@media (max-width: 768px)": {
            width: `${($size * 0.8).toFixed(1)}rem`,
            height: `${($size * 0.8).toFixed(1)}rem`,
        },
    })
);

type LogoIconProps = {
    size: number;
};

function LogoIcon({ size }: LogoIconProps) {
    return (
        <Link to="/">
            <LogoStyle $size={size} />
        </Link>
    );
}

export default LogoIcon;
