import './App.css'
import logo from './assets/Vazthra.jpg' // your Vazthra poster/logo

function App() {
  return (
    <div className="container">
      
      {/* Logo */}
      <img src={logo} alt="Vazthra" className="logo" />

      {/* Brand Name */}
      <h1 className="brand">VAZTHRA</h1>

      {/* Coming Soon Text */}
      <p className="coming shine">Coming Soon</p>

      {/* Tagline */}
      <p className="tagline">
        Crafted Elegance. Rooted in Tradition.
      </p>

     

    </div>
  )
}

export default App