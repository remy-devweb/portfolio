import Navbar from './Navbar'
import Footer from './Footer'
import ButtonToTop from './ButtonToTop'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ButtonToTop/>
      <Footer />
    </>
  )
}