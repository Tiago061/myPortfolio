import { Drawer } from "@mui/material";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function NavBar(){
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return(
        <nav>
            <div className="">
                <Link to={'/'}>
                    <img src="/logotipoTH.png" alt="Logo" />
                </Link>

                <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Tech Stack</Link>
                <Link to={'/'}>Projects</Link>
                <Link to={'/'}>Contact</Link>
            </div>

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
                            <div className={styles.drawer}>
                            <Link to={'/'} href="" className={styles.navbarLink}>Home</Link>
                            <Link to={'/plates'} href="" className={styles.navbarLink}>Plates</Link>
                            <Link to={'/profile'} href="" className={styles.navbarLink}>Profile</Link>
                            </div>
                        
                    </Drawer>
              
              
            </nav>
    )
}