import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import TopToolbar from '../components/TopToolbar';
import { toastShort } from '../utils/ToastUtil';

const toolbarActions = [
  { title: '提交', iconName: 'md-checkmark', show: 'always' }
];

let feedbackText;

class ProductFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
  }

  onActionSelected() {
    if (feedbackText === undefined || feedbackText.replace(/\s+/g, '') === '') {
      toastShort('请填写建议内容哦~');
    } else {
      const { navigator } = this.props;
      navigator.pop();
      toastShort('您的问题已反馈，我们会及时跟进处理');
    }
  }

  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <TopToolbar
          title="Main"
          navigator={navigator}
        />
        <TextInput
          style={styles.textInput}
          placeholder="请写下您宝贵的意见或建议！"
          placeholderTextColor="#aaaaaa"
          underlineColorAndroid="transparent"
          numberOfLines={200}
          multiline
          autoFocus
          onChangeText={(text) => {
            feedbackText = text;
          }}
        />
      </View>
     )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fcfcfc'
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 15,
    textAlignVertical: 'top'
  }
});
export default ProductFeedback;
