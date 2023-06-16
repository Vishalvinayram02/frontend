
"use client"
import { url } from "inspector";
import { ChangeEvent,useState } from "react";
import BasicExample from "./navbar";
import { Col } from "react-bootstrap";

export default function MyComponent() {
  const [formData, setFormData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleInputChange =(event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
    console.log(event.target.value);

  };

  const handleClick = () => {
    // Fetch the image using the API
    fetch("https://picsum.photos/200/300")
      .then((response) => {
        // Get the URL of the image from the response
        const imageUrl = response.url;
        setImageUrl(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  };

  return (

    <div style={styles.container}>
      <div
        style={{
          height:"90%",
          width: "80%",
          // maxHeight:"400px",
          // maxWidth:"400px",
          minWidth:"250px",
          minHeight:"250px",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin:"30px 30px 30px 30px"
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded Image" width="100%" height="100%" />
        ) : (
          <p>No image uploaded</p>
        )}
      </div>
      <div></div>
      <Col>
      <input
        type="text"
        value={formData}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button onClick={handleClick} style={styles.button}>
        click me
      </button>
      </Col>
      
    </div>
  );
}

const styles = {
  container: {
    // backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhtpS1M7n_HcpSr_OaJwSdV_txoRd3NtljA&usqp=CAU')",
    backgroundRepeat:'no-repeat',
    backgroundSize:"cover",
    width:"100%",
    height:"90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#F1F1F1",
    borderRadius: "4px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  } as React.CSSProperties,
  input: {
    width: "50%",
    height: "30px",
    padding: "8px",
    margin: "2px 10px 5px 10px",
    marginBottom: "16px",
    fontSize: "16px",
    color: "#333333",
    border: "1px solid #CCCCCC",
    borderRadius: "4px",
    outline: "none",
  },
  button: {
    width: "40%",
    height: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "purple",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};