import { Toaster } from "sonner";
import { Application } from "./pages/Application"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"
import CartProvider from "./context";


const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy: "cache-first"
    }
  }
});

function App() {
  return (

    <>
      <ChakraProvider>
        <CartProvider>
          <ApolloProvider client={client}>
            <Toaster position="top-right" richColors duration={2000} />
            <Application />
          </ApolloProvider>
        </CartProvider >
      </ChakraProvider>
    </ >
  )
}

export default App
