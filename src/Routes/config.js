import Home from "../Pages/Home";
import Agency from "../Pages/Agency";
import DetailAgency from "../Pages/Agency/DetailAgency";
import Employee from "../Pages/Employee";
import DetailEmploye from "../Pages/Employee/DetailEmploye";
import Carrier from "../Pages/Carrier/Carrier";
import Journey from "../Pages/Journey";
import DetailCarrier from "../Pages/Carrier/DetailCarrier";

const config = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/agency",
    element: <Agency />,
  },
  {
    path: "/agency/detail",
    element: <DetailAgency />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/carrier/detail",
    element: <DetailCarrier />,
  },
  {
    path: "/carrier",
    element: <Carrier />,
  },
  {
    path: "/journey",
    element: <Journey />,
  },
];

export default config;
