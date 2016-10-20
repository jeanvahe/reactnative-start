import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View
} from 'react-native';

import { registerApp } from 'react-native-wechat';
import AV from 'leancloud-storage';
import { naviGoBack } from '../utils/CommonUtil';
import Splash from '../pages/Splash';

let tempNavigator;
let isRemoved = false;

class App extends React.Component {
  static configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  constructor(props) {
    super(props);
    registerApp('wxb24c445773822c79');
    AV.init({
      appId: 'Tfi1z7dN9sjMwSul8sYaTEvg-gzGzoHsz',
      appKey: '57qmeEJonefntNqRe17dAgi4'
    });
    this.renderScene = this.renderScene.bind(this);
    BackAndroid.addEventListener('hardwareBackPress', this.goBack);
  }

  goBack() {
    return naviGoBack(tempNavigator);
  }

  renderScene(route, navigator) {
    const Component = route.component;
    tempNavigator = navigator;
    if (route.name === 'WebViewPage') {
      BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
      isRemoved = true;
    } else if (isRemoved) {
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
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
            component: Splash,
            name: 'Splash'
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
