import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { Text, View, SectionList } from 'react-native-original-style';
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function App() {
  return (
    <SafeAreaView>
      <View p-20>
        <Text size-20 color-success>
          20
        </Text>
      </View>
      <SectionList
        sections={DATA}
        pagingEnabled
        footer-bg-color-primary
        header-bg-color-primary
        renderSectionHeader={({ section: { title } }) => (
          <Text size-20>{title}</Text>
        )}
        outer-bg-color-gray
        outer-p-120
        bg-color-success
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </SafeAreaView>
  );
}
