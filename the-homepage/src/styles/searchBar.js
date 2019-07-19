import styled, { css } from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  ${'' /* position:relative; */}
  margin: 20px 0;
  padding:5px;
  width: 70%;  
  ${'' /* border: 1px solid black; */}
  border-radius: 7px;
  box-shadow: 2px 2px 7px black;
`;

const SearchButton = styled.button`
  border:none;
  outline:none;
  width: 100%;
  background-color: transparent;
  color: black;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`;

const SearchInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  outline: none;
  background-color: transparent;
  border: 0 solid;
  height: 85%;
  overflow: hidden;
  max-width: 100%;
  float: left;
`;

const SearchEngine = styled.div`
  width: 100%;
  background-color: transparent;
  outline: none;
  border:none;
  border-right: 1px solid black;
  position: relative;

  &:hover {
    > div {
      display: flex;
      flex-direction: column;
    }
  }
  
`;

const SearchDropdown = styled.div`
  position: absolute;
  width: 30%;
  background-color: white;
  ${'' /* border: 1px solid black; */}
  box-shadow: 0 2px 7px black;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-left: -4px;
  margin-top:5px;
  min-width: 160px;
  display: none;

  &:not( :hover ) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  ${'' /* position: relative; */}
  display: flex;
  flex-direction:column;
`;

const EngineImage = styled.img`
  width:100%;
  height:100%;
  background-repeat: no-repeat;
  object-fit:cover;
`;

const SearchEngineContainer = styled.div`
  width:150px;
  height:50px;
  background-repeat: no-repeat;
  object-fit:fit;
`;

export {
  SearchWrapper,
  SearchEngine,
  SearchInput,
  SearchDropdown,
  SearchButton,
  DropdownContainer,
  EngineImage,
  SearchEngineContainer
}