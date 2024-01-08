import PageNotFound from "../404Error";
import App from "../App";
import Insurance from "../Insurance";

const Routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: 'insurance',
        element: <Insurance />
      },
    ]
  }
];

export default Routes;