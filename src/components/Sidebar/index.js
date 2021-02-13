import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoutes} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="block1" onClick={toggle}>
                        block 1
                    </SidebarLink>
                    <SidebarLink to="block2" onClick={toggle}>
                        block 2
                    </SidebarLink>
                    <SidebarLink to="block3" onClick={toggle}>
                        block 3
                    </SidebarLink>
                    <SidebarLink to="block4" onClick={toggle}>
                        block 4
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoutes to='/something'>To something</SidebarRoutes>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
        </>
    )
}

export default Sidebar
