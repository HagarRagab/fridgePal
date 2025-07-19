import {
    Box,
    Button,
    Container,
    Typography,
    type BoxProps,
} from "@mui/material";
import { Link } from "react-router";
import styled, { keyframes } from "styled-components";

interface BoxStyledProps extends BoxProps {
    component?: React.ElementType;
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Image = styled.img`
    max-width: 100%;
    width: 300px;
`;

const BoxStyled = styled(Box)<BoxStyledProps>`
    animation: ${fadeIn} 1s ease-in-out;
`;

function PageNotFound() {
    return (
        <Container
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <BoxStyled component="div">
                <Image src="/404.png" />
            </BoxStyled>
            <Typography
                variant="h1"
                color="secondary"
                sx={{
                    background:
                        "linear-gradient(100deg, primary.main 0%, primary.light 100%)",
                    backgroundClip: "text",
                    fontWeight: 500,
                }}
            >
                404
            </Typography>
            <Typography>
                The page you are looking for does not exist or has been moved
            </Typography>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "primary.main",
                    marginTop: "1rem",
                }}
            >
                <Link to="/">&larr; Back to home page</Link>
            </Button>
        </Container>
    );
}

export default PageNotFound;
