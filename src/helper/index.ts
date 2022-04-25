import { daysOfTheWeek } from './constants';

export function firstLetterUpperCase(sentence: string) {
  const words = sentence.split(' ');

  return words.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
}

export function epochToDate(dt: number) {
  const date = new Date(dt * 1000);

  //   return date.toLocaleDateString('pt-BR');
  return {
    day: daysOfTheWeek[date.getDay()].pt,
    date: date.toLocaleDateString('pt-BR'),
  };
}
