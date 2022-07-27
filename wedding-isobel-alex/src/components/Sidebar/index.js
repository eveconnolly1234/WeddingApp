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
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='venue' onClick={toggle}>
                        Venue
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>  

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;