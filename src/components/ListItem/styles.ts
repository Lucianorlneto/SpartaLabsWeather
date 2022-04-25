import styled from 'styled-components/native';
import colors from '../../utils/styles/colors';

export const ContainerButton = styled.TouchableOpacity``;

export const Container = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
  height: 130px;
  border-radius: 6px;
  background-color: white;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  elevation: 3;
`;

export const NamesContainer = styled.View`
  height: 55px;
  width: 197px;
  margin-bottom: 8px;
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

export const WeatherDescription = styled.Text`
  color: #f28200;
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 20px;
  margin-bottom: 2px;
`;

export const WeatherRange = styled.Text`
  color: ${colors.BLACK_60_87};
  letter-spacing: 0.4px;
  line-height: 16px;
  font-size: 12px;
`;

export const WeatherTemp = styled.Text`
  color: #f28200;
  font-size: 34px;
  letter-spacing: 0.25px;
  margin-top: 8px;
  margin-bottom: 11px;
  text-align: center;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const FavoriteButton = styled.TouchableOpacity``;
