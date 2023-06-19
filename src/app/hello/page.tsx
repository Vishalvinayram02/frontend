"use client"
import { ChangeEvent, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function MyComponent() {
  const [formData, setFormData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleInputChange =(event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
    console.log(event.target.value);

  };

  const handleClick = () => {
    // Fetch the image using the API
    fetch("https://picsum.photos/800")
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
    <div style={{ textAlign: "center" }}>
     <Container>
      <Row>
        <Col style={{backgroundColor:"grey"}}>
      <div style={{backgroundColor:'red',width:"100%",height:"90%"}}>
    <div
        style={{
          // maxHeight:"400px",
          // maxWidth:"400px",
          minWidth:"250px",
          minHeight:"250px",
          border: "3px 2px 2px solid grey",
          display: "flex",
          backgroundColor:"white",
          alignItems: "center",
          justifyContent: "center",
          margin:"30px 30px 30px 30px",
          borderRadius: "4px",
          boxShadow: "0px 2px 4px soli",
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded Image" width="100%" height="100%" />
        ) : (
          <p>No image uploaded</p>
        )}
      </div>
      
      <div></div>
      <Col >
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
    </Col>
        <Col>
        <Row>
          <div style={{backgroundColor:"black"}}>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </div>
        </Row>
        </Col>
      </Row>
      </Container>
    </div>
  );
};





const styles = {
  container: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/5566879.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#F1F1F1",
    padding: "20px",
    boxShadow: "0px 2px 4px black",
  },
  input: {
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px black",
    width: "50%",
    height: "30px",
    padding: "8px",
    margin: "2px 10px 5px 10px",
    marginBottom: "16px",
    fontSize: "16px",
    color: "#333333",
    border: "1px solid #CCCCCC",
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
  room: {
    display: "flex",
    padding:"75px",
    maxWidth: "100%",
    justifyContent: "center",
  }
};