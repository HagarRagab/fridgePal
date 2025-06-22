import KitchenIcon from "@mui/icons-material/Kitchen";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import AddIcon from "@mui/icons-material/Add";
import type { LinkPage } from "../types";

export const pages: LinkPage[] = [
    {
        icon: <KitchenIcon />,
        label: "Inventory",
        path: "/",
    },
    {
        icon: <SoupKitchenIcon />,
        label: "What to cook",
        path: "/what-to-cook",
    },
    {
        icon: <AddIcon />,
        label: "Add item",
        path: "/add-item",
    },
];
