import React from 'react'
import { renderRoutes } from 'react-router-config';


const HomeComponent = props=>{
    if(!window.localStorage.getItem('user')){
        window.location.href='#/login'
    }
    return(
            <div>
                <span>哇丫丫a丫丫b</span>
                {renderRoutes(props.route.routes)}
            </div>
        )
}
export default HomeComponent;

