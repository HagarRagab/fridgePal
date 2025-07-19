import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { TExtendedIngredient } from "../../types";

type RecipeIngredientsTableProps = {
    ingredients: TExtendedIngredient[];
};

function createData(id: number, name: string, amount: number, unit: string) {
    return { id, name, amount, unit };
}

export default function RecipeIngredientsTable({
    ingredients,
}: RecipeIngredientsTableProps) {
    const rows = ingredients.map((i: TExtendedIngredient) =>
        createData(i.id, i.name, i.amount, i.unit)
    );

    return (
        <TableContainer
            component={Paper}
            sx={{ height: "160px", overflowY: "auto" }}
        >
            <Table aria-label="ingredients table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">amount</TableCell>
                        <TableCell align="center">unit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="center">{row.amount}</TableCell>
                            <TableCell align="center">
                                {row.unit || "-"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
