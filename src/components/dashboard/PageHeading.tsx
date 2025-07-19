import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Box } from "@mui/material";
import styled from "styled-components";
import type { Models } from "appwrite";

import FilterMenu from "./FilterMenu";
import PageTitle from "./PageTitle";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

type PageHeadingProps = {
    title: string;
    subTitle: string;
    searchKey: string;
    filterList: Models.Document[];
    isLoading: boolean;
};

function PageHeading({
    title,
    subTitle,
    searchKey,
    filterList,
    isLoading,
}: PageHeadingProps) {
    return (
        <Header>
            <PageTitle title={title} subTitle={subTitle} />
            <Box
                sx={{
                    display: "flex",
                    gap: "1.2rem",
                    alignItems: "center",
                }}
            >
                <FilterAltOutlinedIcon
                    sx={{
                        display: { xs: "none", sm: "block" },
                        color: "secondary.light",
                    }}
                />
                <FilterMenu
                    searchKey={searchKey}
                    filterList={filterList}
                    isLoading={isLoading}
                />
            </Box>
        </Header>
    );
}

export default PageHeading;
