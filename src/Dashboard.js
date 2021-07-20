import { useState } from "react"; 
import { currentUser} from "./Navbar";
import Post from "./Post";

function Dashboard() {

    let [data, setData] = useState([
        { title: 'Bash', value: 'Bash or Shell is a command line tool that is used in open science to efficiently manipulate files and directories. Learn how to use Bash to access and move files and directories.', author: 'Al3xand3r # 9779', id: 1},
        { title: 'Command Prompt', value: 'Command Prompt is a command line interpreter application available in most Windows operating systems. It\'s used to execute entered commands. Most of those commands automate tasks via scripts and batch files, perform advanced administrative functions, and troubleshoot or solve certain kinds of Windows issues.', author: 'Pun1sh3r # 1009', id: 2},
        { title: 'PowerShell', value: 'PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. PowerShell runs on Windows, Linux, and macOS', author: 'Yeet00t # 5699', id: 3},
    ]);
    
    
    const [isEdit, setIsEdit] = useState(false);
    const [message, setMessage] = useState('');
    const [newValue, setNewValue] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newId, setNewId] = useState(0);

    const handleDelete = (id) => {
        const newData = data.filter( post => post.id !== id);
        setData(newData);
        setMessage('Post has been deleted succesfully');
        setTimeout(() => {  setMessage(''); }, 1500);

    }
    const handleEdit = (id) => {
        const newData = data.filter( post => post.id !== id);
        const oldData = data.filter( post => post.id === id);
        console.log("olddata = ", oldData, "title=",oldData.title);
        setNewTitle(oldData[0].title);
        setNewValue(oldData[0].value);
        let title = document.getElementById('title');
        let body = document.getElementById('value');
        title.innerHTML = oldData[0].title;
        body.innerHTML = oldData[0].value;
        setMessage('Post edit mode');
        setTimeout(() => {  setMessage(''); }, 1500);
        setData(newData);
        setIsEdit(true);
        setNewId(id);
    }

    const handleSubmit = event => {
        console.log(event.target.value);
        event.preventDefault();
        if (currentUser == null) {alert("Sign in first")}
        else {
            if(newValue !== '')
            {
                let tempID;
                if (isEdit === false) tempID = data.length + 1;
                else tempID = newId;
                setIsEdit(false);
                let newData = {title: newTitle, value: newValue, author: currentUser, id: tempID};
                data.splice(tempID - 1, 0, newData);
                console.log("New data = ", data);
                setData(data);
                setNewValue('');
                setNewTitle('');
                setMessage('Post has been added succesfully');
                setTimeout(() => {  setMessage(''); }, 1500);
            } 
            else alert('Blank data cannot be submitted');
            
        }
    }

  return (
    <div className="Dashboard">
        <div className="AddPost">
            <div className="message-box">
            {message}
            </div>
            
            <form>
                <label>
                    <input 
                    placeholder="Title of your post" 
                    className="inp" 
                    id="title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required>
                    </input>
                </label>
                <label>
                    <textarea className="inp paragraph"
                    id="value"
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
