import styled, { css } from 'styled-components'
import settings from '../styles/images/settings.png';
import saveSettings from '../styles/images/saveSettings.png';

const SettingsContainer = styled.div`
background-color: ${props => props.theme.themeBackground};
position: absolute;
top: 6%;
left: 3%;
display:flex;
flex-direction:column;
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
background-repeat: no-repeat;
object-fit:cover; 
background-image: url(${settings});

${props => props.isEdit && css`
    background-image: url(${saveSettings})
`};
`;

export {
  SettingsContainer,
  SettingsImage
}