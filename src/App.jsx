
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Aside from './components/Aside'
function App() {

  return (
    <main className='container'>
      <Header />
      <div className="content">
        <Aside />
        <Main />

      </div>
      <Footer />

    </main>
  )
}

export default App
