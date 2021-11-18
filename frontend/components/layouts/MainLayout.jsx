import NavBar from "../NavBar";
import Footer from "../footer";


export default function MainLayout({children}) {

    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}
