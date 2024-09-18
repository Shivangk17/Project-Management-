import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilHome,
  cilUser,
  cilPeople,
  cilTask,
  cilDollar,
  cilAccountLogout
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'success',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Employee',
    to: '/employees',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Project',
    to: '/projects',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Task',
    to: '/tasks',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Expense',
    to: '/expenses',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/login',
    onClick:()=> {localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');},
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />
  }
]

export default _nav
