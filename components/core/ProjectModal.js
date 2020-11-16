import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ioniconsSolid from '@styled-icons/ionicons-solid';
import {Icon, H3} from '../';
import Slider from "react-slick";
import parse from 'html-react-parser';

const ProjectModalStyle = styled.div`
    width:100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items:center;
    left:0;
    top:0;
    z-index: 999;
    
    &::before {
        content:"";
        position:absolute;
        background-color: black;
        width:100vw;
        height: 100vh;
        z-index: 10;
        opacity:0.5;
    }
`
const ModalContainer = styled.div`
    position:relative;
    width: 1000px;
    height: 90vh;
    border-radius: 20px;
    background-color: ${props => props.theme.colorBG3};
    z-index: 20;
`
const SliderOverride = styled(Slider)`
    &::before {
        content:"";
        left:0;
        top:0;
        position:absolute;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0.12) 100%); 
        width:8%;
        height: 100%;
        z-index: 10;
        opacity:0.3;
        z-index:15;
    }

    &::after {
        content:"";
        right:0;
        top:0;
        position:absolute;
        background: rgb(0,0,0);
        background: linear-gradient(-90deg, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0.12) 100%); 
        width:8%;
        height: 100%;
        z-index: 10;
        opacity:0.3;
        z-index:15;
    }

    .button {
        width: auto;
        height: auto;
    }
    .slick-prev {
        left:20px;
        z-index:20;
    }
    .slick-next {
        right: 40px;
        z-index:20;
    }
    .slick-arrow {
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }
    .slick-arrow::before {
        color: ${props => props.theme.colorPrimary};
        font-size:40px;
    }
    .slick-dots {
        bottom: -25px;
    
        li {
            button::before {
                font-size: 15px;
                color: ${props => props.theme.colorPrimary};
            }
        }
    }
`

const CarouselItem = styled.div`
    overflow: hidden;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
const CarouselImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 506px;
`

const CloseModalButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 4em;
    width: 4em;
    z-index:20;
`

const ModalInfo = styled.div`
    padding: 2em;
    color: ${props => props.theme.fontColorNegative};
    p {
        font-size:1.2em;
        margin-bottom: 0.5em;
    }
    a {
        color: ${props => props.theme.colorPrimary};
        font-size:1.2em;
    }
`
const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
function ProjectModal(props) {
    const {isActive, onClickClose, url, urlCall, projectImageList, title, fullDescription, techList} = props;
    return (
        <Fragment>
            {
                isActive && 
                <ProjectModalStyle>
                    <ModalContainer>
                        <CloseModalButton onClick={onClickClose}>
                            <Icon
                                Icon={ioniconsSolid.Close}
                                size={"4"}
                                isActive={true}
                                hasMargin={true}
                                hasHover={true}
                            />
                        </CloseModalButton> 
                        <SliderOverride {...settings}>
                            {
                                projectImageList.map((item, idx)=> {
                                    console.log(item);
                                    return (
                                        <CarouselItem key={idx}>
                                            <CarouselImage src={item.url}/>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </SliderOverride>
                        <ModalInfo>
                            <H3 contrastColor textSize="2em" asTitle textAlign="center" textMargin="0px 0 10px">{title}</H3>
                            {
                                parse(fullDescription)
                            }
                        </ModalInfo>
                    </ModalContainer>
                </ProjectModalStyle>
            }
        </Fragment>
        
    )
}

ProjectModal.propTypes = {
    projectImageList: PropTypes.array,
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    urlCall: PropTypes.string,
    techList: PropTypes.array,
}

export default ProjectModal

