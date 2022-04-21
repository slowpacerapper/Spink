import styled from "styled-components";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsMailbox, BsGithub } from "react-icons/bs";
import { FiPhoneIncoming } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #232323;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding: 4rem 0;
  padding-bottom: 0;
  /* border: 4px solid blue; */
`;

export const FooterContent = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

export const CopyrightSocialsContainer = styled.div`
  border-top: 0.5px solid #dddddd;
`;

export const SocialsContent = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Copyright = styled.p`
  color: #aaaaaa;
  font-weight: 300;
`;

export const Socials = styled.div`
  display: flex;
  min-width: 300px;
  gap: 1.5rem;
  align-items: center;
`;

export const SocialsImage = styled.a`
  font-weight: 300;
  text-decoration: none;
  color: #aaaaaa;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const FooterGridContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

export const GridHeader = styled.h4`
  font-size: 18px;
  margin-bottom: 0.8rem;
  color: white;
  font-weight: 400;
  /* text-align: center; */
`;

export const GridList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  li {
    display: flex;
    gap: 1rem;
    font-weight: 300;
    color: #aaaaaa;
    align-items: center;
  }
`;

export const GridLinks = styled.a`
  text-decoration: none;
  color: #aaaaaa;
  font-size: 16px;
  font-weight: 300;
  transition: all 0.3s ease;
  &:hover {
    color: #cccccc;
    transform: scale(0.99);
  }
`;

export const GridParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: #aaaaaa;
`;

export const Location = styled(MdOutlineLocationOn)``;
export const Mail = styled(BsMailbox)``;
export const Phone = styled(FiPhoneIncoming)``;
export const GitIcon = styled(BsGithub)``;
export const Linkedin = styled(TiSocialLinkedin)`
  font-size: 24px;
`;
export const Facebbok = styled(FaFacebookF)``;
export const Instagram = styled(FaInstagram)``;
