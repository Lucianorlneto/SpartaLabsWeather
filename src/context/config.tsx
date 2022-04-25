import React, { createContext, useEffect, useState } from 'react';

import { updateConfig, getConfig } from '../database/SQLite';

interface ConfigContextData{
    currentUnit: number;
    changeUnit: (value: number) => void;
}

const ConfigContext = createContext<ConfigContextData>({} as ConfigContextData);

export const ConfigProvider: React.FC<any> = ({ children }) => {
  const [currentUnit, setCurrentUnit] = useState(0);

  useEffect(() => {
    getConfig().then((data) => {
      setCurrentUnit(data.unit);
    });
  }, []);

  function changeUnit(value: number) {
    updateConfig(value).then(() => {
      setCurrentUnit(value);
    });
  }

  return (
    <ConfigContext.Provider value={{ currentUnit, changeUnit }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContext;
