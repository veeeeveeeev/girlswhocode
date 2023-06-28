import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { setPosts } from "state";
import { Button, IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("categoryName", categoryName);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`https://girlswhocode.onrender.com/posts`, {
      method: "POST",
      body: formData,
    });

    const posts = await response.json();

    dispatch(setPosts({ posts }));
    setImage(null);
    setContent("");
    setTitle("");
  };
  return (
    <div>
      <h1>CREATOR ONLY!!</h1>
      <InputBase
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <InputBase
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <InputBase
        placeholder="Category Name"
        onChange={(e) => setCategoryName(e.target.value)}
        value={categoryName}
      />
      <Box>
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
            <div>
              <Box
                {...getRootProps()}
                p="1rem"
                width="100%"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <input {...getInputProps()} />
                {!image ? (
                  <p>Add Image Here</p>
                ) : (
                  <div>
                    <p>{image.name}</p>
                    <EditOutlined />
                  </div>
                )}
              </Box>
              {image && (
                <IconButton
                  onClick={() => setImage(null)}
                  sx={{ width: "15%" }}
                >
                  <DeleteOutlined />
                </IconButton>
              )}
            </div>
          )}
        </Dropzone>
      </Box>

      <ReactQuill theme="snow" onChange={setContent} value={content} />

      <div>{content}</div>

      <Button disabled={!content} onClick={handlePost}>
        POST
      </Button>
    </div>
  );
};

export default CreatePost;
