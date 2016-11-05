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

const propTypes = {
  title: PropTypes.string,
  navigator: PropTypes.object,
  onIconClicked: PropTypes.func,
  navIconName: PropTypes.string
};

class TopToolbarDock extends React.Component {
  constructor(props) {
    super(props);
  }

  handleIconClicked() {
    if (this.props.onIconClicked) {
      this.props.onIconClicked();
    } else if (this.props.navigator) {
      naviGoBack(this.props.navigator);
    }
  }

  render() {
    return (
      <View style={styles.toolbar}>
        <Icon.Button
          name={this.props.navIconName === undefined ? 'ios-arrow-back' : this.props.navIconName}
          iconStyle={styles.leftIOS}
          onPress={this.handleIconClicked.bind(this)}
          backgroundColor="transparent"
          underlayColor="transparent"
          activeOpacity={0.8}
        />
        <Text
          style={[styles.titleIOS,{ paddingLeft: 0 }]}
        >
          {this.props.title}
        </Text>
        {this.props.children}
      </View>
    );
  }
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

TopToolbarDock.propTypes = propTypes;

TopToolbarDock.defaultProps = {
  title: '',
};

export default TopToolbarDock;
