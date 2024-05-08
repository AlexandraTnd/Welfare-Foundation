import Li from './Li.js'

function Ul () {
    return <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
    <Li href="#more" name="Call to action" />
    <Li href="#about" name="About" />
    <Li href="#contact" name="Contact" />
  </ul>
}

export default Ul;