
import React from 'react'
import Featured from '../components/Featured'
import List from '../components/List'
import Navbar from '../components/Navbar'
import "./home.scss"


const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured />
            <List/>
            <List/>
            <List/>
            <List/>

        </div>
    )
}

export default Home
