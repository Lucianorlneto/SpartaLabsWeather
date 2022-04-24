import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';

// import { Container } from './styles';

const FadeInView: React.FC = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      },
    ).start();
  }, [fadeAnim]);

  return <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>{children}</Animated.View>;
};

export default FadeInView;
