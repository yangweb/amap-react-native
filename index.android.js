'use strict';

import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

let DEFAULT_URL = 'http://c.guapin.com/app/'; 
 
let WebViewAmap = React.createClass({
  render: function() {
    return (
      <View style={{flex:1}}>
        <WebView style={styles.webview_style} 
          url={DEFAULT_URL}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
      </View>
    );
  },
});

let styles = StyleSheet.create({
    webview_style:{  
       backgroundColor:'#fff',   
    }
});
 
AppRegistry.registerComponent('GuaPinAmap', () => WebViewAmap);

// AppRegistry.registerComponent('GuaPinAmap', () => app);
