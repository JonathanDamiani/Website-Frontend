import React from 'react'
import Particles from 'react-particles-js';
import styled, {withTheme} from 'styled-components';

const ParticlesStyled = styled(Particles)`
    width:100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    z-index:0;
`
const SpaceParticles = (props) =>{
    return (
        <ParticlesStyled
            params={{
                "particles": {
                    "number": {
                        "value": 120,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "size": {
                        "value": 50,
                        "random": true
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.1,
                        "distance": 200,
                        "color": props.theme.colorSecondary
                    },
                    "move": {
                        "speed": 2,
                        "random": true
                    },
                    "size": {
                        "value": 1
                    },
                    "color": {
                        "value": props.theme.colorPrimary
                    },
                    "stroke": {
                        "width": 3,
                        "color": props.theme.colorPrimary
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 1
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onHover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onClick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "grab": {
                            "distance" : 200
                        },
                        "repulse": {
                            "distance" : 100
                        }
                    }
                },
                "retina_detect": true
            }} />
    )
}

export default withTheme(SpaceParticles);