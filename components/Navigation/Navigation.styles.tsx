import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint } from "../../utilities/mediaHelpers";

interface IHamburgerProps {
  isOpen: boolean;
}

export const Header = styled.header`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  opacity: 1;
  background: ${prop("theme.color.black")};
  ${breakPoint.down("sm")} {
    justify-content: flex-end;
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

export const Hamburger = styled.div<IHamburgerProps>`
  display: none;
  ${breakPoint.down("sm")} {
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 40px;
    width: 20px;
    height: 20px;
    display: grid;
    row-gap: 5px;
    justify-content: center;
    align-content: space-evenly;
  }
  div:nth-child(1) {
    transition: all 0.5s ease-in-out;
    ${(props) =>
      props.isOpen
        ? `transform: rotate(45deg); 
        position: absolute; 
        top: 10px;
        left: 0;`
        : ``}
  }
  div:nth-child(2) {
    transition: all 0.2s ease-in-out;
    ${(props) =>
      props.isOpen ? `transform: translateX(-10px); height: 0;` : ``}
  }
  div:nth-child(3) {
    transition: all 0.5s ease-in-out;
    ${(props) =>
      props.isOpen
        ? `transform: rotate(-45deg);
        position: absolute; 
        top: 10px; 
        left: 0;`
        : ``}
  }
  ${breakPoint.down("xs")} {
    right: 20px;
  }
`;

export const Line = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${prop("theme.color.orangePeel")};
`;

export const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  overflow: hidden;
  z-index: 5;
  ${breakPoint.down("md")} {
    justify-content: center;
    gap: 10px;
  }
  ${breakPoint.down("sm")} {
    flex-direction: column;
    align-items: flex-end;
    row-gap: 30px;
  }
`;

export const MenuListItem = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${prop("theme.color.white")};
  cursor: pointer;
  ${breakPoint.down("md")} {
    font-size: 14px;
    line-height: 19px;
  }
  ${breakPoint.down("sm")} {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
  }
`;
export const LogoWrapper = styled.div`
  ${breakPoint.down("sm")} {
    max-width: 370px;
    margin: auto;
  }
`;
export const Logo = styled.div`
  ${breakPoint.down("md")} {
    width: 150px;
    height: 40px;
    justify-self: end;
  }
`;
export const NavigationItemWrrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  ${breakPoint.down("md")} {
    grid-template-columns: 150px 0.5fr 2fr;
    padding: 0 20px;
    gap: 10px;
  }
  ${breakPoint.down("sm")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const NavigationMenuWrapper = styled.div<IHamburgerProps>`
  display: flex;
  gap: 30px;
  align-items: center;
  ${breakPoint.down("md")} {
    gap: 10px;
  }
  ${breakPoint.down("sm")} {
    position: fixed;
    top: 70px;
    width: 100%;
    height: 270px;
    background: black;
    padding: 20px 30px 0 0;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;
    z-index: 5;
    transition: all 0.5s ease-in-out;
    ${(props) => (props.isOpen ? "" : "transform: translateX(100%)")}
  }
`;

export const Address = styled.address`
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakPoint.down("xs")} {
    justify-content: flex-start;
  }
`;

export const Phone = styled.a`
  font-size: 14px;
  font-weight: 600;
  margin-left: 3px;
  color: ${prop("theme.color.white")};

  ${breakPoint.down("sm")} {
    font-size: 12px;
  }
`;
