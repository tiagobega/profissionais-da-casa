import Providers from "components/Providers";
import Layout from "components/Layout";
import Router from "components/Router";

function App() {
  return (
    <Providers>
      <Layout>
        <Router />
      </Layout>
    </Providers>
  );
}

export default App;
