import NotificationsIcon from "@mui/icons-material/Notifications";
import WarningIcon from "@mui/icons-material/Warning";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Badge, Box, Divider, styled, type Theme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import TooltipContainer from "./TooltipContainer";
import { useNotificationContext } from "../../context/NotificationContext";
import Spinner from "./Spinner";
import type { ReactNode } from "react";

const LinkStyle = styled(Link)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    color: theme.palette.secondary.light,
}));

type NotificationTooltipProps = {
    color: string;
};

function NotificationTooltip({ color }: NotificationTooltipProps) {
    const {
        isLoadingUser,
        expireSoonInventory,
        isLoadingExpireSoonInventory,
        expiredInventory,
        isLoadingExpiredInventory,
    } = useNotificationContext();

    if (
        isLoadingExpireSoonInventory ||
        isLoadingExpiredInventory ||
        isLoadingUser
    )
        return <Spinner size={25} />;

    const isNoNotification =
        (!expireSoonInventory || !expireSoonInventory?.total) &&
        (!expiredInventory || !expiredInventory?.total);
    let notificationContent: ReactNode;

    if (isNoNotification)
        notificationContent = (
            <Typography
                component="p"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    margin: "1rem 1.6rem",
                }}
            >
                <WarningIcon />
                No notifications exist
            </Typography>
        );
    else
        notificationContent = (
            <Box component="div">
                {expireSoonInventory && expireSoonInventory?.total > 0 && (
                    <MenuItem sx={{ paddingBlock: ".8rem" }}>
                        <LinkStyle to="/user/notifications/expire-soon">
                            <WarningIcon color="warning" />
                            <Typography
                                align="center"
                                color="warning"
                                sx={{
                                    maxWidth: "15rem",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    marginRight: "1.4rem",
                                    fontSize: ".9rem",
                                }}
                            >
                                Some ingredients will expire soon.
                            </Typography>
                        </LinkStyle>
                        <ArrowForwardIosIcon
                            sx={{
                                marginLeft: "auto",
                                color: "secondary.light",
                            }}
                        />
                    </MenuItem>
                )}
                {expiredInventory && expiredInventory?.total > 0 && (
                    <MenuItem sx={{ paddingBlock: ".8rem" }}>
                        <LinkStyle to="/user/notifications/expired">
                            <DeleteForeverIcon color="error" />
                            <Typography
                                align="center"
                                color="error"
                                sx={{
                                    maxWidth: "15rem",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    marginRight: "1.4rem",
                                    fontSize: ".9rem",
                                }}
                            >
                                Some expired ingredients.
                            </Typography>
                        </LinkStyle>
                        <ArrowForwardIosIcon
                            sx={{
                                marginLeft: "auto",
                                color: "secondary.light",
                            }}
                        />
                    </MenuItem>
                )}
            </Box>
        );

    return (
        <TooltipContainer
            tooltipButton={
                <Badge
                    variant={isNoNotification ? "standard" : "dot"}
                    color="primary"
                >
                    <NotificationsIcon sx={{ color }} />
                </Badge>
            }
        >
            <Typography variant="h6" sx={{ p: ".6rem 1.4rem" }}>
                Notifications
            </Typography>
            <Divider />
            {notificationContent}
        </TooltipContainer>
    );
}

export default NotificationTooltip;
