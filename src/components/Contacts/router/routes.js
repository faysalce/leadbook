import AllContacts from "../AllContacts";
import FavoriteContacts from "../FavoriteContacts";



const routes = [
    {
        path: "/contacts/all",
        exact: true,
      
        component: AllContacts
    },
    {
        path: "/contacts/favorite",
        exact: true,
        component: FavoriteContacts
    }
];

export default routes;
