import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ioniconsSolid from '@styled-icons/ionicons-solid';
import {Icon, H3, MainButton} from '../'
import Slider from "react-slick";

const ProjectModalStyle = styled.div`
    width:100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items:center;
    left:0;
    top:0;

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
    .button {
        width: auto;
        height: auto;
    }
    .slick-prev {
        left:20px;
        z-index:20;
    }
    .slick-next {
        right:20px;
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
        bottom: 20px;
        li {
            button::before {
                font-size: 15px;
                color: ${props => props.theme.colorBG3};
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
    height: 563px;
`
const CloseModalButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 4em;
    width: 4em;
    z-index:10;
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
                            <CarouselItem>
                                <CarouselImage src="https://dummyimage.com/1920x1080/fff/aaa" alt="test"/>
                            </CarouselItem>
                            <CarouselItem>
                                <CarouselImage src="https://dummyimage.com/1920x1080/fff/aaa" alt="test"/>
                            </CarouselItem>
                            <CarouselItem>
                                <CarouselImage src="https://dummyimage.com/1920x1080/fff/aaa" alt="test"/>
                            </CarouselItem>
                        </SliderOverride>
                    </ModalContainer>
                </ProjectModalStyle>
            }
        </Fragment>
        
    )
}

ProjectModal.propTypes = {

}

export default ProjectModal

