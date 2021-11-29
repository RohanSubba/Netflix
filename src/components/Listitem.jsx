import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./listItem.scss"

export default function Listitem({index}) {
    const[isHovered, setIsHovered] = useState(false);
    // const trailer = ""
    return (
        <div 
            className="listItem"
            style={{left: isHovered && index * 225 -50 + index * 2.5}} 
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}>
            <img src="https://www.resultnepalonline.com/wp-content/uploads/2021/07/119041-the-witcher-nightmare-of-the-wolf-anime-debuts-on-netflix-in-august.jpg" alt="" />
            {isHovered && (
            <>
            {/* <video src = {trailer} autoPlay={true} loop /> */}
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </div>
                <div className="genre">Action</div>
            </div>
            </>
            )}

        </div>

    )
}
