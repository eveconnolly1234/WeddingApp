import React from "react";
import { SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarLink,
SidebarMenu } from "./SidebarElements";

const Sidebar =({isOpen, toggle})=>{
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                    <SidebarLink to="reservation" onClick={toggle}>
                        Reservations
                    </SidebarLink>
                </SidebarMenu>  

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;