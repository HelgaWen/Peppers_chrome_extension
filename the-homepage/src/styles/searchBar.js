import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  ${'' /* position:relative; */}
  margin: 20px 0;
  width: 70%;  
  border: 1px solid black;
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
  border: 1px solid black;
  border-top: 0;
  margin-left: -13px;
  margin-top:13px;
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
  width:100px;
  height:50px;
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