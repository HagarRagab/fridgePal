import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function BackButton() {
    const navigate = useNavigate();

    return (
        <Button
            variant="text"
            onClick={() => navigate(-1)}
            color="secondary"
            sx={{ marginBottom: "1rem" }}
        >
            &larr; Go Back
        </Button>
    );
}

export default BackButton;
