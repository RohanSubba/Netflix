import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { useState } from 'react'
import React from 'react'
import "./navbar.scss"
import styled from '@emotion/styled'


const NavBar = styled.header`
    width: 100%;
    color: white;
    font-size: 14px;
    position: fixed;
    top: 0;
    z-index: 999;
    background: ${props => props.isScrolled ? 'var(--main-color)' : 'linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%)'};    
`
const NavContainer = styled.div`
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`
const NavLeft = styled.div`
    display: flex;
    align-items: center;
`

const LeftImg = styled.img`
    height: 25px;
    margin-right: 40px;
`
const LeftSpan = styled.span`
    margin-right: 20px;
    cursor: pointer;
`

const NavRight = styled.div`
    display: flex;
    align-items: center;
    
`

const SearchItem = styled(Search)`
    display: flex;
    align-items: center;
    
`

const RightSpan = styled.span`
    padding: 10px;
    cursor: pointer;
`

const Notif = styled(Notifications)`
    margin: 0px 15px;
    cursor: pointer;
`
const NotifImg = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
`

const Profile = styled.div`

&:hover{ 
        .nav-bropdown{
        display: flex;
        flex-direction: column;
        position: absolute;}
    }

     
`
const Option = styled.div`
    display: none;
    background-color: var(--main-color);
    border-radius: 5px;
`;

const Arrow = styled(ArrowDropDown)`
    margin: 0px 15px;
    cursor: pointer;
`



const OptionSpan = styled.div`
    padding: 10px;
    cursor: pointer;
`

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false :true);
        return () => (window.onscroll = null);
    };
    
    console.log(isScrolled);
    return (
        <NavBar isScrolled={isScrolled}>
            <NavContainer>
                <NavLeft>
                    <LeftImg src="data:image/png;base64,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" alt="" />
                    <LeftSpan>Homepage</LeftSpan>
                    <LeftSpan>Series</LeftSpan>
                    <LeftSpan>Movies</LeftSpan>
                    <LeftSpan>New and Popular</LeftSpan>
                    <LeftSpan>My List</LeftSpan>
                </NavLeft>
                <NavRight>
                    <SearchItem/>
                    <RightSpan>KID</RightSpan>
                    <Notif/>
                    <NotifImg src="https://avatars.dicebear.com/api/bottts/Rohan.svg" alt="" />
                    <Profile>
                        <Arrow/>
                        <Option className="nav-bropdown">
                            <OptionSpan>Settings</OptionSpan>
                            <OptionSpan>Logout</OptionSpan>

                        </Option>
                    </Profile>


                </NavRight>

            </NavContainer>
        </NavBar>
    )
}

export default Navbar
