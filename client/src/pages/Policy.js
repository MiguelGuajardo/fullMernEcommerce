import React from "react";
import Layout from "../components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row justify-content-center pt-2">
        <div className="col-md-10">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
        </div>
        <div className="col-md-10">
          <h2 className="text-center">TÉRMINOS Y CONDICIONES GENERALES</h2>
          <h4 className="pt-3">
            TÉRMINOS Y CONDICIONES DE USO DEL SITIO WEB DE ECOMMERCE APP
          </h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur!
          </p>
        </div>
        <div className="col-md-3">
          <ol>
            <li className="fw-bold">Propiedad Intelectual</li>
            <li className="fw-bold">Actividades Prohibidas</li>
            <li className="fw-bold">Restricciones de contenido</li>
            <li className="fw-bold">Comportamiento Ilegal</li>
            <li className="fw-bold">
              Declaración de Limitación de Responsabilidad
            </li>
            <li className="fw-bold">Alcance territorial del contenido</li>
            <li className="fw-bold">Privacidad</li>
            <li className="fw-bold">Restricciones de Edad</li>
            <li className="fw-bold">
              Compra de productos en el Sitio Web de Ecommerce App. Condiciones
              y procedimiento
            </li>
            <li className="fw-bold">
              Ecommerce App emitirá únicamente Facturas B - Consumidor Final,
              por las compras efectuadas en el Sitio Web de Ecommerce App.
            </li>
            <li className="fw-bold">Personalización</li>
            <li className="fw-bold">Devolución y Cambio de producto</li>
            <li className="fw-bold">Tiempos de Entrega</li>
            <li className="fw-bold">Entrega fallida</li>
            <li className="fw-bold">
              Derecho legal de Revocación de la Aceptación dentro de los 10 días
              de realizada la compra
            </li>
            <li className="fw-bold">Devolución y Cambio de producto</li>
            <li className="fw-bold">
              Devoluciones de Pedidos por Calidad, Producto Dañado o Defectuoso
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
