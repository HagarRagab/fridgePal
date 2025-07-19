import { Card, CardMedia } from "@mui/material";
import type { ReactNode } from "react";

type CardContainerProps = {
    imgSrc: string;
    alt: string;
    children: ReactNode;
};

function CardContainer({ imgSrc, alt, children }: CardContainerProps) {
    return (
        <Card
            sx={{
                position: "relative",
                height: "100%",
                width: 350,
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardMedia
                component="img"
                height="194"
                image={imgSrc}
                alt={alt}
                sx={{
                    "&:hover": {
                        transform: "scale(1.05)",
                        transition: ".5s",
                    },
                }}
            />
            {children}
        </Card>
    );
}

export default CardContainer;
