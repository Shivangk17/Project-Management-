import React from 'react'
import DataTable from 'react-data-table-component';
import { CCard } from '@coreui/react'

const UserCreate = () => {
    return (
        <>
            <CCard>
                <DataTable columns={columns} data={data}></DataTable>
            </CCard>
        </>
    )
}
export default UserCreate 