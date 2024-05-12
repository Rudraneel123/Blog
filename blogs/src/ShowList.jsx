import { useState } from "react";
import { Button, Card } from "@mui/material";

function ShowList() {
  const [showBlog, setShowBlog] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const handleShowBlog = () => {
    fetch("http://localhost:8000/blog/view")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <Card>
        <Card style={{ overflowY: "scroll" }}>
          {showBlog &&
            blogs.map((blog) => (
              <div key={blog.id}>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
              </div>
            ))}
        </Card>
        <Button
          onClick={() => {
            handleShowBlog();
            setShowBlog(!showBlog);
          }}
        >
          Show Blogs
        </Button>
      </Card>
    </div>
  );
}

export default ShowList;
