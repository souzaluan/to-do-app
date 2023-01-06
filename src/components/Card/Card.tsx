import { useState } from "react";
import { Image, TouchableOpacity, ViewProps } from "react-native";
import { Container, TaskDescription } from "./Card.style";

interface Props extends ViewProps {
  description: string;
  isChecked: boolean;
  onCheck: () => void;
  onRemove: () => void;
}

export const Card = (props: Props) => {
  const { description, isChecked, onCheck, onRemove, ...rest } = props;

  return (
    <Container {...rest}>
      <TouchableOpacity onPress={onCheck}>
        {isChecked ? (
          <Image
            style={{ width: 24, height: 24 }}
            source={require(`../../../assets/checked.png`)}
          />
        ) : (
          <Image
            style={{ width: 24, height: 24 }}
            source={require(`../../../assets/check.png`)}
          />
        )}
      </TouchableOpacity>
      <TaskDescription checked={isChecked}>{description}</TaskDescription>
      <TouchableOpacity onPress={onRemove}>
        <Image
          style={{ width: 32, height: 32 }}
          source={require("../../../assets/trash.png")}
        />
      </TouchableOpacity>
    </Container>
  );
};
