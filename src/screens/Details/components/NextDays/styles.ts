import styled from 'styled-components/native';
import colors from '../../../../utils/styles/colors';

export const Container = styled.View`
    margin: 8px;
`;

export const DayContainer = styled.View`
    flex-direction: row;
    elevation: 3;
    align-items: center;
    padding: 4px;
    justify-content: space-between;
    background-color: ${colors.AZURE_20};
    padding-left: 8px;
    padding-right: 8px;
`;

export const DateDayContainer = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const DateText = styled.Text`
    color: white;
    margin-right: 4px;
`;

export const DayText = styled.Text`
    color: white;
    margin-left: 4px;
`;

export const WeatherDescriptionContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: center;
`;

export const WeatherDesciptionText = styled.Text`
    color: white;
`;

export const WeatherTempContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IconTempContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const TempText = styled.Text`
    color: white;
`;
