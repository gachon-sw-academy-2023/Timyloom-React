import styled from 'styled-components';

export const StyledHeader = styled.header<{ ScrollActive: boolean }>`
  z-index: 9999;
  position: sticky;
  top: ${(props) => (props.ScrollActive ? '10px' : '0px')};
  background-color: ${(props) => (props.ScrollActive ? '#456085' : '#ccc1be')};
  padding: 15px 50px 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7%;
  box-sizing: border-box;
  border-radius: ${(props) => (props.ScrollActive ? '50px' : '0px')};
  margin: ${(props) => (props.ScrollActive ? '0 5%' : '0px')};
  .nav_logo {
    display: flex;
    padding: 12px 10px 5px;
    height: 7%;
    box-sizing: border-box;

    .nav-logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 24px;
      color: ${(props) => (props.ScrollActive ? '#ffffff' : 'black')};
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
  transition: all 300ms ease-in;
`;

export const NavMenu = styled.ul<{ isToggleOpen: boolean }>`
  list-style: none;
  display: flex;
  margin: 0 15px;
  padding: 0;

  li {
    border-radius: 10px;
    margin: 0 5px;
    border: 3px solid white;
    &:hover {
      cursor: pointer;
      border-radius: 20px;
    }
    transition: all 100ms ease-in;
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? 'block' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

export const NameBox = styled.div<{ ScrollActive: boolean }>`
  font-size: 1.3rem;
  color: ${(props) => props.ScrollActive === true && 'white'};
  &:hover {
    cursor: pointer;
    color: #f38704;
  }
`;
