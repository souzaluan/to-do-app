import { Image } from "react-native";
import { EmptyListContainer, EmptyListText } from "./EmptyList.style";

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      <Image
        style={{ marginBottom: 16 }}
        source={require("../../../assets/clipboard.png")}
      />
      <EmptyListText type="title">
        Você ainda não tem tarefas cadastradas
      </EmptyListText>
      <EmptyListText type="paragraph">
        Crie tarefas e organize seus itens a fazer
      </EmptyListText>
    </EmptyListContainer>
  );
};
