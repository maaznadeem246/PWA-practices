import logo from './logo.svg';
import './App.css';
import app from "./firebase"
import {getToken,getMessaging} from "firebase/messaging"



function App() {
  const messaging = getMessaging(app);
  console.log(messaging)
  getToken({vapidKey: "BOc2qHoYFAizyNm26FF0_mZQGgb-1R2Whv45jVKP-axeWV2f_7G5i60n0hRZd7NGZuzKKpiumHsK4ssOufdAK2c",...messaging}).then((token)=>{
    console.log("token : ", token)
  }).catch((er)=>{
    console.log(er)
  })
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
