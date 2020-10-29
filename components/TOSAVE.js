
// const SkillItem = styled(motion.li) `
//     width:45%;
//     display: flex;
//     align-items: center;
//     text-transform: capitalize;
//     overflow: hidden;
//     margin: 2em 0!important;
//     &:hover span{
//         opacity:1;
//     }
// `
// const ProgressBar = styled.div`
//     display:block;
//     position:relative;
//     margin-left: 10px;
//     width:80%;
//     height:2em;
//     border-radius: 20px;
//     border: 3px solid ${props => props.theme.colorTerciary};
// `

// const ProgressBarFill = styled.div`
//     position:absolute;
//     height:100%;
//     animation-name: ${props => fillBar(props.percentage)};
//     animation-duration: 1s;
//     width: ${props => props.percentage}%;
//     background-color: ${props =>  props.theme.colorTerciary};
//     border-radius: 20px;
// `

// const SkillName = styled.span`
//     position:absolute;
//     font-size: 1.5em;
//     z-index: 100;
//     top:50%;
//     left:50%;
//     transform:translate(-50%, -50%);
//     opacity: 0;
//     transition: opacity 0.3s linear;
// `
// const TabContainer = styled(motion.div)`
//     overflow: hidden;
//     width: 40vw;
//     border: 1px solid ${props => props.theme.colorPrimary};
//     border-radius: 15px;
// `;

// const SkillList = styled(List)`
//     background-color: ${props => props.theme.colorBG2};
//     padding:0 2em;
//     height: 100%;
//     margin:0;
// `
                    {/* <AccordionList layout initial={{ borderRadius: 25 }}>
                        {items.map((item) => (
                            <AccordionItem Title={"Web"} layout key={item} IconName={simpleIcons.ReactLogo}>
                                <List alignment={"space-between"}>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                    <SkillItem>
                                        <Icon hasHover={false} hasMargin isActive={false} Icon ={simpleIcons.Javascript} size="2"  iconMargin={"0 10px 0 0"}/>
                                        <ProgressBar>
                                                <SkillName>javascript</SkillName>
                                                <ProgressBarFill percentage="50"/> 
                                        </ProgressBar>
                                    </SkillItem>
                                </List>
                                
                            </AccordionItem>
                        ))}
                    </AccordionList> */}

const fillBar = (percentage) => keyframes`
	0% {
		width: 0;
	}
	100% {
		width: ${percentage}%;
	}
`;
