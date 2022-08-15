import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="shop" element={<Home />} />
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};
export default App;
