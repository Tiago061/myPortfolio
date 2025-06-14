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
            <nav className="flex items-center justify-between w-full max-w-7xl mx-auto lg:justify-around ">
                <Link to={'/'} >
                    <img src="/logocubo.png" alt="Logo" className="h-10"/>
                </Link>

                <div className="hidden lg:flex gap-3 ">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/users'}>Tech Stack</Link>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>

              

                <div className="hidden lg:flex gap-3 ">
                    <FaGithub />
                    <FaLinkedin />
                </div>

                <div className="lg:hidden">
                    <div>
                        <LuMenu className="h-10" onClick={handleOpenMenu}/>
                    </div>
                </div>

                <Drawer
                            anchor='right'
                            open={openMenu}
                            onClose={handleOpenMenu}
                             PaperProps={{
                                    style: {
                                        width: '250px', 
                                        }
                                }}
                            >
                                <div className="flex items-center justify-center flex-col p-8 gap-1 h-full ">
                                    <Link to={'/'}  className="" >Home</Link>
                                    <Link to={'/'}  className="" >About</Link>
                                    <Link to={'/'}  className="">Tech Stack</Link>
                                    <Link to={'/'}  className="">Contact</Link>
                                </div>
                            
                        </Drawer>
                </nav>
            </BrowserRouter>
    )
}