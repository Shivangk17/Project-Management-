import React, { useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';

import { CCard, CCardHeader, CCardBody, CButton,CFormInput } from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const UserIndex = () => {

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Email', selector: row => row.email, sortable: true },
        { name: 'Role', selector: row => row.role, sortable: true },
        { name: 'Date', selector: row => row.date, sortable: true },
        {
            name: 'Active',
            cell: row => (
                <input
                    type="checkbox"
                    checked={row.active}
                    onChange={() => toggleActive(row.id)}
                />
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', date: '2023-09-18', active: true },
        { id: 23, name: 'John Doe', email: 'john@example.com', role: 'Admin', date: '2023-09-18', active: true },
        { id: 24, name: 'John Doe', email: 'john@example.com', role: 'Admin', date: '2023-09-18', active: true },
        { id: 25, name: 'John Doe', email: 'john@example.com', role: 'Admin', date: '2023-09-18', active: true },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 4, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 5, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 6, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 7, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 8, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 9, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 10, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id:11, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 12, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 13, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 14, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 15, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 16, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 17, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 18, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 19, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 20, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 21, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        { id: 22, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
        // Add more rows as necessary
    ];

    const customStyles = {
        table: {
            style: {
                backgroundColor: '#aaa',
            },
        },
        headCells: {
            style: {
                color: '#000',
                fontWeight: 'bold',
                backgroundColor: '#aaa',
                fontSize: '16px', 
            },
        },
        cells: {
            style: {
                backgroundColor: '#999',
                fontSize: '16px', 
                color: '#000',
            },
        },
    };
    const navigate = useNavigate();
    const [records, setRecords] = useState(data);

    // Toggle active status
    const toggleActive = (id) => {
        setRecords(prevRecords =>
            prevRecords.map(record =>
                record.id === id ? { ...record, active: !record.active } : record
            )
        );
    };

    const Container = styled.div`
        padding: 20px;
        background-color: #eee;
        min-height: 60vh;
        color: white;
    `;

    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
        // data = data.filter((item) => { item.name.includes(search) })
    }
    return (
        <>
            <CCard className='mb-4'>
                <CCardHeader className='d-flex flex-row justify-content-between'>
                    <h2 className='flex-item flex-grow-1'>Users</h2>
                    <CButton color="primary" onClick={() => navigate('/users/create')}>Create New</CButton>
                </CCardHeader>
                <CCardBody>
                    <Container>
                        <DataTable
                            columns={columns}
                            data={records}
                            pagination
                            selectableRows={false}
                            fixedHeader
                            highlightOnHover
                            defaultSortField="id"
                            theme="dark"
                            customStyles={customStyles}
                            responsive
                            subHeader
                            subHeaderComponent={<input type="text" placeholder="Search..." value={search} onChange={handleChange} className="search" />}
                        /></Container>
                </CCardBody>
            </CCard >
        </>
    )
}
export default UserIndex 