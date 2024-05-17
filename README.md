# <p align="center">API para pruebas con Alurageek</p>

## Como usar la API de prueba

1. Descargar el proyecto y subirlo a su repositorio o clonarlo.
2. Actualice o use el [`db.json`](./db.json) predeterminado en el repositorio en caso de ser necesario.
3. Regístrese o inicie sesión en [Vercel](https://vercel.com).
4. Desde el panel de Vercel, haga clic en "**+ Add New**" y luego en "**Importar**" su repositorio.
5. En la pantalla "**Configurar proyecto**", deje todo como predeterminado y haga clic en "**Deploy**".
6. Espere hasta que se complete la implementación y su servidor JSON personalizado estará listo para funcionar.
7. y ya obtenedra la url que se puede usar en lugar de la URL local.

## Ejemplo:

En vez de usar la URL servidor local http://localhost:3000/products

      const sendProduct = (name, price, image) => {
      return fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name,
              price,
              image,
          })
      })
      .then((res) => res.json())
      .catch((err) => console.log(err));{
      };
      }

Se usaria la URL proporcionada por Vercel:

      const sendProduct = (name, price, image) => {
      return fetch("[URL de  vercel]/api/products", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name,
              price,
              image,
          })
      })
      .then((res) => res.json())
      .catch((err) => console.log(err));{
      };
      }
    
    
return fetch("[Se quita los corchetes y colocar la URL de vercel**]/api/products",

## Formato del `db.json`

```json
{
 "products": [
        {
      "name": "Laptop Notebook HP 350",
      "price": "1300",
      "image": "https://i5.walmartimages.com/asr/57bb38e9-90a1-4532-8f4b-0e76e4538846.b8710b156887abf438daa8aa6905b47d.jpeg",
      "id": "1"
    },
    {
      "name": "Laptop Notebook HP 550",
      "price": "2000",
      "image": "https://i5.walmartimages.com/asr/57bb38e9-90a1-4532-8f4b-0e76e4538846.b8710b156887abf438daa8aa6905b47d.jpeg",
      "id": "3"
    }
 ]
}
