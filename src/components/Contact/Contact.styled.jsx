import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  min-height: 100vh;
`;

export const ContactHero = styled.div`
  position: relative;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  overflow: hidden;
`;

export const ContactHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.05;
`;

export const ContactForm = styled.form`
  width: 80%;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-flow: column;
  gap: 1.25rem;
  textarea {
    resize: none;
    min-height: 200px;
    color: #999999;
    outline: none;
    border: 0.5px solid #c5c5c5;
    padding: 1rem;
    &::placeholder {
      color: #999999;
    }
  }
`;

export const ContactInput = styled.input`
  color: #999999;
  height: 2.25rem;
  border: 0.5px solid #c5c5c5;
  border-radius: 5px;
  outline: none;
  width: 100%;
  padding-left: 1rem;
  background-color: transparent;
  &::placeholder {
    color: #999999;
  }
`;

export const ContactButton = styled.button`
  background-color: transparent;
  border: 0.5px solid #c5c5c5;
  border-radius: 5px;
  width: max-content;
  color: #999999;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
export const ContactLinks = styled.a`
  color: #c5c5c5;
  text-decoration: none;
`;
