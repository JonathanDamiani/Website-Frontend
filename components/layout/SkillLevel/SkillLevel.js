import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkillLevelContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 12em;
`

const SkillLevelItem = styled.div `
    width: 2.3em;
    height: 2.3em;
    background-color: ${props => props.isFilled && props.theme.colorPrimary};
    border: 3px solid ${props => props.theme.colorPrimary};;
    border-radius: 5px;
`

const SkillLevel = ({Level}) => { 
    let levels = [];

    if (Level == 1)
    {
        levels = [true, false, false, false]
    } 
    else if (Level == 2) 
    {
        levels = [true, true, false, false]
    }
    else if (Level == 3){
        levels = [true, true, true, false]
    }
    else if (Level == 4)
    {
        levels = [true, true, true, true]
    }

    return (
        <SkillLevelContainer>
            {levels.map((item, idx) => {
                return <SkillLevelItem key={idx} isFilled={item}/>
            })}
        </SkillLevelContainer>
    )
}

export default SkillLevel;