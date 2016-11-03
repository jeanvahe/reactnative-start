import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import TopToolbarDock from '../components/TopToolbarDock';
import MenuButton from 'react-native-menu-button';

class ProductMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleOnSelect (value) {
    console.log(value);
  }

  render() {
    const { navigator } = this.props;
    const menuGroup= [{key:"0",value:"menu1",text:"menu1"},{key:"1",value:"menu2",text:"menu2"},{key:"2",value:"菜单3",text:"菜单3"},{key:"3",value:"菜单4",text:"菜单4"}]

    return (
      <View style={styles.container}>
        <TopToolbarDock
          title="Main"
          navigator={navigator}>
          <Icon.Button
            iconStyle={styles.rightIOS}
            name={iconName}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.8}
            onPress={onActionSelected}
          /> 
          <MenuButton  
            buttonStyle={[styles.rightIOS]} 
            button={()=> <Icon name={ 'ios-home' } size={26} color={'gray'}/> }
            menuGroup={menuGroup}
            onSelect={this._handleOnSelect.bind(this)} 
            optionSelectedStyle={{backgroundColor:"red"}}
          />
        <TopToolbarDock/>
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
  rightIOS: {
    marginTop: 20,
    marginRight: 8
  },
});
export default ProductMessage;
