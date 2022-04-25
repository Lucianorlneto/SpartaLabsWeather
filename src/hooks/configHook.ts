import { useContext } from 'react';
import ConfigContext from '../context/config';

const useConfig = () => {
  const { currentUnit } = useContext(ConfigContext);

  const tempValue = (temp: number) => {
    if (currentUnit === 0) {
      return Math.round(temp);
    }

    return Math.round((temp * 1.8) + 32);
  };

  return { tempValue };
};

export default useConfig;
