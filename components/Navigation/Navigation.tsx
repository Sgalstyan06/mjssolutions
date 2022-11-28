import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import * as Styled from "./Navigation.styles";
import Button from "../Button/Button";
import { ButtonSize } from "../../constants/sizes";
import { useWindowSize } from "../../utilities/hooks";
import { phone } from "../../constants/staticInfo";

interface IMenuItems {
  name: string;
  path: string;
}

const menuitems: Array<IMenuItems> = [
  { name: "Services", path: "#service" },
  { name: "Why Choose Us", path: "#why-choose-us" },
  { name: "Areas served", path: "#areas-serviced" },
];
const Navigation: React.FC<{ isMenuOpen: any }> = ({ isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  isMenuOpen(isOpen);
  const { width } = useWindowSize();

  function menuOpen() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Styled.Header>
      <Styled.Hamburger isOpen={isOpen} onClick={menuOpen}>
        <Styled.Line />
        <Styled.Line />
        <Styled.Line />
      </Styled.Hamburger>
      <Styled.NavigationItemWrrapper>
        <Styled.LogoWrapper>
          <Styled.Logo>
            <Image
              src={`/logo/logo.png`}
              width="240px"
              height="70px"
              alt="MJS solutions logo"
              quality={100}
            />
          </Styled.Logo>
        </Styled.LogoWrapper>
        <Styled.Address>
          <Image
            src="/icons/phone.png"
            width="16px"
            height="16px"
            alt="phone"
          />
          <Styled.Phone href={`tel:${phone}`}> {phone}</Styled.Phone>
        </Styled.Address>
        <Styled.NavigationMenuWrapper isOpen={isOpen}>
          <Styled.MenuList>
            {menuitems?.map((item, index) => {
              return (
                <Styled.MenuListItem key={index} onClick={closeMenu}>
                  <Link href={item.path}>{item.name}</Link>
                </Styled.MenuListItem>
              );
            })}
          </Styled.MenuList>
          <Link href="#contact-us">
            <a onClick={closeMenu}>
              <Button
                child={`Get in touch`}
                size={width && width > 768 ? ButtonSize.LG : ButtonSize.XXL}
              />
            </a>
          </Link>
        </Styled.NavigationMenuWrapper>
      </Styled.NavigationItemWrrapper>
    </Styled.Header>
  );
};

export default Navigation;
