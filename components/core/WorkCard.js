/* 
 *  @Copyright: (C) 2020, Jonathan 
 *  @Author: Jonathan Dean Damiani 
 *  @Version:  1.0.0
 */

import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {H3, MainButton, ProjectModal, ListOfTech, TechItem} from '../';
import { device } from '../../styles/breakpoints'

const WorkCardWrapper = styled.div`
    @media ${device.largeDesktop} {
        width:  45%;
        margin-bottom: 4em;
	}

	@media ${device.desktop} {
        width: 48%;
        margin-bottom: 4em;
	}

	@media ${device.laptop}{
        width: 100%;
        margin-bottom: 0em;
	}
	
	@media ${device.tablet} {
	}
`
const WorkCardStyle = styled.div`
    position: relative;
    height: 0;
	padding-top: 56.25%;
	background-color: ${props => props.theme.colorBG3};
    background-image: url(${props => props.bgImage});
	background-repeat: no-repeat;
    background-size: cover;
	transition: all 0.2s ease;
    border-radius:20px;

    @media ${device.laptop}{
        margin-bottom:40px;
	}

	${({ isActive }) => isActive && `
		transform: scale(1.1);
    `}

    @media ${device.mobileSmall} {
        ${({ isActive }) => isActive && `
            transform: scale(1.05);
        `}
	}
`

const WorkCardContent = styled.div`
	width:  100%;
    height: 100%;
	opacity: 0;
	display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
	position: absolute;
    top: 0;
	transition: all 1s ease;
    z-index: -1;
    padding: 1em;

	${({ isActive }) => isActive && `
        opacity: 1;
        z-index: 1;
    `}

	&::before {
		content:"";
		position: absolute;
        border-radius:20px;
		width:  100%;
		height:	100%;
        top:0;
        left:0;
		background-color: ${props => props.theme.colorBG1};
		opacity: 0.7;
	}
`

const ShortDescription = styled.p `
    position: relative;
    font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.3em;
    text-align: center;
`

const ButtonsContainer = styled.div `
    position: relative;
    display: flex;
`

const WorkCard = (props) => {
    const {url, urlCall, projectImage, title, shortDescription, fullDescription, projectImageList, techList, inURL, inURLCall, videoId} = props;
    const [isCardActive, setIsCardActive] = useState(false)
    const [isModalOpen, setisModalOpen] = useState(false)

    let OnCloseModalClick = () => {
        setIsCardActive(false);
        setisModalOpen(false); 
    }

    return (
        <Fragment>
            <WorkCardWrapper>
                    <WorkCardStyle 
                        onMouseEnter={() => setIsCardActive(true)} 
                        onClick={() => setIsCardActive(true)} 
                        isActive={isCardActive}
                        onMouseLeave={() => setIsCardActive(false)} 
                        bgImage= {projectImage}
                    >
                        <WorkCardContent isActive={isCardActive}>
                            <H3 textSize="1.8em" asTitle textAlign="center" textMargin="0px 0 10px">{title}</H3>
                            <ShortDescription>
                                {shortDescription}
                            </ShortDescription>
                            <ListOfTech>
                                {
                                    techList.map((item, idx) => {
                                        return (
                                            <TechItem key={idx}>
                                                {item.name}
                                            </TechItem>
                                        )
                                    })
                                }
                            </ListOfTech>
                            <ButtonsContainer>
                                <MainButton onClick={()=> setisModalOpen(true)}>More Info</MainButton>
                                {
                                    url && <MainButton isExternalLink url={url}>{urlCall}</MainButton>
                                }
                            </ButtonsContainer>
                        </WorkCardContent>

                    </WorkCardStyle>	
                </WorkCardWrapper>
            <ProjectModal
                title={title}
                isActive={isModalOpen} 
                onClickClose={() => OnCloseModalClick()}
                projectImageList={projectImageList}
                fullDescription ={fullDescription}
                url={inURL && inURL}
                urlCall={inURLCall && inURLCall}
                videoId={videoId}
            />
        </Fragment>
    )
}

WorkCard.propTypes = {
    url: PropTypes.string,
    projectImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    shortDescription: PropTypes.string,
    urlCall: PropTypes.string,
    techList: PropTypes.array,
    projectImageList: PropTypes.array
}

WorkCard.defaultProps = {
    url: "https://www.youtube.com/",
    projectImage: "https://dummyimage.com/500x500/fff/aaa",
    urlCall: "Project Link",
    techList: ["test", "test2"]
}
export default WorkCard;
