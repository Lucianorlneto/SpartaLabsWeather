import styled from 'styled-components/native';
import colors from '../../utils/styles/colors';

export const Container = styled.View`
    margin-top: 8px;
    margin-bottom: 8px;
    height: 130px;
    border-radius: 6px;
    background-color: white;
    elevation: 3;
    padding: 16px;
    justify-content: space-between;
`;

export const NamesContainer = styled.View`
  height: 55px;
  width: 197px;
  margin-bottom: 16px;
`;

export const CityName = styled.Text`
  color: ${colors.BLACK_60_87};
  font-size: 24px;
  letter-spacing: 0px;
`;

export const CountryName = styled.Text`
  color: ${colors.BLACK_60_87};
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 20px;
`;

export const TextButton = styled.Text`
    color: ${colors.AZURE};
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-align: center;
`;
