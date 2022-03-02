import React from "react";

//estilos
import {StyledModal} from '../Styles/StyledModal'

function TerminosyCondiciones({ cambiarEstado }) {
  function handleClick(e) {
    e.preventDefault();
    cambiarEstado(false);
  }

  return (
    <StyledModal>
      <h4>Pólitica de Privacidad</h4>
      <p>
        Esta Política de privacidad se actualizó por última vez el Febrero 28,
        2022. Gracias por unirse a RescuePets. En RescuePets ("RescuePets",
        "nosotros", "nos"), respetamos la privacidad del usuario y queremos que
        comprenda cómo recopilamos, utilizamos y compartimos los datos sobre él.
        Esta Política de privacidad aborda nuestras prácticas de recopilación de
        datos y describe los derechos del usuario en relación con sus datos
        personales. A menos que enlacemos con una política diferente o que
        indiquemos otra cosa, esta Política de privacidad se aplicará cuando el
        usuario visite o utilice el sitio web. También se aplicará a los
        posibles clientes de nuestros productos empresariales y de negocios. Al
        utilizar los Servicios, el usuario acepta los términos de esta Política
        de privacidad. El usuario no deberá utilizar los Servicios si no está de
        acuerdo con esta Política de privacidad o con cualquier otro acuerdo que
        rija el uso que hace de los Servicios.
      </p>
      <h5>1. Qué datos obtenemos</h5>
      <p>
        Recopilamos determinados datos del usuario directamente, como
        información que este introduce por sí mismo.
        <br />
        <p>
          Podremos recopilar diferentes datos del usuario o sobre este, en
          función de cómo utilice los Servicios. A continuación se muestran
          algunos ejemplos para ayudar al usuario a comprender mejor los datos
          que recopilamos. Al crear una cuenta y utilizar los Servicios,
          incluido a través de una plataforma de terceros, recopilamos los datos
          que el usuario nos proporciona directamente, lo que incluye:
        </p>
        <p>
          1.1. Datos de la cuenta:
          <br />
          Para utilizar determinadas funciones (como acceder enviar un
          formulario de adopción o tránsito), es necesario crear una cuenta de
          usuario, para lo que debemos recopilar y almacenar la dirección de
          correo electrónico, y la configuración de la cuenta del usuario. Para
          crear una cuenta de instructor, recopilamos y almacenamos el nombre,
          la dirección de correo electrónico y la configuración de la cuenta del
          usuario. Al utilizar ciertas funciones del sitio, es posible que al
          usuario se le solicite que envíe información adicional, como su
          profesión, su fecha de nacimiento y su número de teléfono. Al crear la
          cuenta, le asignaremos un número de identificación único. Almacenamos
          los datos que se han indicado anteriormente y los asociamos con la
          cuenta del usuario.
        </p>
        <br />
        <p>
          1.2. Cookies y herramientas de recopilación de datos
          <br />
          Utilizamos cookies, que son pequeños archivos de texto que el
          navegador almacena para recopilar, almacenar y compartir datos sobre
          las actividades del usuario en sitios web, lo que incluye RescuePsts.
          También nos permiten recordar información sobre las visitas del
          usuario a Udemy, como el idioma de preferencia, y facilitar el uso del
          sitio. Para obtener más información acerca de las cookies, visite
          https://cookiepedia.co.uk/all-about-cookies. 
          También podremos utilizar
          píxeles de seguimiento en los mensajes de correo electrónico para
          realizar un seguimiento de las tasas de entrega y apertura. Udemy y
          los proveedores de servicios que actúan en nuestro nombre (como Google
          Analytics y anunciantes de terceros) utilizan archivos de registro del
          servidor y herramientas de recopilación de datos automatizadas, como
          cookies, etiquetas, secuencias de comandos, enlaces personalizados,
          huellas digitales del dispositivo o navegador y señalizaciones web (en
          conjunto, "Herramientas de recopilación de datos") al acceder y
          utilizar los Servicios. Cuando el usuario utiliza los Servicios, de
          forma automática, estas Herramientas de recopilación de datos realizan
          un seguimiento de determinados Datos del sistema y Datos de uso (como
          se detalla en la sección 1) y los recopilan. En algunos casos,
          relacionamos los datos recopilados a través de esas Herramientas de
          recopilación de datos con otros datos que recopilamos, como se
          describe en esta Política de privacidad.
        </p>
      </p>
      <h5>2. Seguridad</h5>
      <p>
      Utilizaremos medidas de seguridad adecuadas en función del tipo y la confidencialidad de los datos que se almacenen. Al igual que ocurre con cualquier sistema con conexión a Internet, siempre existe un riesgo de acceso no autorizado, así que es importante proteger la contraseña del usuario y que este se ponga en contacto con nosotros si sospecha que se ha producido un acceso no autorizado a su cuenta.
      </p>
      <button onClick={(e) => handleClick(e)}>X</button>
    </StyledModal>
  );
}

export default TerminosyCondiciones;
