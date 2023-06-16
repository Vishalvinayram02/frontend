import './globals.css'
import { Basic, Inter } from 'next/font/google'
import Navbars from './navbar'
import BasicExample from './navbar'

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
