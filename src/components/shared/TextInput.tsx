import { TextField } from "@mui/material";

function TextInput({ ...props }) {
    return (
        <TextField
            {...props}
            variant="outlined"
            sx={{
                width: "100%",
                backgroundColor: "rgba(255, 255, 255, .1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                "& .MuiInputBase-input": {
                    p: "8px 14px",
                },
                "& .MuiInputLabel-root": {
                    fontSize: ".8rem",
                    transform: "translate(14px, 12px) scale(1)",
                },
                "& .MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(1)",
                },
                ".MuiInputLabel-root.Mui-focused": {
                    color: "primary.main",
                },
                ".MuiOutlinedInput-input:focus ~ .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: "primary.main",
                    },
            }}
        />
    );
}

export default TextInput;
