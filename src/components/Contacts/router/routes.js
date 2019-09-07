import AllContacts from "../AllContacts";
import Companies from "../Companies";



const routes = [
    {
        path: "/contacts/all",
        exact: true,
      
        component: AllContacts
    },
    {
        path: "/contact:id",
        exact: true,
      
        component: AllContacts
    },
    {
        path: "/contacts/companies",
        exact: true,
        component: Companies
    }
];

export default routes;
