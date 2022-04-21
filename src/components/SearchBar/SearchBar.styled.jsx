import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const Label = styled.label`
  display: flex;
  margin: 0 auto;
  width: 70%;
  align-content: center;
  position: relative;
`;

export const Search = styled.input`
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  padding-left: 2.5rem;
  outline: none;
  height: 3rem;
  color: var(--primary-color);
  font-family: inherit;
  font-size: 300;
  &::placeholder {
    color: #b5b5b5;
  }
`;

export const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;
