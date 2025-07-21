import {
    Box,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ID, type Models } from "appwrite";
import dayjs from "dayjs";
import type { ReactNode } from "react";
import {
    Controller,
    useForm,
    type FieldValues,
    type SubmitHandler,
} from "react-hook-form";

import { useCategories } from "../../hooks/useCategories";
import { useInventoryItem } from "../../hooks/useInventoryItem";
import { useAuthContext } from "../../context/AuthContext";

type InventoryFormProps = {
    children: ReactNode;
    inventory?: Models.Document;
    onCloseDialog?: () => void;
};

function InventoryForm({
    children,
    inventory,
    onCloseDialog,
}: InventoryFormProps) {
    const { categories, isLoading: isLoadingCategories } = useCategories();

    const { inventoryMutation } = useInventoryItem(
        inventory ? "update" : "create"
    );

    const { user } = useAuthContext();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: inventory?.name || "",
            category: inventory?.category.$id || "",
            quantity: inventory?.quantity || "",
            expireDate: inventory?.expire_date
                ? dayjs(inventory?.expire_date)
                : null,
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = function (data) {
        inventoryMutation({
            inventoryId: inventory ? inventory.$id : ID.unique(),
            name: data.name,
            quantity: data.quantity,
            expireDate: data.expireDate.$d,
            categoryId: data.category,
            userId: user.account_id,
        });
        reset();
        if (onCloseDialog) onCloseDialog();
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                marginTop: "2rem",
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                error={!!errors.name}
                id="item-name"
                variant="outlined"
                fullWidth
                label={errors.name ? "Error" : "Item name"}
                {...register("name", {
                    required: "Please add item's name",
                    validate: (value) =>
                        (value.length >= 2 && value.length <= 500) ||
                        "Item's name should be from 2 to 500 characters",
                })}
                helperText={
                    errors?.name?.message ? String(errors.name.message) : ""
                }
            />

            <FormControl fullWidth error={!!errors.category}>
                <InputLabel id="select-category-label">
                    {errors?.category ? "Error" : "Select a category"}
                </InputLabel>
                <Controller
                    control={control}
                    rules={{
                        required: "Please select a category",
                    }}
                    name="category"
                    render={({ field: { value, onChange } }) => {
                        return (
                            <Select
                                labelId="select-category-label"
                                id="category"
                                label={errors.category ? "Error" : "Category"}
                                value={value}
                                onChange={onChange}
                                disabled={isLoadingCategories}
                            >
                                {categories?.documents.map(
                                    (category: Models.Document) => (
                                        <MenuItem
                                            key={category.$id}
                                            value={category.$id}
                                        >
                                            {category.name}
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        );
                    }}
                />
                <FormHelperText>
                    {errors?.category?.message
                        ? String(errors.category.message)
                        : ""}
                </FormHelperText>
            </FormControl>

            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid size={{ sm: 12, md: 6 }} sx={{ width: "100%" }}>
                    <TextField
                        error={!!errors.quantity}
                        id="quantity"
                        fullWidth
                        variant="outlined"
                        type="number"
                        label={errors.quantity ? "Error" : "Quantity"}
                        {...register("quantity", {
                            required: "Please add item's quantity",
                            validate: (value) =>
                                value > 0 ||
                                "Item's quantity should be a positive number",
                        })}
                        helperText={
                            errors?.quantity?.message
                                ? String(errors.quantity.message)
                                : ""
                        }
                    />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }} sx={{ width: "100%" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={["DatePicker"]}
                            sx={{
                                paddingTop: 0,
                                overflow: "visible",
                            }}
                        >
                            <Controller
                                control={control}
                                name="expireDate"
                                rules={{
                                    required: "Please select expiry date",
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <DatePicker
                                        views={["year", "month", "day"]}
                                        label={
                                            errors.expireDate
                                                ? "Error"
                                                : "Expire date"
                                        }
                                        sx={{
                                            width: "100%",
                                        }}
                                        value={value}
                                        onChange={onChange}
                                        slotProps={{
                                            textField: {
                                                error: !!errors?.expireDate,
                                                helperText:
                                                    errors?.expireDate?.message,
                                            },
                                        }}
                                    />
                                )}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
            </Grid>

            {children}
        </Box>
    );
}

export default InventoryForm;
