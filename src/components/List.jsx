import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import "./list.scss"
import Listitem from './Listitem'

export default function List() {
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined/>
                <div className="container">
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                </div>
                <ArrowForwardIosOutlined/>
            </div>
        </div>
    )
}
