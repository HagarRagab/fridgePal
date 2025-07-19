import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import type { Path, UseFormRegister } from "react-hook-form";

type PasswordInputProps<T extends { password: string }> = {
    register: UseFormRegister<T>;
    error?: string;
};

function PasswordInput<T extends { password: string }>({
    register,
    error,
}: PasswordInputProps<T>) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <FormControl variant="outlined" sx={{ width: "100%" }}>
            <InputLabel htmlFor="password" error={!!error}>
                {!error ? "Password" : "Error"}
            </InputLabel>
            <OutlinedInput
                error={!!error}
                id="password"
                label={!error ? "Password" : "Error"}
                type={showPassword ? "text" : "password"}
                {...register("password" as Path<T>, {
                    required: "Please add password",
                    validate: (value: string) =>
                        value.length >= 8 ||
                        "Your password should be at least 8 characters",
                })}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword
                                    ? "hide the password"
                                    : "display the password"
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText id="password-helper-text" error={!!error}>
                {error}
            </FormHelperText>
        </FormControl>
    );
}

export default PasswordInput;
