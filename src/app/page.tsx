
"use client"
import "./page.module.css"
import { ChangeEvent,useState } from "react";
import BasicExample from "./navbar";
import { Col, Container, Row } from "react-bootstrap";


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
    // <Container>
    //   <Row>
    // <div style={styles.container}>
    //   <Col>

    //   </Col>
     
    // </Container>
    <Container fluid style={{backgroundColor:"grey" ,margin:"10% 20% 20% 10%" ,width:"80%",} }>
    <Row lg={3} style={styles.room}>
      <Col sm={8}>
      <div style={{backgroundColor:'red' }}>
    <div
        style={{
          height:"60%",
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
    <Col sm={8}>    <div style={{
      
          height:"90%",
          width: "20%",
          // maxHeight:"400px",
          // maxWidth:"400px",
          minWidth:"250px",
          minHeight:"250px",
          marginTop:"5%",
          border: "3px 2px 2px solid grey",
          display: "flex",
          backgroundColor:"yellow",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
          boxShadow: "0px 2px 4px soli",
        }}>


      </div>
      </Col>

    </Row>
    </Container>
    
  );
}

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
    width: "100%",
    maxWidth: "100%",
    justifyContent: "center",
  }
};