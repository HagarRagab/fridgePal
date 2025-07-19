import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu, { type MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import { useState, type MouseEvent } from "react";
import { useSearchParams } from "react-router";
import type { Models } from "appwrite";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: "rgb(55, 65, 81)",
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
        ...theme.applyStyles("dark", {
            color: theme.palette.grey[300],
        }),
    },
}));

type FilterMenuProps = {
    searchKey: string;
    filterList: Models.Document[];
    isLoading: boolean;
};

function FilterMenu({ searchKey, filterList, isLoading }: FilterMenuProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const SearchValue = searchParams.get(searchKey) || "";

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilter = (value: string) => {
        setSearchParams(`?${searchKey}=${value}`);
        handleClose();
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Options
            </Button>
            <StyledMenu
                id="category-filter-menu"
                slotProps={{
                    list: {
                        "aria-labelledby": "category-filter-button",
                    },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    value="all"
                    disableRipple
                    onClick={() => handleFilter("")}
                    selected={"all" === SearchValue}
                >
                    All
                </MenuItem>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filterList.map((item: Models.Document) => (
                        <MenuItem
                            key={item.slug}
                            disableRipple
                            onClick={() => handleFilter(item.$id)}
                            selected={item.$id === SearchValue}
                        >
                            {item.name}
                        </MenuItem>
                    ))
                )}
            </StyledMenu>
        </div>
    );
}

export default FilterMenu;
