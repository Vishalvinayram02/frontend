"use client"
import { ChangeEvent, useState } from "react";
import axios from "axios";
import BasicExample from "../navbar";


export default function MyComponent() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const [formData, setFormData] = useState("");


  const fetchImage = async (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);

    try {
      const response = await axios.get(
        `https://api.example.com/images?search=${encodeURIComponent(text)}`
      );
      const { data } = response;
    } catch (error) {
      console.error("Error fetching image:", error);
    // }

  };

  const image = async()=>
  {
              setImageUrl("data:image/jpeg;base64,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");

  }
  return (
    <div style={{ textAlign: "center" }}>
     
      <h1>Text Form</h1>
      <center>
      <div style={{
          width: "200px",
          height: "200px",
          // backgroundColor: "grey",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
      {imageUrl ? (
          <img src={imageUrl} alt="Uploaded Image" width="100%" height="100%" />
        ) : (
          <p></p>
        )}
        </div>
        </center>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={image}>Fetch Image</button>
      {/* {imageUrl==""?  && <img src={imageUrl} alt="Fetched Image" width="200" />} */}
    </div>
  );
}};