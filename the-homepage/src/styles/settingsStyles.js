import styled, { css } from 'styled-components'
import settings from '../styles/images/settings.png';

const SettingsContainer = styled.div`
background-color: ${props => props.theme.themeBackground};
position: absolute;
top: 12%;
left: 3%;
display:flex;
justify-content: center;
box-shadow: 0 2px 6px ${props => props.theme.boxShadow};
border-radius: 7px;

${props => props.background && css`
  background-color: ${props => props.background};
`}
`;

const SettingsImage = styled.div`
content: "";
box-sizing: border-box;
width:40px;
height:40px;
margin: 5px;
padding:5px;
background-image: url(${settings});
background-repeat: no-repeat;
object-fit:cover; 
`;

export {
    SettingsContainer,
    SettingsImage
}