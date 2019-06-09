import React, { Component } from "react";
import { WebView } from "react-native-webview";
export default class WebViewScreen extends Component {
  render() {
    return (
      <WebView
        style={{ flex: 1 }}
        source={{ uri: "file:///android_asset/Simple_Site/index.html" }}
        scalesPageToFit
        domStorageEnabled
        javaScriptEnabled
        startInLoadingState
        originWhitelist={['*']}
        mixedContentMode="compatibility"
      />
    );
  }
}
