import React from 'react';

import StyleNavbar from './StyleNavbar';
import { Outlet } from 'react-router-dom';

const SharedLayout=()=>{

return (
    <div>
           
    <StyleNavbar />
        <section className='section '>
            
            <Outlet />
        </section>
  </div>



);




};
export default SharedLayout;