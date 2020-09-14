import React, { useState } from 'react';
import Login from './Login';
import {ApolloClient} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Sidebar from './components/Sidebar';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import SearchBar from './components/SearchBar';
import {createGlobalStyle} from 'styled-components';
import List from './components/List';
import 'styled-components/macro';

const accessToken = localStorage.getItem('token');

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Global = createGlobalStyle({
  body: {
    backgroundColor: '#fff',
    color:'#444',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
    padding: 0,
    margin: 0,
    borderTop: '4px solid rgb(210, 54, 105)',
  },
  '*':{
    boxSizing: 'border-box',
  },
});

const App = () => {
  const [user, setUser] = useState('');
  const onSearchSubmit = (term) => {
    setUser(term);
  };
  return (
    <>
        <Global/>
        {
          accessToken ? 
          <ApolloProvider client={client}>
            <Sidebar user={user} />
            <SearchBar onSubmit = {onSearchSubmit}/>
            {
              user ? <List user={user}/> : <div>Please Enter Github User Id and press Enter</div>
            }
          </ApolloProvider> : <Login/>
        }
    </>
  )
};

export default App;
