import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdatesScreen from "./screens/Updates";

export default function App() {
  const Stack=createStackNavigator();
  return (
      <NavigatorContainer>
        <Stack.Navigator initialRouteName = "Home" screensOptions={{
          headerShown: false 
        }}>
<Stack.Screens name="Home" component={HomeScreen}/>
<Stack.Screens name ="Home" component={IssLocationScreen}/>
<Stack.Screens name ="Home" component={MeteorScreen}/>
<Stack.Screens name="Home" component={UpdatesScreen}/>
        </Stack.Navigator>
      </NavigatorContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
