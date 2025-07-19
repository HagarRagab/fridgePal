import { type ReactElement, type Ref, forwardRef, type ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { type TransitionProps } from "@mui/material/transitions";
import { red } from "@mui/material/colors";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement;
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type AlertDialogProps = {
    children: ReactNode;
    open: boolean;
    onCloseDialog: () => void;
    onSubmitAction: () => void;
    isDeleting: boolean;
};

function AlertDialog({
    children,
    open,
    onCloseDialog,
    onSubmitAction,
    isDeleting,
}: AlertDialogProps) {
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
                aria-describedby="alert-dialog-slide-description"
                sx={{ textAlign: "center" }}
            >
                <DeleteForeverIcon
                    sx={{
                        paddingTop: "2rem",
                        fontSize: "4rem",
                        marginInline: "auto",
                        fill: red[500],
                    }}
                />
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you really want to delete this? This process cannot
                        be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: "1.4rem", paddingTop: 0 }}>
                    <Button
                        onClick={onCloseDialog}
                        variant="outlined"
                        color="inherit"
                        disabled={isDeleting}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onSubmitAction}
                        variant="contained"
                        color="error"
                        disabled={isDeleting}
                    >
                        {isDeleting ? "Deleting..." : "Delete"}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AlertDialog;
