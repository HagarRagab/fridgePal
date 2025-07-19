import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Chip } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { lightGreen, red } from "@mui/material/colors";
import { isPast } from "date-fns";
import type { Models } from "appwrite";
import { useState } from "react";

import AlertDialog from "./AlertDialog";
import CardContainer from "./CardContainer";
import FormDialog from "./FormDialog";
import CardContentHeading from "./CardContentHeading";
import { formatDate } from "../../utils/helpers";
import { useDeleteInventoryItem } from "../../hooks/useDeleteInventoryItem";

type InventoryCardProps = {
    inventory: Models.Document;
};

function InventoryCard({ inventory }: InventoryCardProps) {
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const { deleteInventory, isPending: isDeleting } = useDeleteInventoryItem();

    const isInventoryExpired = isPast(new Date(inventory.expire_date));

    function handleSubmitAction() {
        deleteInventory(inventory.$id);
    }

    return (
        <CardContainer
            imgSrc={inventory.category.imageSrc}
            alt={inventory.name}
        >
            <CardContent>
                <CardContentHeading title={inventory.name}>
                    <Chip
                        label={inventory.category.name}
                        sx={{
                            backgroundColor: "primary.main",
                            color: "primary.contrastText",
                        }}
                    />
                </CardContentHeading>

                <Typography
                    variant="body2"
                    color="secondary"
                    sx={{
                        marginBottom: "1rem",
                        fontSize: "1rem",
                    }}
                >
                    Qty: {inventory.quantity}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <CalendarMonthIcon sx={{ color: "secondary.light" }} />
                    <Typography
                        variant="body2"
                        color="secondary.light"
                        sx={{ marginLeft: ".4rem" }}
                    >
                        Expires: {formatDate(inventory.expire_date)}
                    </Typography>
                    <Chip
                        label={isInventoryExpired ? "Expired" : "Save to eat"}
                        sx={{
                            marginLeft: "auto",
                            color: "primary.contrastText",
                            backgroundColor: isInventoryExpired
                                ? red[400]
                                : lightGreen[600],
                        }}
                    />
                </Box>
            </CardContent>

            <CardActions disableSpacing sx={{ marginLeft: "auto" }}>
                <FormDialog
                    open={openFormDialog}
                    onCloseDialog={() => setOpenFormDialog(false)}
                    inventory={inventory}
                >
                    <IconButton
                        aria-label="edit item"
                        onClick={() => setOpenFormDialog(true)}
                    >
                        <EditIcon />
                    </IconButton>
                </FormDialog>

                <AlertDialog
                    open={openDeleteAlert}
                    onCloseDialog={() => setOpenDeleteAlert(false)}
                    onSubmitAction={handleSubmitAction}
                    isDeleting={isDeleting}
                >
                    <IconButton
                        aria-label="delete item"
                        onClick={() => setOpenDeleteAlert(true)}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </AlertDialog>
            </CardActions>
        </CardContainer>
    );
}

export default InventoryCard;
