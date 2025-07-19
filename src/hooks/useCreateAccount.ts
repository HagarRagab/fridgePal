import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createUserAccount } from "../lib/appwrite/api";
import type { TNewUser } from "../types";

export function useCreateAccount() {
    const { mutateAsync: createNewAccount, isPending } = useMutation({
        mutationFn: (values: TNewUser) => createUserAccount(values),
        onError: (error) => toast(error.message),
    });

    return { createNewAccount, isPending };
}
