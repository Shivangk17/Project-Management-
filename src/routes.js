import { element, exact } from 'prop-types'
import React from 'react'

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

const UserIndex = React.lazy(() => import('./views/pages/User/Index'))
const UserCreate = React.lazy(() => import('./views/pages/User/Create'))
const UserDetail = React.lazy(() => import('./views/pages/User/Detail'))
const UserUpdate = React.lazy(() => import('./views/pages/User/Update'))

const EmployeeIndex = React.lazy(() => import('./views/pages/Employee/'))
const EmployeeCreate = React.lazy(() => import('./views/pages/Employee/Create'))
const EmployeeDetail = React.lazy(() => import('./views/pages/Employee/Detail'))
const EmployeeUpdate = React.lazy(() => import('./views/pages/Employee/Update'))

const ProjectIndex = React.lazy(() => import('./views/pages/Project/'))
const ProjectCreate = React.lazy(() => import('./views/pages/Project/Create'))
const ProjectDetail = React.lazy(() => import('./views/pages/Project/Detail'))
const ProjectUpdate = React.lazy(() => import('./views/pages/Project/Update'))

const TaskIndex = React.lazy(() => import('./views/pages/Task/'))
const TaskCreate = React.lazy(() => import('./views/pages/Task/Create'))
const TaskDetail = React.lazy(() => import('./views/pages/Task/Detail'))
const TaskUpdate = React.lazy(() => import('./views/pages/Task/Update'))

const ExpenseIndex = React.lazy(() => import('./views/pages/Expense/'))
const ExpenseCreate = React.lazy(() => import('./views/pages/Expense/Create'))
const ExpenseDetail = React.lazy(() => import('./views/pages/Expense/Detail'))
const ExpenseUpdate = React.lazy(() => import('./views/pages/Expense/Update'))

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/', name: 'Dashboard', element: Dashboard },

  { path: '/login', name: 'Login', element: Login },


  { path: '/users', name: 'Users', element: UserIndex, exact: true },
  { path: '/users/create', name: 'Create', element: UserCreate },
  { path: '/users/update', name: 'Update', element: UserUpdate },
  { path: '/users/detail', name: 'Detail', element: UserDetail },

  { path: '/employees', name: 'Employees', element: EmployeeIndex, exact: true },
  { path: '/employees/create', name: 'Create', element: EmployeeCreate },
  { path: '/employees/update', name: 'Update', element: EmployeeUpdate },
  { path: '/employees/detail', name: 'Detail', element: EmployeeDetail },

  { path: '/projects', name: 'Projects', element: ProjectIndex, exact: true },
  { path: '/projects/create', name: 'Create', element: ProjectCreate },
  { path: '/projects/update', name: 'Update', element: ProjectUpdate },
  { path: '/projects/detail', name: 'Detail', element: ProjectDetail },

  { path: '/tasks', name: 'Tasks', element: TaskIndex, exact: true },
  { path: '/tasks/create', name: 'Create', element: TaskCreate },
  { path: '/tasks/update', name: 'Update', element: TaskUpdate },
  { path: '/tasks/detail', name: 'Detail', element: TaskDetail },

  { path: '/expenses', name: 'Expenses', element: ExpenseIndex, exact: true },
  { path: '/expenses/create', name: 'Create', element: ExpenseCreate },
  { path: '/expenses/update', name: 'Update', element: ExpenseUpdate },
  { path: '/expenses/detail', name: 'Detail', element: ExpenseDetail },



  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
