import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

import LinkText from "../../components/shared/LinkText";
import PasswordInput from "../../components/shared/PasswordInput";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useAuthContext } from "../../context/AuthContext";
import { loginByGoogle } from "../../lib/appwrite/api";

function LogIn() {
    const theme = useTheme();

    const { loginUserMutation, isPending: isLoggingin } = useLoginUser();

    const { checkAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "bahaf63924@iamtile.com",
            password: "12345678",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async function (data) {
        const session = await loginUserMutation({
            email: data.email,
            password: data.password,
        });

        if (!session) return;
        else {
            const isLoggedIn = await checkAuthUser();
            if (isLoggedIn) {
                reset();
                navigate("/");
            }
        }
    };

    return (
        <Box
            component="div"
            sx={{
                width: "100%",
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
            }}
        >
            <Typography
                variant="h1"
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
            >
                Log in
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <TextField
                    error={!!errors.email}
                    id="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    label={errors.email ? "Error" : "Email Address"}
                    {...register("email", {
                        required: "Please add your email address",
                        validate: (value) =>
                            (value.length >= 2 && value.length <= 500) ||
                            "Your name should be from 2 to 500 characters",
                    })}
                    helperText={
                        errors?.email?.message
                            ? String(errors.email.message)
                            : ""
                    }
                />
                <PasswordInput<{ email: string; password: string }>
                    register={register}
                    error={errors.password?.message}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        width: "100%",
                        maxWidth: "30rem",
                    }}
                    disabled={isLoggingin}
                >
                    {isLoggingin ? "Loading..." : "Log in"}
                </Button>
                <Typography>
                    Create new account{" "}
                    <LinkText color={theme.palette.primary.main} to="/sign-up">
                        Sign up
                    </LinkText>
                </Typography>
            </Box>
            <Button
                variant="outlined"
                sx={{
                    width: "100%",
                    maxWidth: "30rem",
                    "&:hover": { borderColor: "primary.main" },
                }}
                onClick={loginByGoogle}
            >
                <GoogleIcon sx={{ marginRight: ".8rem" }} />
                Log in with Google
            </Button>
        </Box>
    );
}

export default LogIn;
