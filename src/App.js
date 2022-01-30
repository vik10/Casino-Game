import { Provider } from "react-redux";
import ContentContainer from "./componets/ContentContainer";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ContentContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
