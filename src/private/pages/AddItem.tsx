import InventoryForm from "../../components/dashboard/InventoryForm";
import NavTabs from "../../components/dashboard/NavTabs";
import PageTitle from "../../components/dashboard/PageTitle";
import ContainedActionButton from "../../components/shared/ContainedActionButton";
import GlassPaper from "../../components/shared/GlassPaper";

function AddItem() {
    return (
        <>
            <NavTabs />
            <GlassPaper>
                <PageTitle
                    title="Add new item"
                    subTitle="Add a new grocery item to your fridge inventory"
                />

                <InventoryForm>
                    <ContainedActionButton fullWidth>
                        Add item
                    </ContainedActionButton>
                </InventoryForm>
            </GlassPaper>
        </>
    );
}

export default AddItem;
