import React, { useEffect, useState } from 'react'
import './TableCate.scss'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { NavLink } from 'react-router-dom';

const columns = [
    { id: 'maloai', label: ' Mã Loại ', minWidth: 60, align: 'center' },
    { id: 'tenloai', label: ' Tên Loại ', minWidth: 100, align: 'center' },
    {
        id: 'delete',
        label: ' Delete ', align: 'center'
    },
    {
        id: 'edit',
        label: ' Edit ', align: 'center'
    }
];


export default function TableCate() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllCate();
    }, [data]);

    const getAllCate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteCate = (id) => {
        confirmAlert({
            title: 'Xóa',
            message: 'Bạn có muốn xóa loại này không ?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => {
                        const res = axios.post(`${process.env.REACT_APP_API_URL}/deletecate?maloai=${id}`);
                        if (res.status === 200) {
                            console.log(res.data);
                        }
                    }
                },
                {
                    label: 'Không',
                    onClick: () => {

                    }
                }
            ]
        })
    }


    return (
        <div className='containerTableCate'>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 700 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={10} className='nameAll'>
                                    Thể Loại
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item, id) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                            {columns.map((column) => {
                                                const value = item[column.id];
                                                return (
                                                    !(column.id === 'edit') ? (
                                                        !(column.id === 'delete') ? <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell> : <TableCell key={column.id} align={column.align}>
                                                        <i onClick={()=>deleteCate(item.maloai)} class="fa fa-trash"></i>
                                                        </TableCell>) : <TableCell key={column.id} align={column.align}>
                                                        <NavLink to={`/editcateadmin/${item.maloai}`}><i class="fa fa-edit"></i></NavLink>
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}
