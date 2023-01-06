import { useState } from "react";
import { Alert, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Card } from "../../components/Card/Card";
import { EmptyList } from "../../components/EmptyList/EmptyList";
import { booleanToNumber } from "../../utils/booleanToNumber";
import {
  Banner,
  Button,
  Container,
  Content,
  Header,
  InfoItem,
  InfoLabel,
  InfoValue,
  Input,
  InputWrapper,
  ListContainer,
} from "./styles";

type Task = {
  id: number;
  description: string;
  finished: boolean;
};

export const Home = () => {
  const [inputActive, setInputActive] = useState(false);

  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (description: string) => {
    if (!newTaskDescription) return;

    const newTask = { id: Date.now(), finished: false, description };

    setNewTaskDescription("");

    setTasks((state) => [newTask, ...state]);
  };
  const handleCheckTask = (task: Task) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) return { ...item, finished: !item.finished };

      return item;
    });

    setTasks(
      updatedTasks.sort(
        (a, b) => booleanToNumber(a.finished) - booleanToNumber(b.finished)
      )
    );
  };
  const handleRemoveTask = (task: Task) => {
    Alert.alert(
      "Remover tarefa",
      "Tem certeza que deseja remover essa tarefa?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            const remainingTasks = tasks.filter((item) => item.id !== task.id);

            setTasks(remainingTasks);
          },
        },
      ]
    );
  };

  return (
    <Container>
      <Banner>
        <Image source={require("../../../assets/logo.png")} />
      </Banner>

      <Content>
        <InputWrapper>
          <Input
            placeholder="Adicione uma nova tarefa"
            onFocus={() => setInputActive(true)}
            onBlur={() => setInputActive(false)}
            value={newTaskDescription}
            onChangeText={(event) => setNewTaskDescription(event)}
            active={inputActive}
          />
          <Button>
            <Icon
              name="pluscircleo"
              size={16}
              color="#F2F2F2"
              onPress={() => handleAddTask(newTaskDescription)}
            />
          </Button>
        </InputWrapper>

        <ListContainer>
          <Header listIsEmpty={tasks.length == 0}>
            <InfoItem>
              <InfoLabel color="#4EA8DE">Criadas</InfoLabel>
              <InfoValue>{tasks.length}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel color="#8284FA">Concluídas</InfoLabel>
              <InfoValue>
                {tasks.filter((item) => item.finished).length}
              </InfoValue>
            </InfoItem>
          </Header>

          <FlatList
            data={tasks}
            ListEmptyComponent={EmptyList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => (
              <Card
                key={String(item.id)}
                isChecked={item.finished}
                description={item.description}
                onCheck={() => handleCheckTask(item)}
                onRemove={() => handleRemoveTask(item)}
                style={{ marginBottom: index !== tasks.length - 1 ? 8 : 32 }}
              />
            )}
          />
        </ListContainer>
      </Content>
    </Container>
  );
};
