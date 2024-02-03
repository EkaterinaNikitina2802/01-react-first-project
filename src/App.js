import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import state from "./Redux/state";

const App = (props) => {
 
  
  /// компонента
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" 
          element={<Dialogs state={props.state.dialogsPage}/>} />
          <Route path="/profile" 
          element={<Profile state={props.state.profilePage}  />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
