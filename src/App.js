import allVideos from './Components/allVideos'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home'
const App = () => {
  return (
      <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<allVideos />}/>
        </Routes>
      </BrowserRouter>
      </>
        
  );
}
export default App;
