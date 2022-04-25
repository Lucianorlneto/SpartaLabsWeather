import React, { useContext, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { color } from 'react-native-reanimated';

import ConfigContext from '../../context/config';

// import { Container } from './styles';
import colors from '../../utils/styles/colors';

const Configurations: React.FC = () => {
  const [unit, setUnit] = useState(0);

  const { currentUnit, changeUnit } = useContext(ConfigContext);

  useEffect(() => {
    setUnit(currentUnit);
  }, []);

  useEffect(() => {
    changeUnit(unit);
  }, [unit]);

  return (
    <View style={{ margin: 24 }}>
      <Text style={{ padding: 4, fontSize: 18, color: colors.BLACK_60_87 }}>Alternar unidade de temperatura:</Text>
      <Picker
        selectedValue={unit}
        onValueChange={(itemValue: number) => {
          setUnit(itemValue);
        }}
      >
        <Picker.Item key={0} label="Celsius °C" value={0} />
        <Picker.Item key={1} label="Fahrenheit °F" value={1} />
      </Picker>
    </View>
  );
};

export default Configurations;
