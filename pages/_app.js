import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UseWalletProvider } from "use-wallet";
import NavBar from "../components/Navbar";
import "@fontsource/space-grotesk";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <ChakraProvider theme={theme}>
        <UseWalletProvider
          chainId={5}
          connectors={{
            walletconnect: {
              rpcUrl:
                "https://goerli.infura.io/v3/6121c2e60b0149a394c7d370e1dfe31a",
            },
          }}
        >
          <NavBar />
          <Component {...pageProps} />
         
        </UseWalletProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
