import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import DonateNowPage from './DonateNowPage';
import LogIn from './LogIn';
import AdminPortal from './AdminPortal';
import AdministrationList from './AdministrationList';
import ChildrenList from './ChildrenList';
import DonorList from './DonorList';
import UpcomingEvents from './UpcomingEvents';
import Register from './Register';
import AddChild from './AddChild';
import DeleteChild from './DeleteChild';
import UpdateChild from './UpdateChild';
import ViewChild from './ViewChild';
import AddDonor from './AddDonor';
// import Members from './pages/Members';  // if needed

const router = createBrowserRouter([
  // Public Routes
  { path: '/', element: <LandingPage /> },
  { path: '/donate', element: <DonateNowPage /> },
  { path: '/login', element: <LogIn /> },
  { path: '/registration', element: <Register /> },

  // Admin Dashboard Home
  { path: '/adminportal', element: <AdminPortal /> },

  // Admin Sub-Pages
  { path: '/admin/administration-list', element: <AdministrationList /> },
  { path: '/admin/children-list', element: <ChildrenList /> },
   { path: '/admin/add-children', element: <AddChild /> },
    { path: '/admin/delete-child', element: <DeleteChild /> },
     { path: '/admin/update-child', element: <UpdateChild /> },
       { path: '/admin/view-child', element: <ViewChild /> },
       { path: '/admin/add-donor', element: <AddDonor /> },
   
  { path: '/admin/donor-list', element: <DonorList /> },
  { path: '/admin/upcoming-events', element: <UpcomingEvents /> },

  // Only if you want a frontend members page:
  // { path: '/members', element: <Members /> },
]);

export default router;
