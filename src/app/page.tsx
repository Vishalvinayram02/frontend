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
  const [bool,setBool] = useState(false);

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
                  border: "3px solid GREY",
                  borderRadius: "12px",
                  textAlign:"center"
                }}
              >   <h4 style={styles.small_heading}>Step 1</h4>
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
                    <div>
                                                <input type='checkbox' />
                    <img
                      src={imageUrl}
                      alt="Uploaded Image"
                      width="100%"
                      height="100%"
                    />
                    </div>
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
            <Col sm={8}>
              
                <div style={{
                  padding:"2% 2% 2% 2%",
                  margin:"5px 5px 5px 5px",
                  border:"1px solid black",
                  width:"fit-content",
                  borderRadius:"5px"
                }}>
                                 

                
                    <div
                      style={styles.inputs}
                    ><h4 style={styles.small_heading}>Step2</h4>
                      <h3 style={styles.main_headinf}>Select the product image from this</h3>
                       <Col>
                       {imageUrl ? (
                        <div>
                    <img
                      src={imageUrl}
                      alt="Uploaded Image"
                      style={styles.smallimage}
                    />
                    </div>
                  ) : (
                    <p></p>
                  )}
                                        {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Uploaded Image"
                      style={styles.smallimage}
                    />
                  ) : (
                    <p></p>
                  )}
                                        </Col>
                      </div>
                    <div style={{marginLeft:"20px",marginTop:"10px",marginBottom:"10px"}}>
                    <h4 style={styles.small_heading}>Step 3</h4>
                    <h2 style={styles.main_headinf}> Select descriptiotn for the event</h2>
                    </div>
                   <div style={styles.description} >Id amet sunt proident non eiusmod aliquip exercitation consequat. Nostrud veniam exercitation et reprehenderit mollit. Reprehenderit eu proident excepteur elit aliqua duis est pariatur cupidatat enim anim esse dolore. Mollit occaecat culpa ut esse cillum minim id do sunt incididunt. Ea culpa non eiusmod incididunt sunt adipisicing veniam sint ex.</div>
                   <div style={styles.description}>Id amet sunt proident non eiusmod aliquip exercitation consequat. Nostrud veniam exercitation et reprehenderit mollit. Reprehenderit eu proident excepteur elit aliqua duis est pariatur cupidatat enim anim esse dolore. Mollit occaecat culpa ut esse cillum minim id do sunt incididunt. Ea culpa non eiusmod incididunt sunt adipisicing veniam sint ex.</div>
                    

          <div>
          {imageUrl ? (
                    <img
                      src={imageUrl}
                      style={styles.descimage}
                    />
                  ) : (
                    <p>+</p>
                  )}
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
  description:
  {border:"2px solid blue",fontSize:"8px",color:"black",padding:"4px 4px 4px 4px",
  borderRadius:"5px"
},
  contiainer_border:
  {
    backgroundColor:"white",
    width: "100%",
    height:"20px",
    padding: "2% 1% 1% 1%",
    margin: "4px 0 0px 30px",
    border: "3px solid GREY",
    borderRadius: "12px",
    textAlign:"center"
  } as React.CSSProperties,
  main_headinf:
  {
    fontSize:"1rem",color:"grey"
  },
  small_heading:
  {
    marginTop:"5px",
    marginBottom:"5px",
    marginRight:"5px",
        fontSize:"8px",
    color:"grey",
    fontWeight:"400"
  },
  container: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/5566879.jpg')",
    backgroundRepeat: "4",
    backgroundSize: "cover",
    padding: "20px",
    boxShadow: "0px 2px 4px black",
  } as React.CSSProperties,
  smallimage: {
    marginLeft:"10px",
    marginRight:"10px",
    height: "30px",
    width: "30px",
  },
  descimage: {
    marginTop:"5px",
    marginBottom:"5px",
    maxHeight:"150px",
        marginLeft:"5px",
    marginRight:"5px",
    height: "100%",
    width: "100%",
  },
  input: {
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px black",
    width: "50%",
    height: "20px",
    padding: "8px",
    margin: "2px 10px 5px 10px",
    marginLeft: "2%",
    fontSize: "16px",
    color: "#333333",
    border: "1px solid #CCCCCC",
    outline: "none",
  },
  inputing: {
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px black",
    height: "10vh",
    padding: "8px",
    marginBottom: "5px",
    fontSize: "16px",
    color: "#333333",
    border: "1px solid #CCCCCC",
    outline: "none",
  },
  inputs: {
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px black",
    height: "15vh",
    padding: "8px",
    marginRight:"2%",
    marginLeft: "2%",
    fontSize: "1em",
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