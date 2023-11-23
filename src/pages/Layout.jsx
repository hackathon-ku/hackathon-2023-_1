import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/NisitKU">Maingjhj</Link>
          </li>
          <li>
            <Link to="/NisitKU/Newtranscript">tran</Link>
          </li>
          <li>
            <Link to="/NisitKU/CalendarKU">calen</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;