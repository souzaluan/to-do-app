import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #262626;

  padding: 12px 8px;

  border-radius: 8px;
  border: 1px solid #333333;
`;

type TaskDescriptionProps = {
  checked: boolean;
};

export const TaskDescription = styled.Text<TaskDescriptionProps>`
  flex: 1;

  padding: 0 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #f2f2f2;

  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
