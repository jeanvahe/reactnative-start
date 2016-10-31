import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import TopToolbar from '../components/TopToolbar';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import Home from './Home';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onIconClicked = this.onIconClicked.bind(this);
    this.state = {
      selectedTab:'home'
    };
  }

  onIconClicked() {
    console.log("Icon clicked");
  }

  onPressRedux() {
    const {actions} = this.props;
    actions.onIncrement();
  }

  render() {
    const {reducer} = this.props;
    return (
      <View style={styles.container}>
        <TopToolbar
          title="Main"
          navigator={navigator}
          onIconClicked={this.onIconClicked}
          navIconName="md-menu"
        />
        <Text onPress={() => this.onPressRedux()}>
          {reducer.value + '\n'}
        </Text>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.textStyle}
            renderIcon={() => <Icon name={ 'ios-home' } size={26} color={'gray'}/>}
            renderSelectedIcon={() => <Icon name={ 'ios-home' } size={26} color={'#4E78E7'}/>}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
              <Home {...this.props} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'more'}
            title="More"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.textStyle}
            renderIcon={() => <Icon name={ 'ios-more' } size={26} color={'gray'}/>}
            renderSelectedIcon={() => <Icon name={ 'ios-more' } size={26} color={'#4E78E7'}/>}
            onPress={() => this.setState({ selectedTab: 'more' })}>
              <View />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  textStyle:{
    color:'#999',
  },
  selectedTextStyle:{
    color:'black',
  }
});
export default Main;
