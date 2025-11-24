import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import DonateNowPage from './DonateNowPage';
import LogIn from './LogIn';
import AdminPortal from './AdminPortal';
// import Home from './Home';
import AdministrationList from './AdministrationList';
import ChildrenList from './ChildrenList';
import DonorList from './DonorList';    
import UpcomingEvents from './UpcomingEvents';                       
import Register from './Register'; // <-- import registration form

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },  // Default route
  { path: '/donate', element: <DonateNowPage /> },
  { path: '/login', element: <LogIn /> },
  { path: '/registration', element: <Register /> }, 
   { path: '/adminportal', element: <AdminPortal /> },// <-- new route

  // // Admin Routes
  { path: '/', element: <AdminPortal /> },
  { path: '/admin/administration-list', element: <AdministrationList /> },
  { path: '/admin/children-list', element: <ChildrenList /> },
  { path: '/admin/donor-list', element: <DonorList /> },
   { path: '/admin/upcoming-events', element: <UpcomingEvents /> },
]);

export default router;
