import { useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import './App.scss';
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';

import { signOut } from 'firebase/auth';
import { async } from '@firebase/util';
import { auth } from './firebase-config';
import DashBoard from './components/DashBoard';
import Home from './components/Home';

const cookies = new Cookies();


function App() {

  // const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  // const [room, setRoom] = useState(null);
  // const roomInputRef = useRef(null)

  // const signUserOut = async () => {
  //   await signOut(auth);
  //   cookies.remove("auth-token")
  //   setIsAuth(false)
  //   setRoom(null);
  // }

  // if (!isAuth) {
  // return (
  //   <div className="App">
  //     <Auth setIsAuth={setIsAuth} />
  //   </div>
  // );
  // }

  return (<> 
  <DashBoard />
  <Home />
    {/* {room ? (
    <Chat room={room}/>
    ) : (
    <div className='room grid max-w-[200px] m-4'>
      <label>Enter Room Name:</label>
      <input ref={roomInputRef} 
      className='rounded border'/>
      <button onClick={(e) => setRoom(roomInputRef.current.value)} className='mt-2 rounded bg-blue-700 text-center text-white'>Enter Chat</button>
    </div>
    )} 

    <div>
      <button onClick={signUserOut} className='2'>Sign Out</button>
    </div> */}
    </>
  )
}

export default App;
