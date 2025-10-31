import { type FC, useState } from "react";
import { Button } from "../../modules/button/Button.tsx";
import styled from "styled-components";
import type { Switch } from "../../types.ts";
const Background = styled.div`
  display: flex;
  justify-content: space-between; /* элементы по горизонтали */
  width: 50vw;
  height: max-content;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2vh;
`;

type PanelProps = {
  handleSwitch: (value: Switch) => void;
  clearHandler: () => void;
};

export const Panel: FC<PanelProps> = ({ handleSwitch, clearHandler }) => {
  const [active, setActive] = useState<Switch>("All");

  return (
    <Background>
      <Group>
        <Button
          onClick={() => {
            handleSwitch("All");
            setActive("All");
          }}
          active={active === "All"}
        >
          Все
        </Button>
        <Button
          onClick={() => {
            handleSwitch("Unchecked");
            setActive("Unchecked");
          }}
          active={active === "Unchecked"}
        >
          Незавершенные
        </Button>
        <Button
          onClick={() => {
            handleSwitch("Checked");
            setActive("Checked");
          }}
          active={active === "Checked"}
        >
          Завершенные
        </Button>
      </Group>
      <Group>
        <Button onClick={() => clearHandler()}>Очистить</Button>
      </Group>
    </Background>
  );
};
