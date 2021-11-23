import Navbar from "../Navbar";
import Footer from "../footer";

export default function MainLayout({children}) {

    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
