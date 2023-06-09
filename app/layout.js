import Navbar from '@/Components/shared/Navbar'
import './globals.css'
import Footer from '@/Components/shared/Footer'


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
