"use client"
import './page.module.css'
import React, { ChangeEvent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SSRProvider } from "react-bootstrap";
import "./page.module.css";
import BasicExample from "./navbar";

export default function MyComponent() {
  const [formData, setFormData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    <SSRProvider>
      <div style={styles.container}>
        <Container fluid>
          <Row lg={3} style={styles.room}>
            <Col sm={12}>
              <div
                style={{
                  width: "100%",
                  padding: "2% 1% 1% 1%",
                  margin: "4px 0 0px 30px",
                  border: "3px solid red",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    height: "60%",
                    minWidth: "250px",
                    minHeight: "250px",
                    border: "3px 2px 2px solid grey",
                    display: "flex",
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "30px 30px 30px 30px",
                    borderRadius: "4px",
                    boxShadow: "0px 2px 4px soli",
                  }}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Uploaded Image"
                      width="100%"
                      height="100%"
                    />
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
                    Click me
                  </button>
                </Col>
              </div>
            </Col>
            <Col sm={12}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  minWidth: "250px",
                  minHeight: "250px",
                  marginTop: "5%",
                  border: "1px solid grey",
                  display: "flex",
                  margin: "10px 10px 10px 10px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  boxShadow: "0px 2px 4px soli",
                }}
              >
                <div>
                  
                  <div>
                    <input
                      type="text"
                      value={formData}
                      onChange={handleInputChange}
                      style={styles.inputs}
                    />
                  </div>
                  <img src="/images.jpeg" style={styles.smallimage} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </SSRProvider>
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
    padding: "20px",
    boxShadow: "0px 2px 4px black",
  } as React.CSSProperties,
  smallimage: {
    height: "30px",
    width: "30px",
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
  inputs: {
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px black",
    width: "100%",
    height: "20vh",

    padding: "8px",
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
    padding: "75px",
    maxWidth: "100%",
    justifyContent: "center",
  },
};