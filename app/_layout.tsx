import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../src/logic/store';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
``
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{
            headerShown: false,
            animationTypeForReplace: 'pop', animation: 'slide_from_right'

          }} />
          <Stack.Screen name="product/[id]" getId={({ params }) => String(Date.now())} options={{ title: 'Product Details', animationTypeForReplace: 'pop', animation: 'slide_from_right' }} />
        </Stack>
      </Provider>
    </ThemeProvider>
  );
}
