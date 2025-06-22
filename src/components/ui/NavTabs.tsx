import { type ReactNode } from "react";
import { Link, useLocation } from "react-router";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { pages } from "../../utils/utils";
import type { LinkPage } from "../../types";

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
                paddingInline: "1rem",
                "&.Mui-selected": { color: "var(--primary-100)" },
                color: "var(--accent-200)",
            }}
        />
    );
}

export default function NavTabs() {
    const location = useLocation();

    const currentTabIndex = pages.findIndex(
        (page: LinkPage) => page.path === location.pathname
    );

    return (
        <Box sx={{ width: "100%", marginBlock: "2rem" }}>
            <Tabs
                value={currentTabIndex !== -1 ? currentTabIndex : 0}
                aria-label="nav tabs"
                role="navigation"
                sx={{
                    "& .MuiTabs-indicator": {
                        backgroundColor: "var(--primary-100)",
                    },
                }}
            >
                {pages.map((page: LinkPage) => (
                    <LinkTab
                        key={page.label}
                        icon={page.icon}
                        label={page.label}
                        to={page.path}
                    />
                ))}
            </Tabs>
        </Box>
    );
}
