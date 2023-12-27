import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
