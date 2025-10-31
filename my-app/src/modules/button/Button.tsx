import styled from "styled-components";

export const Button = styled.button<{ active?: boolean }>`
  background: ${({ active }) =>
    active
      ? "linear-gradient(1deg, #b5d76e, #e0b94c)"
      : "linear-gradient(145deg, #f5d76e, #e0b94c)"};
  color: #2b241a;
  font-weight: 600;
  font-size: 0.8vw;
  width: 8vw;
  min-width: max-content;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  box-shadow:
    2px 2px 6px rgba(0, 0, 0, 0.4),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      3px 3px 8px rgba(0, 0, 0, 0.5),
      inset 0 1px 3px rgba(255, 255, 255, 0.4);
  }
`;
