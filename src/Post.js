
const Post = ({data, handleDelete, handleEdit}) => {
    const list = data;

    console.log(list)
    return(
        <div className="post-list">
            {list.map((post) => 
                <div className="post-card" key={post.id}>
                    <h2> { post.title } </h2>
                    <button className="delete-icon" onClick={ () => handleDelete(post.id) } >
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" height="20px" width="20px" alt="edit"/>
                    </button>
                    <button className="edit-icon" onClick={ () => handleEdit(post.id) } >
                        <img src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png" height="20px" width="20px" alt="delete"/>
                    </button>
                    <p> { post.value } </p>
                    <p className="author"> ~ { post.author } </p>
                    <hr>
                    </hr>
                </div>
            )}
        </div>
    );

}

export default Post