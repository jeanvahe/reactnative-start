import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onIconClicked = this.onIconClicked.bind(this);
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
        <ReadingToolbar
          title="Main"
          navigator={navigator}
          onIconClicked={this.onIconClicked}
          navIconName="md-menu"
        />
        <Text onPress={() => this.onPressRedux()}>
          {reducer.value + '\n\n'}
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
