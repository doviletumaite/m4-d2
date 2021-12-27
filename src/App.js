import 'bootstrap/dist/css/bootstrap.min.css'
import MineNavbar from './components/MineNavbar';
import MyFooter from './components/MyFooter';
import "./style/mainStyle.css"

function App() {
  return (
   <div className='body'>
     <MineNavbar />
   
     <MyFooter />
   </div>
 
  );
}

export default App;

