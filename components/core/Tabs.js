import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled,  { keyframes } from 'styled-components';
import Tab from './Tab';

const changeSize = (initial, final) => keyframes`
	0% {
		width: ${initial}px;
	}
	100% {
		width: ${final}px;
	}
`;

const TabsWrapper = styled.ul`
    display:flex;
    justify-content: space-around;
    border-bottom: 2px solid ${props => props.theme.colorPrimary};
`

const TabsContent = styled.div`
    
`

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    
    useEffect(() => {
        
    }, []);

    return (
        <>
            <TabsWrapper>
                {children.map(child => {
                    const { label, IconTab } = child.props;

                    return (
                        <Tab 
                            key={label}
                            label={label}
                            isActive={activeTab}
                            onClick={() => setActiveTab(label)}
                            IconTab={IconTab}
                        />
                    )
                })}
            </TabsWrapper>
            <TabsContent>
                {children.map(child => {
                    if (child.props.label !== activeTab) return undefined;

                    return child.props.children;
                })}
            </TabsContent>
        </>
    )
}

Tabs.propTypes = {

}

export default Tabs;
