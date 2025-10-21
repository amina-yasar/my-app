import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import DonateNowPage from './DonateNowPage';
import LogIn from './LogIn';
import AdminPortal from './AdminPortal';
import Home from './Home';
import AdministrationList from './AdministrationList';
import ChildrenList from './ChildrenList';
import DonorList from './DonorList';
const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },  // Default route
  { path: '/LandingPage', element: <LandingPage /> },
  { path: '/donate', element: <DonateNowPage /> },
  { path: '/login', element: <LogIn /> },
//   { path: '/', element: <AdminPortal /> },
//    { path: '/', element: <AdminPortal /> },
//   { path: '/admin', element: <AdminPortal /> },
//   { path: '/home', element: <Home /> },
//   { path: '/admin/administration-list', element: <AdministrationList /> },
//   { path: '/admin/children-list', element: <ChildrenList /> },
// { path: '/admin/donor-list', element: <DonorList /> },
  // { path: '/registration', element: <Registration /> },
]);

export default router;
