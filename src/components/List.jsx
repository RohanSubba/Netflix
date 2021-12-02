import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./list.scss"
import Listitem from './Listitem'
import {useRef} from 'react'
import styled from '@emotion/styled'

const ListContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`
const ListTitle = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 500;
`
const ListWrapper = styled.div`
    position: relative;
` 
const ListArrowBack = styled(ArrowBackIosOutlined)`
    width: 50px;
    height: 100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    left: 0;
`

const WrapperContainer = styled.div`
    margin-left: 50px;
    display: flex;
    width: max-content;
    margin-top: 10px;
    width: max-content;
    transform: translateX(0px);
    transition: all 1s ease;
    
`

const ListArrowForward = styled(ArrowForwardIosOutlined)`
    width: 50px;
    height: 100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    right: 0;
`

export default function List() {
    const [isMoved,setIsMoved] = useState(false)
    const [slideNumber,setSlideNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            // console.log('ok')
            listRef.current.style.transform = `translateX(${230+ distance}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            // console.log('ok')
            listRef.current.style.transform = `translateX(${-230+ distance}px)`
        }
        console.log(distance);

    }
    return (
        <ListContainer>
            <ListTitle>Continue to watch</ListTitle>
            <ListWrapper>
                <ListArrowBack onClick={()=>handleClick("left")}
                style={{display: !isMoved && "none"}} />
                <WrapperContainer ref={listRef}>
                    <Listitem index={0}/>
                    <Listitem index={1}/>
                    <Listitem index={2}/>
                    <Listitem index={3}/>
                    <Listitem index={4}/>
                    <Listitem index={5}/>
                    <Listitem index={6}/>
                    <Listitem index={7}/>
                    <Listitem index={8}/>
                    <Listitem index={9}/>
                </WrapperContainer>
                <ListArrowForward onClick={()=>handleClick("right")} />
            </ListWrapper>
        </ListContainer>
    )
}
