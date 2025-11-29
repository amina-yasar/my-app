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
import DeleteDonor from './DeleteDonor';
import UpdateDonor from './UpdateDonor';
import ViewDonor from './ViewDonor';
import AddEvent from './AddEvent';
import UpdateEvents from './UpdateEvents';
import DeleteEvent from './DeleteEvent';
import ViewEvents from './ViewEvents';
import StaffProfile from './StaffProfile';
import AddStaff from './AddStaff';
import UpdateStaff from './UpdateStaff';
import DeleteStaff from './DeleteStaff';
import ViewStaff from './ViewStaff';
import AdminProfile from './AdminProfile';

import CreateProfile from './CreateProfile';
// import UpdateProfile from './UpdateProfile';
import DeleteProfile from './DeleteProfile';
import ViewProfile from './ViewProfile';

// import Members from './pages/Members';  // if needed

const router = createBrowserRouter([
  // Public Routes
  { path: '/', element: <LandingPage /> },
  { path: '/donate', element: <DonateNowPage /> },
  { path: '/login', element: <LogIn /> },
  { path: '/registration', element: <Register /> },

  // Admin Dashboard Home
  { path: '/adminportal', element: <AdminPortal /> },
 { path: '/admin/admin-profile', element: <AdminProfile /> },
  // Admin Sub-Pages
  { path: '/admin/administration-list', element: <AdministrationList /> },
  { path: '/admin/children-list', element: <ChildrenList /> },
   
  { path: '/admin/add-children', element: <AddChild /> },
    { path: '/admin/delete-child', element: <DeleteChild /> },
     { path: '/admin/update-child', element: <UpdateChild /> },
       { path: '/admin/view-child', element: <ViewChild /> },
       
       { path: '/admin/add-donor', element: <AddDonor /> },
  { path: '/admin/delete-donor', element: <DeleteDonor /> }, 
    { path: '/admin/update-donor', element: <UpdateDonor /> }, 
      { path: '/admin/view-donor', element: <ViewDonor /> },   
  { path: '/admin/donor-list', element: <DonorList /> },
  { path: '/admin/upcoming-events', element: <UpcomingEvents /> },
    
  { path: '/admin/add-events', element: <AddEvent /> },
     { path: '/admin/update-events', element: <UpdateEvents /> },
       { path: '/admin/delete-events', element: <DeleteEvent /> },
        { path: '/admin/view-events', element: <ViewEvents /> },

         { path: '/admin/add-staff', element: <AddStaff /> },
     { path: '/admin/update-staff', element: <UpdateStaff /> },
       { path: '/admin/delete-staff', element: <DeleteStaff /> },
        { path: '/admin/view-staff', element: <ViewStaff /> },

        { path:"/staffprofile", element:<StaffProfile /> },
  { path: '/staff/create-profile', element: <CreateProfile /> },
    { path: '/staff/delete-profile', element: <DeleteProfile /> },
    //  { path: '/staff/update-profile', element: <UpdateProfile /> },
       { path: '/staff/view-profile', element: <ViewProfile /> },

  // Only if you want a frontend members page:
  // { path: '/members', element: <Members /> },
]);

export default router;
