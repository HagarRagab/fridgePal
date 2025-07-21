import { forwardRef, type ReactElement, type ReactNode, type Ref } from "react";
import { Slide } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import type { TransitionProps } from "@mui/material/transitions";
import EditIcon from "@mui/icons-material/Edit";
import type { Models } from "appwrite";

import InventoryForm from "./InventoryForm";

type FormDialogProps = {
    children: ReactNode;
    open: boolean;
    onCloseDialog: () => void;
    inventory: Models.Document;
};

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement;
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FormDialog({
    children,
    open,
    onCloseDialog,
    inventory,
}: FormDialogProps) {
    return (
        <>
            {children}
            <Dialog
                open={open}
                onClose={onCloseDialog}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                aria-describedby="form-dialog-slide"
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    <EditIcon /> Edit inventory item
                </DialogTitle>
                <DialogContent>
                    <InventoryForm
                        inventory={inventory}
                        onCloseDialog={onCloseDialog}
                        key={inventory?.$updatedAt}
                    >
                        <DialogActions
                            sx={{
                                p: "1.4rem",
                                paddingTop: 0,
                                marginTop: "1rem",
                            }}
                        >
                            <Button
                                onClick={onCloseDialog}
                                variant="outlined"
                                color="inherit"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                type="submit"
                            >
                                Edit
                            </Button>
                        </DialogActions>
                    </InventoryForm>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default FormDialog;
