import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  RefreshControl,
  ListView,
  TouchableOpacity,
  RecyclerViewBackedScrollView,
  Text
} from 'react-native';

import ProductEdit from './ProductEdit';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.reducer.titles),
      refreshing: false
    }
    this.renderItem = this.renderItem.bind(this);
  }

  _onRefresh() {
    this.setState({refreshing: true}); 
    // do some data requesting
    this.timer = setTimeout(() => {
      this.setState({refreshing: false});
    }, 1000);
  }

  _onPress(article) {
     const { navigator } = this.props;
     if (article.title === '1') {
       navigator.push({
         component: ProductFeedback,
         name: 'ProductFeedback',
         article
       });
     } else if (article.title === '2') {
       navigator.push({
         component: ProductMessage,
         name: 'ProductMessage',
         article
       });
     }
  }

  renderItem(article) {
    return (
      <TouchableOpacity onPress={() => this._onPress(article)}>
        <View style={styles.containerItem}>
          <Text>
             {article.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        initialListSize={1}
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        style={styles.listView}
        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        refreshControl={
          <RefreshControl
            style={styles.refreshControlBase}
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            title="Loading..."
            colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#eeeeec'
  },
  refreshControlBase: {
    backgroundColor: 'transparent'
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
});

export default ProductList;

