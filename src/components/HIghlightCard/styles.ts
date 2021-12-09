import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IconProps {
  type: "total" | "down" | "up";
}

export const Container = styled.View<IconProps>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 8px;
  padding: ${RFValue(18)}px ${RFValue(24)}px ${RFValue(42)}px;
  margin: 0 ${RFValue(8)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<IconProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(40)}px;
  ${(props) => props.type === "up" && `color: ${props.theme.colors.success}`};
  ${(props) =>
    props.type === "down" && `color: ${props.theme.colors.attention}`};
  ${(props) => props.type === "total" && `color: ${props.theme.colors.shape}`};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<IconProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 32px;
`;

export const LastTransaction = styled.Text<IconProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;
