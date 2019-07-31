import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import ApolloClient, {createNetworkInterface} from 'apollo-client';
// import { AsyncStorage } from "react-native";
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import thunk from 'redux-thunk';

import { reduxStore } from 'redux-actions';

const networkInterface = createNetworkInterface({
  // uri: 'http://localhost:4444/graphql'
  uri: 'https://fire-report-api.now.sh/'
});

networkInterface.use([
  {
    async applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      try {
        const token =  '';
        if (token) {
          req.options.headers.authorization = token || '' || null;
        }
      } catch (error) {
        throw error;
      }
      return next();
    }
  }
]);

export const client = new ApolloClient({
  networkInterface
});

const middlewares = [client.middleware(), thunk];

export const store = createStore(
  reduxStore(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);
