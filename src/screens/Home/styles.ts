import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1a1a1a;
`;

export const Banner = styled.View`
  align-items: center;

  padding-top: 70px;
  padding-bottom: 70px;

  background-color: #0d0d0d;
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: -26px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  height: 52px;

  flex-direction: row;
  align-items: center;
`;

type InputProps = {
  active: boolean;
};

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#808080",
})<InputProps>`
  height: 100%;

  flex: 1;

  padding: 16px;
  margin-right: 4px;

  border-radius: 8px;
  border: 1px solid ${(props) => (props.active ? "#5E60CE" : "#0d0d0d")};
  background-color: #262626;
  color: #f2f2f2;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 52px;
  height: 52px;

  align-items: center;
  justify-content: center;

  background-color: #1e6f9f;
  border-radius: 8px;
`;

export const ListContainer = styled.View`
  height: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
`;

type HeaderProps = {
  listIsEmpty: boolean;
};

export const Header = styled.View<HeaderProps>`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 20px;

  border-bottom-width: ${(props) => (props.listIsEmpty ? "1px" : "0px")};
  border-bottom-color: #333;
`;

export const InfoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

type InfoLabelProps = {
  color: string;
};

export const InfoLabel = styled.Text<InfoLabelProps>`
  margin-right: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const InfoValue = styled.Text`
  justify-content: center;
  align-items: center;

  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 700;
  color: #d9d9d9;

  background-color: #333333;
`;
