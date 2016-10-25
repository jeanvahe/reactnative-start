import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <ScrollableTabView
      renderTabBar={() =>
        <DefaultTabBar
          tabStyle={styles.tab}
          textStyle={styles.tabText}
        />
      }
      tabBarBackgroundColor="#fcfcfc"
      tabBarUnderlineStyle={styles.tabBarUnderline}
      tabBarActiveTextColor="#3e9ce9"
      tabBarInactiveTextColor="#aaaaaa"
      <ProductList tabLabel='ProductList' />
      <ProductDetails tabLabel='ProductDetails'/>
    </ScrollableTabView>
  }
}

const styles = StyleSheet.create({
  tab: {
    paddingBottom: 0
  },
  tabText: {
    fontSize: 16
  }
  tabBarUnderline: {
    backgroundColor: '#3e9ce9',
    height: 2
  }
});

export default Home;
