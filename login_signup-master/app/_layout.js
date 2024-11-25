import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout = () => {

  return (
    <PaperProvider>
      <SafeAreaProvider screenOptions={{animation: 'none'}}>
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false}}/>
            <Stack.Screen name='Recovery' options={{headerShown:false}}/>
            <Stack.Screen name='Register' options={{headerShown:false}}/>
            <Stack.Screen name='dashboard' options={{title: 'Dashboard',headerShown:false}}/>
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  )
}

export default RootLayout