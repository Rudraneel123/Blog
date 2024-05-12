import { useState } from "react";
import { Button, TextField } from "@mui/material";
import PencilImage from "../public/pencil.png";
import MyModal from "./Modal";
import ShowList from "./ShowList";
import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";
import "./App.css";


function ButtonComponent() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/showlist")}
      style={{ background: "transparent", borderColor: "transparent" }}
    >
      Next Page for List
    </Button>
  );
}

function App() {
  const [titleInput, setTitleInput] = useState("");
  const [blogInput, setBlogInput] = useState("");
  const [open, setOpen] = useState(false);

  const saveBlog = () => {
    fetch("http://localhost:8000/blog/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput,
        body: blogInput,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpen(true);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTitleInput("");
    setBlogInput("");
  };

  const isDisabled = !(titleInput && blogInput);

  return (
    <div className="div-centre">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="div-inner">
                <h1 style={{ color: "black", fontFamily: "cursive" }}>
                  Write to aspire!
                </h1>
                <TextField
                  type="text"
                  placeholder="Title of your blog"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                />
                <TextField
                  type="text"
                  multiline
                  rows={10}
                  maxRows={Infinity}
                  placeholder="And here your blog goes......"
                  style={{ width: "500px" }}
                  value={blogInput}
                  onChange={(e) => setBlogInput(e.target.value)}
                />

                <Button
                  disabled={isDisabled}
                  onClick={saveBlog}
                  className="save-button"
                  title="Click to save the blog"
                >
                  <img
                    src={PencilImage}
                    style={{ height: "40px", width: "60px" }}
                  />
                </Button>

                <MyModal open={open} handleClose={() => setOpen(false)} />
                <ButtonComponent/>
              </div>
            }
          />
          <Route path="/showlist" element={<ShowList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
