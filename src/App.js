import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
 
  
  /// компонента
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
          <Route path="/profile" element={<Profile postsData={props.postsData}  />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
