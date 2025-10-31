import { type ChangeEvent, type FC, useState } from "react";
import styled from "styled-components";
import { Panel } from "../buttons/Panel.tsx";
import type { TaskInterface, Switch } from "../../types.ts";
import { Task } from "../../modules/task/Task.tsx";
import Plus from "../../assets/plus-button.png";
const Label = styled.div`
  font-size: 54px;
  font-weight: bold;
  justify-self: center;
  color: #e8d15b;
  text-shadow: 5px 5px 4px #231717;
`;

const Background = styled.div`
  display: flex;
  margin-top: 10vh;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  border-radius: 15px;
`;
const Input = styled.input`
  width: 45vw;
  height: 3vw;
  border-radius: 10px;
  padding: 0px 10px;
  font-size: 32px;
  background-color: #e8d15b;
`;
const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8vw;
    background: linear-gradient(145deg, #f5d76e, #e0b94c);
    height: 3vw;
    color: #2b241a;
    font-weight: 600;
    font-size: 0.8vw; 
    width: 8vw;
    min-width: max-content;
    border: none;
    border-radius: 10px;
    box-shadow:
            2px 2px 6px rgba(0, 0, 0, 0.4),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease;
    cursor: pointer;

    img {
        max-width: 2vw;
       max-height: 2vh;
    }
    
    &:hover {
        scale: 1.02;
        box-shadow:
                3px 3px 8px rgba(0, 0, 0, 0.5),
                inset 0 1px 3px rgba(255, 255, 255, 0.4);
        background: linear-gradient(145deg, #ffe07a, #e8c259);
`;

const InputBlock = styled.div`
  display: flex;
  gap: 1.8vw;
`;

export const Main: FC = () => {
  const [input, setInput] = useState<string>("");
  const [tasks, addTask] = useState<TaskInterface[]>([]);
  const [filter, switchFilter] = useState<Switch>("All");

  const inputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const clickHandler = (): void => {
    if (input === "") return;
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      value: input,
      checked: false,
    };
    addTask([...tasks, task]);
    setInput("");
  };

  const deleteHandle = (id: number) => {
    addTask((prev) => prev.filter((tasks) => tasks.id !== id));
  };

  const checkBoxHandle = (id: number) => {
    addTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  const handleSwitch = (value: Switch) => {
    switchFilter(value);
  };
  const clearHandler = () => {
    addTask([]);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  return (
    <Background>
      <Label>To Do List</Label>
      <Panel handleSwitch={handleSwitch} clearHandler={clearHandler} />
      <InputBlock>
        <Input
          onChange={inputChange}
          onKeyDown={handleKeyDown}
          value={input}
        ></Input>
        <AddButton onClick={clickHandler}>
          Добавить
          <img src={Plus} alt={"plus image"} />
        </AddButton>
      </InputBlock>
      {filter === "All"
        ? tasks.map((task) => (
            <Task
              key={task.id}
              value={task.value}
              checked={task.checked}
              deleteHandle={() => deleteHandle(task.id)}
              checkBoxHandle={() => checkBoxHandle(task.id)}
            ></Task>
          ))
        : filter === "Checked"
          ? tasks.map((task) => {
              if (task.checked) {
                return (
                  <Task
                    key={task.id}
                    value={task.value}
                    checked={task.checked}
                    deleteHandle={() => deleteHandle(task.id)}
                    checkBoxHandle={() => checkBoxHandle(task.id)}
                  ></Task>
                );
              }
            })
          : tasks.map((task) => {
              if (!task.checked) {
                return (
                  <Task
                    key={task.id}
                    value={task.value}
                    checked={task.checked}
                    deleteHandle={() => deleteHandle(task.id)}
                    checkBoxHandle={() => checkBoxHandle(task.id)}
                  ></Task>
                );
              }
            })}
      ;
    </Background>
  );
};
