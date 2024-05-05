import styled from "styled-components";
const Button = styled.button`
  border-radius: ${(props) => props.borderRadius || "5px"};
  background-color: ${(props) => props.color || "#3498db"};
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  transition: background-color 0.3s ease;

  &:disabled{
    opacity: 0.5;
  }

  &:hover {
    background-color: #2c3e50; 
`;

export default Button;
