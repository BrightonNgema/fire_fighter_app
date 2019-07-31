/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import AppNavigation from "./App";
import { name as appName } from "./app.json";
import { store, client } from "./store";
import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider store={store} client={client}>
    <AppNavigation />
  </ApolloProvider>
);
AppRegistry.registerComponent(appName, () => App);
