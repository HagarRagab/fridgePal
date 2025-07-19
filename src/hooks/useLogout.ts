import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../lib/appwrite/api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout() {
    const navigate = useNavigate();

    const { mutate: logout, isPending } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => navigate("/"),
        onError: () =>
            toast(
                "Something went wrong. Cannot logout your account. Please try again later."
            ),
    });

    return { logout, isPending };
}
