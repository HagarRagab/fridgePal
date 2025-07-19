import { Pagination } from "@mui/material";
import type { Models } from "appwrite";
import { useSearchParams } from "react-router";
import type { ChangeEvent } from "react";

import { MAX_ITEMS } from "../../utils/constants";

type PaginationItemsProps = {
    items: Models.DocumentList<Models.Document>;
    curPage: number;
};

function PaginationItems({ items, curPage }: PaginationItemsProps) {
    const [, setSearchParams] = useSearchParams();

    function handleSelectPage(_: ChangeEvent<unknown>, page: number) {
        setSearchParams(`?page=${page}`);
    }

    return (
        <Pagination
            count={!items ? 1 : Math.ceil(items?.total / MAX_ITEMS)}
            color="primary"
            sx={{
                width: "fit-content",
                marginInline: "auto",
                marginTop: "3rem",
            }}
            onChange={handleSelectPage}
            page={curPage}
        />
    );
}

export default PaginationItems;
