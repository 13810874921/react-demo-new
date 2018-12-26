import React from 'react';
import {Redirect} from 'react-router-dom';
import HomeComponent from '../home/index'
import Login from '../login'

const routes = [
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        component: HomeComponent,
        routes:[
            {
                path:'/home',
                exact:true,
                component:()=><div>what???</div>
            },
            {
                path:'/a',
                component:()=><div>aaaa</div>
            },
            {
                path:'/b',
                component:()=><div>bbbb</div>
            },
            {
                path:'*',
                component:()=><Redirect to='/home' />
            }
        ]
    },
    {
        path:'*',
        component:()=><Redirect to='/home' />
    }
];
export default routes;
