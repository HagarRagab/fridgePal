import type { ReactNode } from "react";
import { Box } from "@mui/material";

type PageContainerProps = {
    children: ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
    return (
        <Box
            component="main"
            sx={{
                color: "primary.contrastText",
            }}
        >
            {children}
        </Box>
    );
}

export default PageContainer;
