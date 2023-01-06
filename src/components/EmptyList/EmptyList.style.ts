import styled from "styled-components/native";

export const EmptyListContainer = styled.View`
  align-items: center;

  padding: 48px 20px;
`;

type EmptyListTextProps = {
  type: "title" | "paragraph";
};

export const EmptyListText = styled.Text<EmptyListTextProps>`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #808080;

  font-weight: ${(props) => (props.type === "title" ? 700 : 400)};
`;
