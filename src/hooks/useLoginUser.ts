import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../lib/appwrite/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLoginUser() {
    const navigate = useNavigate();

    const { mutateAsync: loginUserMutation, isPending } = useMutation({
        mutationFn: (user: { email: string; password: string }) =>
            loginUser(user),
        onSuccess: () => navigate("/"),
        onError: () =>
            toast(
                "Something went wrong. Cannot log in. Please try again later."
            ),
    });

    return { loginUserMutation, isPending };
}
