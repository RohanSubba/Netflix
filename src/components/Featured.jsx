
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import "./featured.scss"
import styled from '@emotion/styled'

const Feature = styled.div`
    height: 90vh;
    position: relative;
`

const Category = styled.div`
    
    position: absolute;
    top: 80px;
    left: 50px;
    font-size: 30px;
    font-weight: 500;
    color: white;
    display: flex;
    align-items: center;
`

const Select = styled.select`
    cursor: pointer;
    background-color: var(--main-color);
    border: 1px solid white;
    color: white;
    margin: 20px;
`

const Img = styled.img`

        width: 100%;
        height: 100%;
        object-fit: cover;
`

const Info = styled.div`
    width: 35%;
    position:absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
`
const Desc = styled.span`
    margin: 20px 0px;
`

const Button = styled.div`
    display: flex;
`

const Play = styled.button`
    padding: 10px 20px;
    border:none;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
    background-color: white;
    color: var(--main-color);
`

const More = styled.button`
    padding: 10px 20px;
    border:none;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
    background-color: gray;
    color: white;
`

const FeatureSpan = styled.span`
    margin-left: 5px;
`

const Featured = ({ type }) => {
    return (
        <Feature>
            {type && (
                <Category>
                    <span>{type === "movie" ? "Movies" : "Series"} </span>
                    <Select name="genre" id="genre">
                        <option >Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="document">Document</option>
                    </Select>
                </Category>
            )

            }
            <Img width="100%" src="https://wallpaperaccess.com/full/5650450.jpg" alt="" />
            <Info>
                <h1>Alice in Borderland</h1>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus nulla id laudantium ipsa fugiat ut! Facere tempore dolores perferendis, inventore eos et, ex quisquam, sunt eveniet exercitationem sapiente optio?
                </Desc>
                <Button>
                    <Play>
                        <PlayArrow />
                        <FeatureSpan>Play</FeatureSpan>
                    </Play>
                    <More>
                        <InfoOutlined />
                        <FeatureSpan>Info</FeatureSpan>

                    </More>
                </Button>
            </Info>

        </Feature>
    )
}

export default Featured
