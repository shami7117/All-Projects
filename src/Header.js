import React from "react";
import Image from './image.js'
import Wallet from "./wallet.js";
import { Button } from "@mui/material";
import Link from '@mui/material/Link';
function Header(props) {
    return <>
        <header className={props.class}>

            <div className="logo-container">
                <Image img={props.logo} name={props.alt}> <Wallet text={props.wallet} /></Image>
            </div>
            <div className=" header-menu">
                <Link className="nav-links" underline="hover" >
                    {props.btn}
                </Link>
                <button className="nav-links">
                    ROADMAP
                </button>
                <button className="nav-links">
                    TEAM
                </button>
                <button className="nav-links">
                    GALLERY
                </button>
                <button className="nav-links">
                    PEDIGRE
                </button>
                <button className="nav-links  wallet-btn" >
                    CONNECT WALLET</button>


            </div>

        </header >

    </>
}
export default Header;