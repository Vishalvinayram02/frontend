import './globals.css'
import { Basic, Inter } from 'next/font/google'
import Navbars from './navbar'
import BasicExample from './navbar'
import { Col, Container, Row } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Radiance AI',
  description: 'GeneratIVE AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{height:"100%"}}>
      <body className={inter.className} style={{height:"100%"}}>
        <BasicExample />
        {children}
       
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" ></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script>

<script>var Alert = ReactBootstrap.Alert;</script>
        </body>
        
    </html>
  )
}
 const styles =
 {
  
  /* Create two equal columns that floats next to each other */
  column: {
    float: "left",
    width: "50%",
    padding: "10px",
    height: "300px", /* Should be removed. Only for demonstration */
  }
  
  /* Clear floats after the columns */
  
 }