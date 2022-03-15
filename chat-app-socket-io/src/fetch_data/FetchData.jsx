import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const FetchData = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {

        const FetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setData(data);

        }
        FetchData()

    }, [])
    const handle = () => {
        setShow(true)


    }
    console.log(data, "DATA")
    return (
        <div>
            <h2> Table Flow </h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>I D</TableCell>
                            <TableCell align="right">N A M E</TableCell>
                            <TableCell align="right">U S E R N A M E</TableCell>
                            <TableCell align="right">E M A I L </TableCell>
                            <TableCell align="right">P H O N E  N U M B E R </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={() => handle()}> Click to Change Name</button>
            {show && <p> Nothing Changed </p>}
        </div>
    )
}

export default FetchData;