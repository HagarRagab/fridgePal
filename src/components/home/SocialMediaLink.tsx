import { Link } from "@mui/material";
import type { ReactNode } from "react";

type SocialMediaLinkProps = {
    children: ReactNode;
};

function SocialMediaLink({ children }: SocialMediaLinkProps) {
    return (
        <Link href="#" sx={{ color: "secondary.main" }}>
            {children}
        </Link>
    );
}

export default SocialMediaLink;
