import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./listItem.scss"
import useSWR from 'swr'

export default function Listitem({ index }) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const [isHovered, setIsHovered] = useState(false);
    const { data, error } = useSWR('https://api.themoviedb.org/3/trending/all/week?api_key=05b710f6971eaddeaa120bde77135cc2', fetcher)

    // const trailer = ""

    console.log(data)
    return (
        <div

            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src="https://www.resultnepalonline.com/wp-content/uploads/2021/07/119041-the-witcher-nightmare-of-the-wolf-anime-debuts-on-netflix-in-august.jpg" alt="" />
            {isHovered && (
                <>
                    {/* <video src = {trailer} autoPlay={true} loop /> */}
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        < div className="itemInfoTop">
                            
                            
                            
                            
                            <span className="limit">{data.results[index].original_title}+16</span>
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
