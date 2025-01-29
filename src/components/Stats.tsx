import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import capitalize from "@mui/material/utils/capitalize";
import { Pokemon } from "../types";

type Props = {
    pokemon: Pokemon;
};

export const Stats = ({ pokemon }: Props) => {
    // Filtra apenas as estatísticas que você quer exibir
    const filteredStats = pokemon.stats.filter(stat =>
        ["hp", "attack", "defense", "special-attack", "special-defense", "speed"].includes(stat.stat.name)
    );

    return (
        <>
            <Typography>Stats</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="Pokemon stats table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Stat</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredStats.map(stat => (
                            <TableRow key={stat.stat.name} sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0
                                }
                            }}>
                                <TableCell component={"th"} scope="row">
                                    {capitalize(stat.stat.name.replace("-", " "))} {/* Formata o nome da estatística */}
                                </TableCell>
                                <TableCell>
                                    {stat.base_stat}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};