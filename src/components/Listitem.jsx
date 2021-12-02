import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./listItem.scss"
import useSWR from 'swr'

const image_base_url = "https://image.tmdb.org/t/p/w500"

export default function Listitem({ index }) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const [isHovered, setIsHovered] = useState(false);
    const { data, error } = useSWR('https://api.themoviedb.org/3/trending/all/week?api_key=05b710f6971eaddeaa120bde77135cc2', fetcher)

    // const trailer = ""
if(!data) return <>loading...</>
    console.log(data)
    return (
        <div

            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {data.results.map(movie =>(
                    <img src={`${image_base_url}${movie.poster_path}`} alt={movie.name}/>
                    ))}
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
                            
                            
                            
                            
                            <span>{data.results[index].original_title}</span>
                            <span className="limit">{data.results[index].adult ? "+16" : ""}</span>
                            <span>{data.results[index].release_date}</span>
                        </div>
                        <div className="desc">
                            {data.results[index].overview}
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}

        </div>

    )
}
