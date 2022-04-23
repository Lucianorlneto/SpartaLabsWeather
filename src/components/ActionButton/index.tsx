import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

interface Props{
  title: string,
  submit: () => void,
}

const ActionButton: React.FC<Props> = ({ title, submit }) => {
  const a = 'a';

  return (
    <TouchableOpacity onPress={() => submit()}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
