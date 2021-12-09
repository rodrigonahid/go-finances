import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(10)}px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(16)}px;
`;
