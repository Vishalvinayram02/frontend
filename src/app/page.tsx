"use client"
import './page.module.css'
import React, { ChangeEvent, useState } from "react";
import { Col, Container, Fade, Row } from "react-bootstrap";
import { SSRProvider } from "react-bootstrap";
import "./page.module.css";
import BasicExample from "./navbar";
import { Cinzel } from 'next/font/google';

export default function MyComponent() {
  const [formData, setFormData] = useState("");
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const [check,setBool] = useState(false);
  const [check2,setBool2] = useState(false);
  const [check3,setBool3] = useState(false);
  const [check4,setBool4] = useState(false)




  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
    console.log(event.target.value);
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageUrl([result]); // Update to set imageUrl as an array
      };
  
      reader.readAsDataURL(file);
    }
  };
  



  const handleClick = () => {
    // Fetch the image using the API
    Promise.all([
      fetch("https://picsum.photos/800"),
      fetch("https://picsum.photos/800"),
      fetch("https://picsum.photos/800"),
      fetch("https://picsum.photos/800"),
    ])
      .then((responses) => Promise.all(responses.map((response) => response.url)))
      .then((imageUrls) => {
        setImageUrl(imageUrls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
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
                  backgroundColor :"grey",
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
                      <Row>
                        <Col>
                                                <input type='checkbox' 
                                                checked={check}
  onChange={(event) => setBool(event.target.checked)}/>
                    <img
                      src={imageUrl[0]}
                      alt="Uploaded Image"
                      width="150px"
                      height="150px"
                    />
                     <input type='checkbox' 
                                                checked={check2}
  onChange={(event) => setBool2(event.target.checked)}/>
                    <img
                      src={imageUrl[1]}
                      alt="Uploaded Image"
                      width="150px"
                      height="150px"
                    />
                    </Col>
                    </Row>
                    <Row>
                     <Col> <input type='checkbox' checked={check3}
  onChange={(event) => setBool3(event.target.checked)}/>
                    <img
                      src={imageUrl[2]}
                      alt="Uploaded Image"
                      width="150px"
                      height="150px"
                    />
                      <input type='checkbox' checked={check4}
  onChange={(event) => setBool4(event.target.checked)} />
                    <img
                    src={imageUrl[3]}
                    alt="Uploaded Image"
                    width="150px"
                    height="150px"
                  />
                  </Col>
                  </Row>
                    </div>
                  ) : (
                    <p>No image uploaded</p>
                  )}
                </div>

                <div> <input type="file" accept="image/*" onChange={handleUpload} /></div>
                <button onClick={handleClick} >
                  <img src='/Screenshot_2023-06-14_10-00-42.png'style={styles.smallimage} />

                  </button>
                  <input
                    type="text"
                    value={formData}
                    onChange={handleInputChange}
                    style={styles.input}
                    
                  />

               
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
                                 

                                 <hr />

                    <div
                      style={styles.inputs}
                    ><h4 style={styles.small_heading}>Step2</h4>
                      <h3 style={styles.main_headinf}>Select the product image from this</h3>
                      <Col>
                       {imageUrl && check ? (
                    
                          
                    <img
                      src={imageUrl[0]}
                      alt="Uploaded Image"
                      style={styles.smallimage}
                    />
                    
                  ) : (
                    <p></p>
                  )}
                                        {imageUrl && check2 ? (
                    <img
                      src={imageUrl[1]}
                      alt="Uploaded Image"
                      style={styles.smallimage}
                    />
                  ) : (
                    <p></p>
                  )}
                  {imageUrl && check3 ? (
                    
                          
                    <img
                      src={imageUrl[2]}
                      alt="Uploaded Image"
                      style={styles.smallimage}
                    />
                    
                  ) : (
                    <p></p>
                  )}
                  {imageUrl && check4 ? (
                    
                          
                    <img
                      src={imageUrl[3]}
                      alt="Uploaded Image"
                      style={styles.smallimage}
                    />
                    
                  ) : (
                    <p></p>
                  )}
                                        </Col>
                      </div>
                      <hr />
                    <div style={{marginLeft:"20px",marginTop:"10px",marginBottom:"10px"}}>

                    <h4 style={styles.small_heading}>Step 3</h4>
                    <br />
                    <h2 style={styles.main_headinf}> Select descriptiotn for the event</h2>
                    </div>
                   <div style={styles.description} >Id amet sunt proident non eiusmod aliquip exercitation consequat. Nostrud veniam exercitation et reprehenderit mollit. Reprehenderit eu proident excepteur elit aliqua duis est pariatur cupidatat enim anim esse dolore. Mollit occaecat culpa ut esse cillum minim id do sunt incididunt. Ea culpa non eiusmod incididunt sunt adipisicing veniam sint ex.</div>
                   <hr />
<div style={styles.description}>Id amet sunt proident non eiusmod aliquip exercitation consequat. Nostrud veniam exercitation et reprehenderit mollit. Reprehenderit eu proident excepteur elit aliqua duis est pariatur cupidatat enim anim esse dolore. Mollit occaecat culpa ut esse cillum minim id do sunt incididunt. Ea culpa non eiusmod incididunt sunt adipisicing veniam sint ex.</div>
                    

          <div>
          {imageUrl && check? (
                    <img
                      src={imageUrl[0]}
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
  } as React.CSSProperties,
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
    width: "98%",
    height: "5vh",
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
    width:"fit-content",
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
