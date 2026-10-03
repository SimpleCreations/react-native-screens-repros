import { NavigationContainer } from '@react-navigation/native';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { ScrollView, Text } from 'react-native';

const Tab = createNativeBottomTabNavigator();

const HomeScreen = () => (
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    {Array.from({ length: 50 }, (_, i) => (
      <Text key={i} style={{ padding: 16 }}>
        Home {i + 1}
      </Text>
    ))}
  </ScrollView>
);

const LibraryScreen = () => (
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    <Text>Library</Text>
  </ScrollView>
);

const SearchScreen = () => (
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    {Array.from({ length: 50 }, (_, i) => (
      <Text key={i} style={{ padding: 16 }}>
        Search {i + 1}
      </Text>
    ))}
  </ScrollView>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: { type: 'sfSymbol', name: 'house' },
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          title: 'Library',
          tabBarIcon: { type: 'sfSymbol', name: 'books.vertical' },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarSystemItem: 'search',
          tabBarIcon: { type: 'sfSymbol', name: 'magnifyingglass' },
          headerSearchBarOptions: { placeholder: 'Search' },
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
