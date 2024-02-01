import React, { useEffect, useState, useContext } from "react";
import "./ShoppingBag.scss";
import { useParams } from "react-router-dom";
import { LogContext } from "../LogContext"; // Asegúrate de la ruta correcta a tu LogContext

const ShoppingBag = () => {
  const [carrito, setCarrito] = useState({});
  const { cartId } = useContext(LogContext);

  useEffect(() => {
    console.log("cartId:", cartId); // Agrega esta línea para imprimir el cartId
    fetch(`http://localhost:8080/api/carts/${cartId}`)
      .then((response) => response.json())
      .then((data) => {
        setCarrito(data);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      });
  }, [cartId]); // Agrega cartId como dependencia para que se vuelva a cargar cuando cambia

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.mensaje && carrito.mensaje.products && carrito.mensaje.products.length > 0 ? (
  <ul>
    {carrito.mensaje.products.map((producto, index) => (
      <li key={index}>
        <p>Título: {producto.id_prod.title}</p>
        <p>Descripción: {producto.id_prod.description}</p>
        <p>Precio: ${producto.id_prod.price}</p>
        <p>cantidad: {producto.quantity}</p>
      </li>
    ))}
  </ul>
) : (
  <p>El carrito está vacío.</p>
)}


    </div>
  );
      }  

export default ShoppingBag;
