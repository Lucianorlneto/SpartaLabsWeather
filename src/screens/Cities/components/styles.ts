import styled from 'styled-components/native';
import colors from '../../../utils/styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 140px 16px 140px 16px;
`;

export const Text1 = styled.Text`
    color: ${colors.BLACK_60_87};
    font-size: 22px;
    text-align: center;
    margin-bottom: 16px;
    margin-left: 14px;
    margin-right: 14px;
    letter-spacing: 0.25px;
`;

export const Text2 = styled.Text`
    color: ${colors.BLACK_60};
    font-size: 18px;
    text-align: center;
    margin-bottom: 16px;
`;
