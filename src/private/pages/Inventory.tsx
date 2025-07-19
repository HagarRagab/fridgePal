import { Grid } from "@mui/material";
import type { Models } from "appwrite";
import { useSearchParams } from "react-router";

import CardsGroup from "../../components/dashboard/CardsGroup";
import InventoryCard from "../../components/dashboard/InventoryCard";
import PageContainer from "../../components/dashboard/PageContainer";
import PageHeading from "../../components/dashboard/PageHeading";
import Spinner from "../../components/shared/Spinner";
import { useCategories } from "../../hooks/useCategories";
import NavTabs from "../../components/dashboard/NavTabs";
import NoResult from "../../components/shared/NoResult";
import { useGetInventory } from "../../hooks/useGetInventory";
import { useAuthContext } from "../../context/AuthContext";
import { MAX_ITEMS } from "../../utils/constants";
import PaginationItems from "../../components/shared/PaginationItems";

function Inventory() {
    const [searchParams] = useSearchParams();
    const curPage = Number(searchParams.get("page")) || 1;
    const categoryId = searchParams.get("category") || "";

    const { user, isLoading: isLoadingUser } = useAuthContext();

    const { inventory, isLoading: isLoadingInventory } = useGetInventory({
        userId: user.account_id,
        page: curPage,
        from: (curPage - 1) * MAX_ITEMS,
        categoryId,
        condition: "fresh",
    });

    const { categories, isLoading: isLoadingCategories } = useCategories();

    return (
        <>
            <NavTabs />
            {isLoadingCategories || isLoadingUser || isLoadingInventory ? (
                <Spinner sx={{ marginTop: "14rem" }} />
            ) : (
                <PageContainer>
                    <PageHeading
                        title="Your inventory"
                        subTitle={`${
                            inventory?.total === 0 ? "No" : inventory?.total
                        } items in your fridge`}
                        searchKey="category"
                        filterList={
                            !isLoadingCategories && categories
                                ? categories.documents
                                : []
                        }
                        isLoading={isLoadingCategories}
                    />

                    {!inventory?.total ? (
                        <NoResult
                            title="Your fridge is empty!"
                            subTitle="Add some items to get started."
                        />
                    ) : (
                        <CardsGroup>
                            {inventory?.documents.map(
                                (item: Models.Document) => (
                                    <Grid key={item.$id}>
                                        <InventoryCard inventory={item} />
                                    </Grid>
                                )
                            )}
                        </CardsGroup>
                    )}

                    {!inventory?.total ||
                        (inventory?.total >= MAX_ITEMS && (
                            <PaginationItems
                                items={inventory}
                                curPage={curPage}
                            />
                        ))}
                </PageContainer>
            )}
        </>
    );
}

export default Inventory;
