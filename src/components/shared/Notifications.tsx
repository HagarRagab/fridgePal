import { useNavigate, useSearchParams } from "react-router";

import PageContainer from "../dashboard/PageContainer";
import PageTitle from "../dashboard/PageTitle";
import { useAuthContext } from "../../context/AuthContext";
import { useGetInventory } from "../../hooks/useGetInventory";
import { MAX_ITEMS } from "../../utils/constants";
import PaginationItems from "./PaginationItems";
import Spinner from "./Spinner";
import CardsGroup from "../dashboard/CardsGroup";
import type { Models } from "appwrite";
import { Grid } from "@mui/material";
import InventoryCard from "../dashboard/InventoryCard";
import type { inventoryItemsConditions } from "../../types";
import BackButton from "./BackButton";

type NotificationsProps = {
    condition: inventoryItemsConditions;
};

function Notifications({ condition }: NotificationsProps) {
    const [searchParams] = useSearchParams();
    const curPage = Number(searchParams.get("page")) || 1;
    const { user, isLoading: isLoadingUser } = useAuthContext();
    const navigate = useNavigate();

    const { inventory, isLoading: isLoadingInventory } = useGetInventory({
        userId: user.account_id,
        page: curPage,
        from: (curPage - 1) * MAX_ITEMS,
        condition: condition,
    });

    if (isLoadingInventory || isLoadingUser) return <Spinner />;

    if (!inventory || !inventory?.total) {
        navigate(-1);
        return;
    }
    return (
        <PageContainer>
            <BackButton />
            <PageTitle
                title="Notifications"
                subTitle={`${inventory?.total} items in your fridge will expire soon`}
            />

            <CardsGroup>
                {inventory?.documents.map((item: Models.Document) => (
                    <Grid key={item.$id}>
                        <InventoryCard inventory={item} />
                    </Grid>
                ))}
            </CardsGroup>

            {!inventory?.total ||
                (inventory?.total >= MAX_ITEMS && (
                    <PaginationItems items={inventory} curPage={curPage} />
                ))}
        </PageContainer>
    );
}

export default Notifications;
