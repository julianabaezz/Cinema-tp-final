import { FC } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../Main";

const Layout: FC = ({children}) =>{
    return(
        <>
        <Header></Header>
        <Main>
            {children}
        </Main>
        <Footer></Footer>
        </>
    )
}
export {Layout}