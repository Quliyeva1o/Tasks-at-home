import AddCountry from "../pages/Admin/AddCountry/index.jsx";
import AdminLayout from "../pages/Admin/AdminLayout.jsx";
import Countries from "../pages/Admin/Countries/index.jsx";
import Dashboard from "../pages/Admin/Dashboard/index.jsx";
import About from "../pages/Client/About";
import ClientCounteries from "../pages/Client/ClientCounteries/index.jsx";
import ClientLayout from "../pages/Client/ClientLayout";
import CountryDetail from "../pages/Admin/CountryDetail/index.jsx";
import Home from "../pages/Client/Home";
import CountryDetailClient from "../pages/Client/CountryDetail/index.jsx";
import AdminLogin from "../pages/Admin/Login/index.jsx";

export const ROUTES=[
    {
        path:"",
        element:<ClientLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"countries",
                element:<ClientCounteries/>
            },
            {
                path:"countries/:id",
                element:<CountryDetailClient/>
            }
        ]
    },{
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            
            {
                index:true,
                element:<Dashboard/>
            },{
                path:"add-country",
                element:<AddCountry/>
            },{
                path:"login",
                element:<AdminLogin/>
            },{
                path:"countries",
                element:<Countries/>
            },
            {
                path:"countries/:id",
                element:<CountryDetail/>
            }
        ]
        
    }
]