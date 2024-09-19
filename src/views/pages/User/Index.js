import React, { useState, useMemo } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const UserIndex = () => {
    const [filterText, setFilterText] = useState('');
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            omit: window.innerWidth < 768, // Hide on mobile
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            omit: window.innerWidth < 576, // Hide on very small screens
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
            omit: window.innerWidth < 992, // Hide on tablets and smaller
        },
        {
            name: 'Active',
            cell: (row) => (
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={row.active}
                        onChange={() => toggleActive(row.id)}
                        aria-label={`Toggle active status for ${row.name}`}
                    />
                    <span className="slider"></span>
                </label>
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
        { id: 11, name: 'Jane Smith', email: 'jane@example.com', role: 'User', date: '2023-09-17', active: false },
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
    const filteredItems = data.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    const subHeaderComponentMemo = useMemo(() => {
        return (
            <input
                key="search"
                type="text"
                autoFocus="autoFocus"
                onFocus={{
                    outline: 'none',
                    border: '#80bdff',
                    boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'
                }}
                placeholder="Search by name..."
                // className="search-input"
                style={{
                    width: '20%',
                    padding: '5px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '14px',
                    // marginBottom: '5px',
                    transition: 'border-color 0.3s ease'
                }}
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
            />
        );
    }, [filterText]);



    const customStyles = {
        table: {
            style: {
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f8f9fa',
                borderBottomWidth: '1px',
                borderBottomColor: '#e9ecef',
                borderBottomStyle: 'solid',
            },
        },
        headCells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
                fontWeight: 'bold',
                color: '#495057',
            },
        },
        cells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
            },
        },
    };
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
                            data={filteredItems}
                            pagination
                            paginationPerPage={10}
                            paginationRowsPerPageOptions={[10, 20, 30]}
                            highlightOnHover
                            pointerOnHover
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                            customStyles={customStyles}
                            responsive
                        /></Container>
                </CCardBody>
            </CCard >
        </>
    )
}
export default UserIndex 