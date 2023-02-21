import { async } from "@firebase/util";
import { addDoc,
     collection,
      onSnapshot,
       orderBy,
       query, 
       serverTimestamp,
       where
     } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";


export const Chat = (props) =>  {
    const {room} = props

    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdBy"))
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id });

            })
            setMessages(messages);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage('');

    }
    return <div>
        <div>
            <h1>Welcome to: {room.toUpperCase()}</h1>
        </div>
        <div>{messages.map((message) => (
            <div key={message.id}>
                <span>{message.user}</span>
                {message.text}
                :
                {message.createdAt}
            </div>
        ))}
        </div>
        <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
}