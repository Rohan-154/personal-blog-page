const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>written by{blog.author}</p>
          <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
