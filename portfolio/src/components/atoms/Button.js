import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Button;
