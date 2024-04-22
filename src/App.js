import allVideos from './Components/allVideos'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Video from './Components/Video'
const App = () => {
  return (
      <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<allVideos />}/>
            <Route path='/video/:id' elemet={<Video />}/>
        </Routes>
      </BrowserRouter>
      </>
        
  );
}
export default App;
