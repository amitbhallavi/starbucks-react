import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import StarbucksHome from "./pages/StarbucksHome";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StarbucksHome />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
