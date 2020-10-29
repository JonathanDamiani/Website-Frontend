import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {H3, MainButton} from '../';

const WorkCardStyle = styled.div`
	width:  30em;
	height:	30em;
	background-color: ${props => props.theme.colorBG3};
    background-image: url(${props => props.bgImage});
	background-repeat: no-repeat;
	background-position: center;
	transition: all 0.2s ease;
    border-radius:20px;

	${({ isActive }) => isActive && `
		transform: scale(1.1);
    `}
`

const WorkCardContent = styled.div`
	width:  100%;
	height:	100%;
    padding:1.3em;
	opacity: 0;
	display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
	position: relative;
	transition: all 1s ease;
    z-index: -1;

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

const ListOfTech = styled.ul `
    position: relative;
    display: flex;
    z-index: 10;
` 

const TechItem = styled.li `
    font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.3em;
    margin-right: 10px;
    background-color: ${props => props.theme.colorPrimary};
`
const ShortDescription = styled.p `
    position: relative;
    font-family: 'Source Code Pro', Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.3em;
    text-align: center;
`

const ButtonsContainer = styled.div `
    position: relative;
    display: flex;
`

const WorkCard = (props) => {
    const {url, urlCall, projectImage, title, shortDescription, fullDescription, techList} = props;
    const [isCardActive, setIsCardActive] = useState(false)

    return (
        <WorkCardStyle 
            onMouseEnter={() => setIsCardActive(true)} 
            onClick={() => setIsCardActive(true)} isActive={isCardActive}
            onMouseLeave={() => setIsCardActive(false)}
            bgImage= {projectImage}
        >
            <WorkCardContent isActive={isCardActive}>
                <H3>{title}</H3>
                <ShortDescription>
                    {shortDescription}
                </ShortDescription>
                <ListOfTech>
                    {
                        techList.map((item, idx) => {
                            return (
                                <TechItem key={idx}>
                                    {item}
                                </TechItem>
                            )
                        })
                    }
    
                </ListOfTech>
                <ButtonsContainer>
                    <MainButton>More Info</MainButton>
                    {
                        url && <MainButton isExternalLink url={url}>{urlCall}</MainButton>
                    }
                </ButtonsContainer>
            </WorkCardContent>
        </WorkCardStyle>	
    )
}

WorkCard.propTypes = {
    url: PropTypes.string,
    projectImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    shortDescription: PropTypes.string,
    urlCall: PropTypes.string,
    techList: PropTypes.array
}

WorkCard.defaultProps = {
    url: "https://www.youtube.com/",
    projectImage: "https://www.placecage.com/500/500",
    urlCall: "Project Link",
    techList: ["test", "test2"]
}
export default WorkCard;
