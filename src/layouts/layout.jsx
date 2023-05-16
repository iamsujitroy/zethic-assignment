import './layout.css';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Layout({children}) {
  return (
    <main>
      <Header/>
      <section>{children}</section>
      <Footer/>
    </main>
  )
}
