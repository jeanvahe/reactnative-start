import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View
} from 'react-native';

import MainContainer from './MainContainer';

class App extends React.Component {
  static configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    const Component = route.component;
    return (
      <Component navigator={navigator} route={route} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#3e9ce9"
          barStyle="light-content"
        />
        <Navigator
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: MainContainer,
            name: 'Main'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;
