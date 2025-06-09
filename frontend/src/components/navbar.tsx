import { Drawer } from "@mui/material";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { BrowserRouter, Link } from "react-router-dom";

export default function NavBar(){
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return(
        <BrowserRouter>
            <nav>
                <div className="">
                    <Link to={'/'}>
                        <img src="/logotipoTH.png" alt="Logo" />
                    </Link>

                    <div>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/users'}>Tech Stack</Link>
                        <Link to={'/projects'}>Projects</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </div>
                </div>
                
                <div>
                    <FaGithub />
                    <FaLinkedin />
                </div>
                <div className="">
                    <img src="/logotipoTH.png" alt="Logo" />
                    <div className="">
                        <LuMenu className="" onClick={handleOpenMenu}/>
                    </div>
                </div>

                <Drawer
                            anchor='right'
                            open={openMenu}
                            onClose={handleOpenMenu}
                            >
                                <div className="">
                                <Link to={'/'}  className="" >Home</Link>
                                <Link to={'/'}  className="" >Plates</Link>
                                <Link to={'/'}  className="">Profile</Link>
                                </div>
                            
                        </Drawer>
                </nav>
            </BrowserRouter>
    )
}