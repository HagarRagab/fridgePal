import { type ReactNode } from "react";
import { Link, useLocation } from "react-router";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { pages } from "../../utils/utils";
import type { TLinkPage } from "../../types";

interface LinkTabProps {
    label?: string;
    icon?: ReactNode;
    to?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        // @ts-expect-error - MUI Tab doesn't recognize React Router Link
        <Tab
            component={Link}
            iconPosition="start"
            {...props}
            sx={{
                minHeight: "auto",
                paddingInline: { xs: ".4rem", md: "1rem" },
                color: "secondary.light",
                fontSize: { xs: ".8rem", md: "1rem" },
            }}
        />
    );
}

export default function NavTabs() {
    const location = useLocation();

    const currentTabIndex = pages.findIndex(
        (page: TLinkPage) => page.path === location.pathname
    );

    return (
        <Box
            sx={{
                width: "fit-content",
                marginBlock: "2rem",
            }}
        >
            <Tabs
                value={currentTabIndex !== -1 && currentTabIndex}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                role="navigation"
                sx={{
                    "& .MuiTabs-indicator": {
                        backgroundColor: "primary.main",
                    },
                    ":hover": {
                        color: "primary.main",
                    },
                }}
            >
                {pages.map((page: TLinkPage) => (
                    <LinkTab
                        key={page.id}
                        icon={page.icon}
                        label={page.label}
                        to={page.path}
                    />
                ))}
            </Tabs>
        </Box>
    );
}
