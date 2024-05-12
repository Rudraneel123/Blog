import { useState } from "react";
import { Button, Card } from "@mui/material";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";


function ShowList() {
  const [showBlog, setShowBlog] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const handleShowBlog = () => {
    fetch("http://localhost:8000/blog/view")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error:", error));
  };
  
  const navigate = useNavigate();

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
      </Card>
      <div>
        <div style={{gap:'20px',display:'flex',flexDirection:'column'}}>
      <Button
          onClick={() => {
            handleShowBlog();
            setShowBlog(!showBlog);
          }}
        >
          Show Blogs
        </Button>
        <Button onClick={() => navigate(-1)}>
          Back
        </Button>
        </div>
      </div>
    </div>
  );
}

export default ShowList;
