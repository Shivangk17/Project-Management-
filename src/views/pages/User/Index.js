import React from 'react'
import DataTable from 'react-data-table-component';
import { CCard, CCardHeader, CCardBody } from '@coreui/react'

const UserIndex = () => {
    console.log('abccdd')
    const columns = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Age',
            selector: row => row.age,
        },
    ]

    const data = [
        {
            id: 1,
            name: 'Ansh',
            email: "ansh",
            age: 20,
        },
        {
            id: 2,
            name: 'manav',
            email: "manav",
            age: 20,
        },
        {
            id: 3,
            name: 'dhrumil',
            email: "dhrumil",
            age: 20,
        },
        {
            id: 4,
            name: 'keshav',
            email: "keshav",
            age: 20,
        }
    ]
    return (
        <>
            <CCard className='mb-4'>
                <CCardHeader><h2>Users</h2></CCardHeader>
                <CCardBody>
                <DataTable columns={columns} data={data}></DataTable>
                </CCardBody>
            </CCard>
        </>
    )
}
export default UserIndex 