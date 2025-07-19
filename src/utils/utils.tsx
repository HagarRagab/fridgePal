import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { blue, green, indigo, red } from "@mui/material/colors";

import type { TBenefit, Timpacts, TLinkPage, TSettings } from "../types";

export const pages: TLinkPage[] = [
    {
        id: "inventory",
        icon: <KitchenIcon />,
        label: "Inventory",
        path: "/inventory",
    },
    {
        id: "what-to-cook",
        icon: <SoupKitchenIcon />,
        label: "What to cook",
        path: "/what-to-cook",
    },
    {
        id: "add-item",
        icon: <AddIcon />,
        label: "Add item",
        path: "/add-item",
    },
];

export const settings: TSettings[] = [
    { icon: <PersonIcon />, label: "Profile" },
    { icon: <FavoriteIcon />, label: "Likes" },
    { icon: <LogoutIcon />, label: "Logout" },
];

export const benefits: TBenefit[] = [
    {
        icon: (
            <KitchenIcon
                sx={{
                    fill: indigo[500],
                    backgroundColor: indigo[50],
                }}
            />
        ),
        title: "Smart Inventory",
        description:
            "Keep track of all your groceries with visual cards and categories",
    },
    {
        icon: (
            <CalendarMonthIcon
                sx={{
                    fill: red[500],
                    backgroundColor: red[50],
                }}
            />
        ),
        title: "Expiry Tracking",
        description: "Never waste food again with smart expiry date reminders",
    },
    {
        icon: (
            <DinnerDiningIcon
                sx={{
                    fill: green[500],
                    backgroundColor: green[50],
                }}
            />
        ),
        title: "Recipe Suggestions",
        description:
            "Get cooking ideas based on what's available in your fridge",
    },
    {
        icon: (
            <NotificationsActiveIcon
                sx={{
                    fill: blue[500],
                    backgroundColor: blue[50],
                }}
            />
        ),
        title: "Smart Alerts",
        description: "Receive timely notifications before your food expires",
    },
];

export const usingSteps = [
    {
        color: blue[300],
        title: "Scan & Add",
        description:
            "Simply scan barcodes or take photos of your groceries. FridgePal automatically identifies items and tracks expiration dates.",
    },
    {
        color: green[300],
        title: "Get Alerts",
        description:
            "Receive smart notifications when items are about to expire, along with recipe suggestions to use them up.",
    },
    {
        color: red[300],
        title: "Cook & Save",
        description:
            "Follow personalized recipes, track your savings, and watch your food waste decrease month after month.",
    },
];

export const impacts: Timpacts[] = [
    {
        impact: "Pounds of food saved",
        impactNumber: "2.5M",
    },
    {
        impact: "Money saved by users",
        impactNumber: "$12M",
    },
    {
        impact: "Active users",
        impactNumber: "50K+",
    },
    {
        impact: "Average waste reduction",
        impactNumber: "40%",
    },
];
