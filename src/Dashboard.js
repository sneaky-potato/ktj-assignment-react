import { useState } from "react"; 
import { Navbar, currentUser} from "./Navbar";
import Post from "./Post";

function Dashboard() {
    let [data, setData] = useState([
        { title: 'Facebook', value: 'Facebook is a bad service', author: 'Alexander', id: 1},
        { title: 'Whatsapp', value: 'Desktop version besy', author: 'Dexter', id: 2},
        { title: 'Niggas', value: 'I sympathesise with them', author: 'Wordlking', id: 3},
        { title: 'Trek', value: 'Mountains are calling me', author: 'Prepare to win', id: 4},
        { title: 'My opinion', value: 'No U', author: 'Forrestgump', id: 5},
        { title: 'Bhaloryante', value: 'Compi less go', author: 'Void', id: 6}
    ]);
    
    const [newValue, setNewValue] = useState('');
    const [newTitle, setNewTitle] = useState('');

    const handleDelete = (id) => {
        const newData = data.filter( post => post.id !== id);
        setData(newData);
    }
    const handleEdit = (id) => {
        
    }

    const handleSubmit = event => {
        console.log(event.target.value);
        event.preventDefault();
        if (currentUser == null) {alert("Sign in first")}
        else {
            if(newValue !== '')
            {
                let newData = {title: newTitle, value: newValue, author: currentUser, id:data.length + 1};
                data.push(newData);
                console.log("New data = ", data);
                setData(data);
                setNewValue('');
                setNewTitle('');
            } 
            else alert('Blank data cannot be submitted');
        } 
    }

  return (
    <div className="Dashboard">
        <div className="AddPost">
            <form>
                <label>
                    <input 
                    placeholder="Title of your post" 
                    className="inp" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required>
                    </input>
                </label>
                <label>
                    <textarea className="inp paragraph"
                    rows="10"
                    cols="50"
                    name="paragraph_text" 
                    placeholder="Share your thoughts with the world"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)} required></textarea>
                </label>
                <button type="submit" onClick={handleSubmit}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>
                </button>
            </form>
        </div>
        <div className="ViewPost">
            <Post data={data} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </div>
    </div>
  );
}

export default Dashboard;
