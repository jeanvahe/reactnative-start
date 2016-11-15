import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import TopToolbarDock from '../components/TopToolbarDock';
import MenuButton from 'react-native-menu-button';
import Icon from 'react-native-vector-icons/Ionicons';

const homeImg = require('../img/home.png');
const categoryImg = require('../img/category.png');
const inspectionImg = require('../img/inspection.png');
const infoImg = require('../img/info.png');

class ProductMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  onHandleSelect (value) {
    console.log(value);
  }

  render() {
    const { navigator } = this.props;
    const menuGroup= [{key:"0",value:"menu1",text:"发起群聊", image: homeImg},{key:"1",value:"menu2",text:"添加朋友", image: categoryImg},{key:"2",value:"menu3",text:"扫一扫", image: inspectionImg},{key:"3",value:"menu4",text:"收付款", image: infoImg}]

    return (
      <View style={styles.container}>
        <TopToolbarDock
          title="Main"
          navigator={navigator}>
          <Icon.Button
            iconStyle={styles.rightIOS}
            name="ios-home"
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.8}
            onPress={()=>this.onHandleSelect(1)}
          /> 
          <MenuButton  
            buttonStyle={[styles.rightIOS]} 
            button={<Icon name={ 'ios-home' } size={26} color={'gray'}/> }
            optionsStyle={{top:58, width: 150}}
            menuGroup={menuGroup}
            onSelect={()=>this.onHandleSelect(2)} 
            optionStyle={styles.menuOption}
            optionTextStyle={styles.menuText}
            optionImageStyle={styles.menuImage}
          />
        </TopToolbarDock>
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
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  menuText: {
    fontSize: 15,
    marginLeft: 15,
    color: 'black'
  },
  menuImage: {
    width: 20,
    height: 20
  }
});
export default ProductMessage;
