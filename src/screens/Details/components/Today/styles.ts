import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: space-around;
    align-items: center;
    margin: 16px 24px 16px 24px;
`;

export const Hoje = styled.Text`
    color: white;
    font-size: 34px;
`;

export const IconContainer = styled.View`
    height: 125px;
    width: 125px;
    align-items: center;
    justify-content: center;
`;

export const InfoContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ExtraInfoContainer = styled.View`
    justify-content: center;
`;

export const ExtraInfoLabel = styled.Text`
    color: white;
    text-align: center;
`;

export const ExtraInfoValue = styled.Text`
    color: white;
    text-align: center;
    font-size: 16px;
`;

export const WeatherContainer = styled.View`
    flex: 1;
    align-items: center;
`;

export const WeatherDesciption = styled.Text`
    color: white;
    font-size: 20px;
`;

export const WeatherTemp = styled.Text`
    color: white;
    font-size: 44px;
`;
