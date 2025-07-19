import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

import LinkText from "../../components/shared/LinkText";
import PasswordField from "../../components/shared/PasswordInput";
import { useCreateAccount } from "../../hooks/useCreateAccount";
import type { TNewUser } from "../../types";

function SignUp() {
    const navigate = useNavigate();
    const theme = useTheme();

    const { createNewAccount, isPending: isCreatingNewAccount } =
        useCreateAccount();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "Demo User",
            email: "bahaf63924@iamtile.com",
            password: "12345678",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async function (data) {
        const session = await createNewAccount({
            name: data.name,
            email: data.email,
            password: data.password,
        });

        if (session) {
            navigate("/");
            reset();
        }
    };

    return (
        <Box
            component="form"
            sx={{
                width: "100%",
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginBottom: "2rem",
                }}
            >
                Sign up
            </Typography>

            <TextField
                error={!!errors.name}
                id="name"
                type="text"
                variant="outlined"
                fullWidth
                label={errors.name ? "Error" : "Name"}
                {...register("name", {
                    required: "Please add your name",
                    validate: (value) =>
                        (value.length >= 2 && value.length <= 500) ||
                        "Your name should be from 2 to 500 characters",
                })}
                helperText={
                    errors?.name?.message ? String(errors.name.message) : ""
                }
            />

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
                    errors?.email?.message ? String(errors.email.message) : ""
                }
            />

            <PasswordField<TNewUser>
                register={register}
                error={errors.password?.message}
            />

            <Button
                variant="contained"
                type="submit"
                sx={{
                    width: "100%",
                    maxWidth: "30rem",
                    backgroundColor: "primary.main",
                }}
                disabled={isCreatingNewAccount}
            >
                {isCreatingNewAccount ? "Loading..." : "Sign up"}
            </Button>
            <Typography>
                Already have an account{" "}
                <LinkText color={theme.palette.primary.main} to="/log-in">
                    Log in
                </LinkText>
            </Typography>
        </Box>
    );
}

export default SignUp;
