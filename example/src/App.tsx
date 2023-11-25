import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { Image, Text, View } from 'react-native-original-style';

export default function App() {
  return (
    <SafeAreaView>
      <View
        flex-1
        row
        items-center
        justify-center
        bg-color-primary
        w-full
        h-full
      >
        <Image uri="https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Text color-success size-40 p-20 pv-100>
          Test
        </Text>
      </View>
    </SafeAreaView>
  );
}
