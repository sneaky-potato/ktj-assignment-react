
const Post = ({data, handleDelete, handleEdit}) => {
    const list = data;

    console.log(list)
    return(
        <div className="post-list">
            {list.map((post) => 
                <div className="post-card" key={post.id}>
                    <h2> { post.title } </h2>
                    <button className="delete-icon" onClick={ () => handleDelete(post.id) } >
                        Delete Post
                    </button>
                    <button className="edit-icon" onClick={ () => handleEdit(post.id) } >
                        Edit Post
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