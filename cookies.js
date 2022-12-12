
function parseHTML(html) {
  const t = document.createElement("template");
  t.innerHTML = html;
  return t.content;
}

window.onload = function () {
  const styles = parseHTML(`<style>
  #back-container{
    width: 30%;
    cursor: pointer;
  }
  .logo-modal-cookies img {
    width: 150px;
    padding: 25px 0;
  }
  .copy-cookies {
    font-size: 12px;
  }
  .switch {
    position: relative !important;
    display: inline-block !important;
    width: 50px !important;
    height: 24px !important;
  }

  .switch input {
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
  }

  .slider {
    position: absolute !important;
    cursor: pointer !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background-color: #ccc !important;
    -webkit-transition: .4s !important;
    transition: .4s !important;
  }

  .slider:before {
    position: absolute !important;
    content: "" !important;
    height: 16px !important;
    width: 16px !important;
    left: 4px !important;
    bottom: 4px !important;
    background-color: white !important;
    -webkit-transition: .4s !important;
    transition: .4s !important;
  }

  input:checked+.slider {
    background-color: #248c59 !important;
  }

  input:focus+.slider {
    box-shadow: 0 0 1px #248c59 !important;
  }

  input:checked+.slider:before {
    -webkit-transform: translateX(26px) !important;
    -ms-transform: translateX(26px) !important;
    transform: translateX(26px) !important;
  }

  .slider.round {
    border-radius: 34px !important;
  }

  .slider.round:before {
    border-radius: 50% !important;
  }

  button.close {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 0;
    z-index: 1;
  }

  .modal-header {
    border: 0;
  }

  .modal-footer {
    padding: 15px 0;
  }

  .btn {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
  }

  .btn-success {
    background-color: #248c59;
    border-color: #248c59;
  }

  .btn-success:hover, .btn-success:focus  {
    background-color: #2a6548;
    border-color: #2a6548;
  }

  .btn-dark {
    background-color: #464e57;
    border-color: #464e57;
  }

  .btn-dark:hover, .btn-dark:focus {
    background-color: #464e57;
    border-color: #464e57;
  }

  .opt-container p{
      font-size: 12px;
    }
</style>`);
  const cookiesHTML =
    parseHTML(`<div class="modal" tabindex="-1" role="dialog" id="cookieNotice">
    <div class="modal-dialog" role="document">
      <div class="modal-content px-3">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </span>
        </button>

        <div class="modal-body">

          <div id = "back-container" style="display:none">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#ccc" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
              <span>volver</span>
          </div>

          <div class="logo-modal-cookies">
            <img src="assets/images/logo-chronos.svg">
          </div>

          <h6 class="mb-4 mt-3">Consentimiento de cookies</h6>
          <p class="copy-cookies">En nuestro sitio web, utilizamos servicios (incluso de proveedores externos) que nos ayudan a mejorar nuestra presencia en línea. Las categorías de cookies son utilizadas por nosotros y pueden ser administradas en la configuración de cookies. Necesitamos su consentimiento antes de poder utilizar estos servicios.</p>
          <p class="copy-cookies" id = "second-paragraph" >Alternativamente, puede hacer clic para rechazar el consentimiento o acceder a información más detallada y cambiar sus preferencias antes de dar su consentimiento. Sus preferencias se aplicarán únicamente a este sitio web. Puede cambiar sus preferencias en cualquier momento regresando a este sitio o visitando nuestra <a href="/politica-de-privacidad" style="text-decoration: underline;">política de privacidad</a>.
          </p>

          <div id="check-buttons-principal">

            <div class="d-flex justify-content-between mt-4">
              <p style="font-size:14px"><b>Necesarias</b></p>
              <label class="switch">
                <input type="checkbox" checked disabled>    
                <span class="slider round"></span>
              </label>
            </div>

            <div class="opt-title-children" id="cookies-opt-children-1" >
              <p class="copy-cookies">Las cookies necesarias ayudan a que un sitio web sea utilizable al habilitar funciones básicas como la navegación de páginas y el acceso a áreas seguras del sitio web. El sitio web no puede funcionar correctamente sin estas cookies.</p>
            </div>

            <div class="d-flex justify-content-between mt-4">
              <p style="font-size:14px" class="check-buttons-principal">
                <b>Analíticas y estadísticas</b>
              </p>
              <label class="switch">
                <input type="checkbox" id = "adobe-rolex-check1"  >    
                <span class="slider round"></span>
              </label>
            </div>
          
            <div class="opt-title-children" id="cookies-opt-children-1" >
                <p class="copy-cookies">Estas cookies nos permiten medir el tráfico de visitantes. También nos ayudan a comprender qué productos y acciones son más populares.</p>
            </div>

          </div>
            
          <div id="cookie-options-wrap" class="mt-5 mb-4" style="display:none">
            <div class="opt-container" style="font-size:12px">
            
              <h6 class="mb-4">Gestionar preferencias</h6>
              <div class="d-flex justify-content-between mt-4" id="cookies-opt-1">
                <p style="font-size:14px"><b>Rolex (Analíticas y estadísticas)</b></p>
                <label class="switch">
                  <input type="checkbox" id="adobe-rolex-check2">    
                  <span class="slider round"></span>
                </label>
              </div>

              <div class="opt-title-children" id="cookies-opt-children-1" >
                <p>
                  <b>Más información:</b></br>
                  <a href="https://www.rolex.com/legal-notices/cookies.html" target="_blank">https://www.rolex.com/legal-notices/cookies.html</a>
                  </br>
                  <a href="https://www.adobe.com/privacy/policy.html" target="_blank">https://www.adobe.com/privacy/policy.html</a>
                  </br>
                  <a href="https://contentsquare.com/gb-en/privacy-center/" target="_blank">https://contentsquare.com/gb-en/privacy-center/</a>
                </p>
              </div>
              
            </div>
  
          </div>
        </div>

        <div class="modal-footer d-flex justify-content-center">

          <button type="button" class="btn flex-fill" data-dismiss="modal" id="cookie-decline-btn">Rechazar</button> 
         
          <button type="button" class="btn btn-dark flex-fill"  id="cookie-personalizar-btn">Personalizar</button>
          
          <button type="button" class="btn btn-dark flex-fill"  id="cookie-save-btn" style="display:none">Guardar y salir</button>
          
          <button type="button" class="btn btn-success flex-fill"  id="cookie-save-btnAceptarTodas" style="display:none">Aceptar todas</button>
          
          <button type="button" class="btn btn-success flex-fill" id="cookie-accept-btn">Aceptar todas</button>
        </div>
      </div>
    </div>
    
  </div>
  `);



  /*  Todo el codigo de "comportamiento" de javascript  */
  document.body.append(styles);
  document.body.append(cookiesHTML);

  /* funciones auxiliares globales ---> */

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function activarTrackingAdobeSi(b) {
    if (b) {
      _satellite.setVar("Analyticsconsent", "true");
      _satellite.track("pageView");
    }
  }

  function desactivarTrackingAdobeSi(b) {
    if (b) {
      _satellite.setVar("Analyticsconsent", "false");
    }
  }

  function activarTrackingAdobe() {
    _satellite.setVar("Analyticsconsent", "true");
    _satellite.track("pageView");
  }

  function desactivarTrackingAdobe() {
    _satellite.setVar("Analyticsconsent", "false");
  }


  /* <---- */



  /* Seccion Configuracion por defecto ---> */

  //variables para manejar efectos: la primera es para verificar la ubicacion (en URL), y la segunda para ver si los switchs estan activados o no.

  const isARolexPage = window.location.href.includes("/rolex");

  (localStorage.getItem('cookieButtonClick') === null) ? localStorage.setItem('cookieButtonClick', undefined) : null;

  /* se establece rlx consent como false*/
  if (localStorage.getItem('cookieButtonClick') === 'undefined') setCookie("rlx-consent", false, 30);

  // Muestra el modal cuando el usuario nunca toco alguno de los botones de confirmacion o rechazo. 
  if (localStorage.getItem('cookieButtonClick') === 'undefined') $("#cookieNotice").modal("show");

  /* Si el usuario ya aceptó la cookie, y esta en la pagina de /rolex, se activa el tracking. */

  if (isARolexPage && getCookie("rlx-consent") === "true") {
    activarTrackingAdobe();
  }
  else if (isARolexPage && getCookie("rlx-consent") === "false") desactivarTrackingAdobe();



  /* <---- */


  /* Seccion del inicio del modal, sin contar boton PERSONALIZAR ----> */

  //BOTON ACEPTAR TODAS
  function acceptAll() {
      window.location.reload();

      localStorage.setItem('cookieButtonClick', true);
      localStorage.setItem('adobe analytics', 'aceptado');

      setCookie("rlx-consent", true, 30);

      activarTrackingAdobeSi(isARolexPage);
    

  }

  //BOTON RECHAZAR
  function declineCookieConsent() {

    window.location.reload();
    localStorage.setItem('adobe analytics', 'denegado');
    localStorage.setItem('cookieButtonClick', true);

    setCookie("rlx-consent", false, 30);
    desactivarTrackingAdobeSi(isARolexPage);

  }

  /*<---- */


  /* Seccion del boton PERSONALIZAR ----> */

  //boton PERSONALIZAR
  function personalizarCookies() {

    document.getElementById("check-buttons-principal").style.display = "none";
    document.getElementById("second-paragraph").style.display = "none";
    document.getElementById("cookie-options-wrap").style.display = "block";
    document.getElementById("cookie-personalizar-btn").style.display = "none";
    document.getElementById("cookie-save-btn").style.display = "block";
    document.getElementById("cookie-save-btnAceptarTodas").style.display = "block";
    document.getElementById("cookie-accept-btn").style.display = "none";
    document.getElementById("cookie-decline-btn").style.display = "none";
    document.getElementById("back-container").style.display = "block";

    if (document.getElementById("adobe-rolex-check2").checked) {
      document.getElementById("adobe-rolex-check2").checked = true;
    }
  }


  //boton GUARDAR Y SALIR


  function acceptCookieConsent() {

    window.location.reload();

    if (document.getElementById("adobe-rolex-check2").checked) {

      localStorage.setItem('adobe analytics', 'aceptado');
      localStorage.setItem('cookieButtonClick', true);

      setCookie("rlx-consent", true, 30);
      activarTrackingAdobeSi(isARolexPage);

    }
    else {
      localStorage.setItem('cookieButtonClick', true);
      localStorage.setItem('adobe analytics', 'denegado');
      setCookie("rlx-consent", false, 30);
      desactivarTrackingAdobeSi(isARolexPage);
    }
  }

  //Boton de aceptar todas dentro de la personalizacion 
  function acceptAllCustomizeCookies() {

    window.location.reload()

    localStorage.setItem('adobe analytics', 'aceptado');
    localStorage.setItem('cookieButtonClick', true);

    setCookie("rlx-consent", true, 30);
    activarTrackingAdobeSi(isARolexPage);

  }

  //Boton de consentimiento de cookies en /politica-de-privacidad

  //boton VOLVER
  function backToMain() {

    document.getElementById("check-buttons-principal").style.display = "block";
    document.getElementById("second-paragraph").style.display = "block";
    document.getElementById("cookie-options-wrap").style.display = "none";
    document.getElementById("cookie-personalizar-btn").style.display = "block";
    document.getElementById("cookie-save-btn").style.display = "none";
    document.getElementById("cookie-save-btnAceptarTodas").style.display = "none";
    document.getElementById("cookie-accept-btn").style.display = "block";
    document.getElementById("cookie-decline-btn").style.display = "block";
    document.getElementById("back-container").style.display = "none";

    if (document.getElementById("adobe-rolex-check2").checked) {
      document.getElementById("adobe-rolex-check1").checked = true;
    }
    else {
      document.getElementById("adobe-rolex-check1").checked = false;
    }
  }
  /* <---- */


  //Seccion de politica de privacidad en /politica-de-privacidad  ----> */

  //BOTON CONSENTIMIENTO DE COOKIES
  function consentimientoDeCookies() {
    $("#cookieNotice").modal("show");
  }

  /* <---- */

  //comportamiento de los botones para cuando se muestra y se esconde el modal.
  if (localStorage.getItem('adobe analytics') == 'aceptado') {

    document.getElementById("adobe-rolex-check1").checked = true;
    document.getElementById("adobe-rolex-check2").checked = true;

  }



  //-----------------------------------------------------------------------------------

  document
    .getElementById("cookie-accept-btn")
    .addEventListener("click", acceptAll);
  document
    .getElementById("cookie-save-btnAceptarTodas")
    .addEventListener("click", acceptAllCustomizeCookies);
  document
    .getElementById("cookie-decline-btn")
    .addEventListener("click", declineCookieConsent);
  document
    .getElementById("cookie-personalizar-btn")
    .addEventListener("click", personalizarCookies);
  document
    .getElementById("cookie-save-btn")
    .addEventListener("click", acceptCookieConsent);
  document.getElementById("back-container")
    .addEventListener("click", backToMain);
  document.getElementById("consent-btn")
    .addEventListener("click", consentimientoDeCookies);



};
