import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';  // Correct import for LandingPage
import DonateNowPage from './DonateNowPage'; 
import LogIn from './LogIn';
 // Make sure this path is correct

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },  // Default route for landing page
  { path: '/LandingPage', element: <LandingPage /> },  // Explicitly define the '/LandingPage' route
  { path: '/donate', element: <DonateNowPage /> },  
   { path: '/login', element: <LogIn /> },
    // { path: '/registration', element: <Registration /> },/// New route for donate page
]);

export default router;
