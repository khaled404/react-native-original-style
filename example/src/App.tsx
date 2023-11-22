import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { Text, View } from 'react-native-original-style';

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
        <Text color-success size-60 p-20 pv-100>
          Test
        </Text>
      </View>
    </SafeAreaView>
  );
}
