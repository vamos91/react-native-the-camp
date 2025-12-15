import '../global.css';

import { Stack } from "expo-router";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryCLient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryCLient}>
      <Stack screenOptions={{headerShown: false}}/>
    </QueryClientProvider>
    
  )
}
