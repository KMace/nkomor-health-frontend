import PageNotFound from "../404Error";
import App from "../App";
import Appointment from "../Appointment";
import Dashboard from "../Dashboard";
import HelpPage from "../HelpPage";
import Insurance from "../Insurance";
import InsuranceStepper from "../Insurance/InsuranceStepper";
import LabServices from "../LabServices";
import Notifications from "../Notifications";
import Profile from "../Profile";

const Routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'insurance',
        element: <Insurance />
      },
      {
        path: 'appointment',
        element: <Appointment />
      },
      {
        path: 'help',
        element: <HelpPage />
      },
      {
        path: 'labservices',
        element: <LabServices />
      },
      {
        path: 'notifications',
        element: <Notifications />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'exploreinsurance',
        element: <InsuranceStepper />
      },
    ]
  }
];

export default Routes;