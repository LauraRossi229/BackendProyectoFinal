import React, { useEffect, useState, useContext } from "react";
import "./ShoppingBag.scss";
import { useParams } from "react-router-dom";
import { LogContext } from "../LogContext"; // Asegúrate de la ruta correcta a tu LogContext
import { Button, ListGroup } from 'react-bootstrap';

const ShoppingBag = () => {
  const [carrito, setCarrito] = useState({});
  const { cartId } = useContext(LogContext);

  useEffect(() => {
    fetch(`http://localhost:8080/api/carts/${cartId}`)
      .then((response) => response.json())
      .then((data) => {
        setCarrito(data);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      });
  }, [cartId]);

  const handleCantidadChange = (productoId, cantidad) => {
    // Implementa la lógica para cambiar la cantidad del producto en el carrito
  };

  const handleEliminarProducto = (productoId) => {
    // Implementa la lógica para eliminar un producto del carrito
  };

  const handleAceptarCompra = () => {
    // Implementa la lógica para procesar la compra
  };

  return (
    <div className="shopping-bag-container">
      <h2>Carrito de Compras</h2>
      {carrito.mensaje && carrito.mensaje.products && carrito.mensaje.products.length > 0 ? (
        <ListGroup>
          {carrito.mensaje.products.map((producto, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <div className="product-info">
                <div className="product-image">
                  <img src={producto.id_prod.thumbnails[0]} alt={producto.id_prod.title} />
                </div>
                <div className="product-details">
                  <h4>{producto.id_prod.title}</h4>
                  <p>{producto.id_prod.description}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="mr-4">Precio: ${producto.id_prod.price}</p>
                <p className="mr-4">
                  Cantidad: 
                  <input
                    type="number"
                    value={producto.quantity}
                    onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                  />
                </p>
                <Button variant="danger" onClick={() => handleEliminarProducto(producto.id)}>
                  Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>El carrito está vacío.</p>
      )}

      <div className="carrito-buttons mt-3">
        <Button variant="success" onClick={handleAceptarCompra}>Aceptar Compra</Button>
        <Button variant="primary" onClick={() => history.push("/products")}>Volver a Productos</Button>
      </div>
    </div>
  );
};

export default ShoppingBag;
