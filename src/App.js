import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sing-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="shop" element={<Home />} />
        <Route path='sign-in' element={<SignIn/>}/>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};
export default App;
