import { Outlet,  } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default Layout;