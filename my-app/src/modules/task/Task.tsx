import type { FC } from "react";
import styled from "styled-components";
import Cross from "../../assets/cross.svg";

const Backgrounds = styled.div`
  background-color: #e8d15b;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  font-size: 28px;
  padding: 8px;
`;

const Text = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
`;
const CompletedText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
  text-decoration: line-through;
`;

const CheckboxWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const StyledCheckbox = styled.span<{ checked?: boolean }>`
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 6px;
  border: 2px solid #c2ac36;
  background-color: ${({ checked }) =>
    checked ? "rgba(50,50,50,0.91)" : "rgba(62,54,54,0.86)"};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ checked }) => (checked ? "0 0 6px #c2ac36" : "none")};

  &::after {
    content: "";
    width: 12px;
    height: 24px;
    border-right: 2px solid #fdab02;
    border-bottom: 2px solid #fdab02;
    transform: ${({ checked }) =>
      checked ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0)"};
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: ${({ checked }) =>
      checked ? "rgba(14, 14, 14, 0.86);" : "rgba(14, 14, 14, 0.86);"};
  }
`;

const DeleteButton = styled.button`
  width: 2vw;
  height: 2vw;

  &:hover {
    transition: scale 0.3s;
    scale: 1.2;
  }
`;

type TaskProps = {
  value: string;
  checked: boolean;
  deleteHandle: () => void;
  checkBoxHandle: () => void;
};

export const Task: FC<TaskProps> = ({
  value,
  checked,
  deleteHandle,
  checkBoxHandle,
}) => {
  return (
    <Backgrounds>
      <CheckboxWrapper>
        <HiddenCheckbox checked={checked} onChange={checkBoxHandle} />
        <StyledCheckbox checked={checked} onChange={checkBoxHandle} />
      </CheckboxWrapper>
      {!checked ? <Text>{value}</Text> : <CompletedText>{value}</CompletedText>}
      <DeleteButton onClick={deleteHandle}>
        <img src={Cross} alt={"cross"} />
      </DeleteButton>
    </Backgrounds>
  );
};
