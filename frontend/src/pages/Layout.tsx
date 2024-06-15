import {Link, Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";

export const Layout = () => {
    return (
        <>
            <Header />

            <div className="main">
                <div className="wrapper">
                    <Outlet/>
                </div>
            </div>

            <Footer />
        </>
    )
}
