import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  RefreshControl,
  ListView,
  Text
} from 'react-native';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
    this.renderItem = this.renderItem.bind(this);
  }
  render() {
    <ListView
      initialListSize={1}
      dataSource={dataSource}
      renderRow={this.renderItem}
      style={styles.listView}
      onEndReached={() => this.onEndReached(typeId)}
      onEndReachedThreshold={10}
      onScroll={this.onScroll}
      renderFooter={this.renderFooter}
      renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
      refreshControl={
        <RefreshControl
          style={styles.refreshControlBase}
          refreshing={read.isRefreshing}
          onRefresh={() => this.onRefresh(typeId)}
          title="Loading..."
          colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
        />
      }
    />
  }
}

const styles = StyleSheet.create({
});

export default ProductList;

