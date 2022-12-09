import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Config from 'react-native-config';

MapboxGL.setAccessToken(Config.MAPBOX_TOKEN)

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapboxGL.MapView style={{ flex: 1 }}>
        <MapboxGL.Camera 
          centerCoordinate={[-147.7200, 64.8401]}
          zoomLevel={6}
        />
      </MapboxGL.MapView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello Map Test</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
