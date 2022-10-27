import { ApolloClient, InMemoryCache } from '@apollo/client';

const useApollo = () => {
    const client = new ApolloClient({
        uri: 'https://flyby-gateway.herokuapp.com/',
        cache: new InMemoryCache(),
      });

      return client;
}

export default useApollo