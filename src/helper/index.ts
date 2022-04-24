export default function firstLetterUpperCase(sentence: string) {
  const words = sentence.split(' ');

  return words.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
}
