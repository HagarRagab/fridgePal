import { useEffect } from "react";
import { account } from "../../lib/appwrite/config";
import { createUserDocument, getUserDocument } from "../../lib/appwrite/api";
import { generateUsername } from "../../utils/helpers";
import { useLocation, useNavigate } from "react-router";
import Spinner from "../../components/shared/Spinner";

function AuthCallback() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fromGoogleOAuth =
            document.referrer.includes("accounts.google.com") ||
            location.state?.fromOAuth === true;

        if (!fromGoogleOAuth) {
            navigate("/", { replace: true });
            return;
        }

        async function handleAuth() {
            try {
                const user = await account.get();
                const existingUser = await getUserDocument(user.$id);
                if (!existingUser)
                    await createUserDocument({
                        account_id: user.$id,
                        email: user.email,
                        name: user.name,
                        username: generateUsername(user.name),
                    });
                navigate("/");
            } catch (error) {
                console.error(error);
                if (error instanceof Error) throw new Error(error.message);
                else throw new Error(String(error));
            }
        }
        handleAuth();
    }, [location]);

    return <Spinner sx={{ marginTop: "14rem" }} />;
}

export default AuthCallback;
