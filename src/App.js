import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from "D:\checkpoint-components\react\react.app\my-first-application\src/component/profil"
import ProfilePhoto from './component/profile/ProfilPhoto';
import Adress from "AZIZ(D:)/ checkpoint-components/react/react.app/my-first-application/src/component/profil/Adress.js"
import Fini from ".src/component/profil/Foot.js"
function App() {
  return (
<div className="app">
    <div>
      <FullName/>
      < div>
      <ProfilePhoto/>
      </div>
      <div>
      <Adress/>
      </div>
      <div>
        <Fini/>
      </div>
    </div> 
    </div>
  );
}
export default App ;
