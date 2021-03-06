/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ioniconsSolid from '@styled-icons/ionicons-solid';
import {Icon, H3, MainButton} from '../';
import Slider from "react-slick";
import parse from 'html-react-parser';
import { device } from '../../styles/breakpoints'

const ProjectModalStyle = styled.div`
    width:100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items:center;
    left:0;
    top:0;
    z-index: 20000;

    &::before {
        content:"";
        position:absolute;
        background-color: black;
        width:100vw;
        height: 100vh;
        z-index: 10;
        opacity:0.3;
    }
`
const ModalContainer = styled.div`
    position:relative;
    border-radius: 20px;
    background-color: ${props => props.theme.colorBG3};
    z-index: 20;
    
    @media ${device.largeDesktop} {
        width: 1200px;
        height: 95vh;
	}

	@media ${device.desktop} {
        width: 1000px;
        height: 95vh;
	}

	@media ${device.laptop}{
        width: 900px;
        max-height: 900px;
        height: 80vh;
	}
	
	@media ${device.tablet} {
        width: 700px;
        max-height: 800px;
        height: 80vh;
	}
	
	@media ${device.mobileLarge} {
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0px;
        display: flex;
        flex-direction: column;
        justify-content:center;
	}
`
const SliderOverride = styled(Slider)`
	@media ${device.tablet} {
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
            border-top-left-radius: 20px;
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
            border-top-right-radius: 20px;
        }
	}
    
    @media ${device.mobileLarge} {
        &::before {
            border-top-left-radius: 0px;
        }

        &::after {
            border-top-right-radius: 0px;
        }
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

        @media ${device.mobileLarge} {
            font-size: 30px;
        }
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
    width: 60%;
    background-color: ${props => props.theme.colorBG4};
    @media ${device.largeDesktop} {
        width: 60%;
	}

	@media ${device.desktop} {
        width: 60%;
	}	
	@media ${device.tablet} {
        width: 100%;
	}
	
	@media ${device.mobileLarge} {
        border-radius: 0;
	}
`
const CarouselImage = styled.img`
    margin: 0 auto;

    @media ${device.largeDesktop} {
        height:405px;
	}

	@media ${device.desktop} {
        height:338px;
	}

	@media ${device.laptop}{
        height: 304px;
	}
	
	@media ${device.tablet} {
        height: 394px;
	}
	
	@media ${device.mobileLarge} {
        width: 100%;
        height: auto;
	}
`

const CarouselVideo = styled.div`
    margin: 0 auto;
    position: relative;

    @media ${device.largeDesktop} {
        height:405px;
	}

	@media ${device.desktop} {
        height:338px;
	}

	@media ${device.laptop}{
        height: 304px;
	}
	
	@media ${device.tablet} {
        height: 394px;
	}
	
	@media ${device.mobileLarge} {
        width: 100%;
        height: 0;
        padding-bottom:56.25%;
	}
`

const VideoFrame = styled.iframe`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    z-index: 999;

    @media ${device.largeDesktop} {
        width: 60%;
	}

	@media ${device.desktop} {
        width: 60%;
	}	
	@media ${device.tablet} {
        width: 100%;
	}
`

const CloseModalButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 4em;
    width: 4em;
    z-index:20;
    
    @media ${device.mobileLarge} {
        top: 10px;
	}
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
    @media ${device.mobileLarge} {
        margin-top: 2em;

        p, a {
            font-size:1.4em;
        }
	}
`

const ButtonsContainer = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
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
    const {isActive, onClickClose, url, urlCall, projectImageList, title, fullDescription, techList, videoId} = props;
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
                            videoId && 
                                <CarouselItem>
                                    <CarouselVideo>
                                        <VideoFrame
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            frameBorder="0"
                                        />
                                    </CarouselVideo>
                                </CarouselItem>
                            }   
                            {
                                projectImageList.map((item, idx)=> {
                                    return (
                                        <CarouselItem key={idx}>
                                            <CarouselImage src={item.url}/>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </SliderOverride>
                        <ModalInfo>
                            <H3 contrastColor textSize="2.2em" asTitle textAlign="center" textMargin="0px 0 10px">{title}</H3>
                            {
                                parse(fullDescription)
                            }
                        <ButtonsContainer>
                            {
                                url && <MainButton isExternalLink url={url}>{urlCall}</MainButton>
                            }
                        </ButtonsContainer>
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

