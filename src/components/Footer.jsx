import React from 'react'
import "../index.css"


function Footer() {
  return (
    <footer className="footer">
    <div className="footer__addr">
      <h1 className="footer__logo font-montserrat font-bold">Bluebyte Inc.</h1>
          
      <h2 className="font-montserrat font-bold">Contacto</h2>
      
      <address>
        Calle 10 y 11 Sector Quinta Veléz, Cúcuta, Norte de Santander<br/>
        <a className="footer__btn" href="mailto:dagadev@proton.me">Envianos un correo!</a>
      </address>
    </div>

    <ul className="footer__nav">
        <li className="nav__item">     
            <ul className="nav__ul">
              <li>
                  <a href="#">¿Quiénes Somos?</a>
              </li>

              <li>
                  <a href="#">Nuestras Tiendas</a>
              </li>
            
              <li>
                  <a href="#">Programa de fidelidad</a>
              </li>
              
              <li>
                  <a href="#">Contacto para mayoristas</a>
              </li>
            </ul>
        </li>   

        <li className="nav__item">
          <h2 className="nav__title font-montserrat font-bold">Legal</h2>
      
          <ul className="nav__ul">
              <li>
                  <a href="#">Politicas de Privacidad</a>
              </li>
        
              <li>
                  <a href="#">Terminos y Condiciones</a>
              </li>
        
              <li>
                  <a href="#">Ubicacion en Mapa</a>
              </li>
          </ul>
        </li>
    </ul>

    <div className="legal">
      <p>&copy; 2022 Bluebyte. Todos los derechos reservados.</p>
    </div>
</footer>

    )
}

export default Footer