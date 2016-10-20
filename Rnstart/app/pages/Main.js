import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

class Main extends React.Component {
  onPressRedux() {
    const {actions} = this.props;
    actions.onIncrement();
  }

  render() {
    const {value} = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={() => this.onPressRedux()}>
          {value + '\n\n'}
        </Text>
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
});
export default Main;
