import {View, Text, ViewStyle, StyleProp} from 'react-native';
import React, {FC} from 'react';

interface HStackProps {
  children: React.ReactNode;
  gap: number;
  style?: StyleProp<ViewStyle>;
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}
const HStack: FC<HStackProps> = ({justifyContent, children, gap, style}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: Number(gap),
        justifyContent: `${justifyContent}`,
        ...(style as [ViewStyle]),
      }}>
      {children}
    </View>
  );
};

export default HStack;
