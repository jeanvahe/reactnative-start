import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { naviGoBack } from '../utils/CommonUtil';
import Button from './Button';

let showActionButton = false;

const propTypes = {
  title: PropTypes.string,
  navigator: PropTypes.object,
  onIconClicked: PropTypes.func,
  navIconName: PropTypes.string
};

const TopToolbar = ({
  title,
  navigator,
  onIconClicked,
  navIconName
}) => {
  const handleIconClicked = () => {
    if (onIconClicked) {
      onIconClicked();
    } else if (navigator) {
      naviGoBack(navigator);
    }
  };

  const renderToolbarIOS = () => {
    return (
      <View style={styles.toolbar}>
        <Icon.Button
          name={navIconName === undefined ? 'ios-arrow-back' : navIconName}
          iconStyle={styles.leftIOS}
          onPress={handleIconClicked}
          backgroundColor="transparent"
          underlayColor="transparent"
          activeOpacity={0.8}
        />
        <Text
          style={[styles.titleIOS,{ paddingLeft: 0 }]}
        >
          {title}
        </Text>
        {this.props.children}
      </View>
    );
  };

  const Toolbar = Platform.select({
    android: () => renderToolbarIOS(),
    ios: () => renderToolbarIOS()
  });

  return <Toolbar />;
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    backgroundColor: '#3e9ce9',
    alignItems: 'center',
    height: 58
  },
  titleIOS: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 20
  },
  leftIOS: {
    marginTop: 20,
    marginLeft: 8
  },
  rightIOS: {
    marginTop: 20,
    marginRight: 8
  },
  rightText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  },
  zero: {
    height: 0,
    width: 0
  }
});

TopToolbar.propTypes = propTypes;

TopToolbar.defaultProps = {
  title: '',
};

export default TopToolbar;
