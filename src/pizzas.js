// Datos de ejemplo: el archivo de apoyo original no venía junto a la pauta.
const images = [
  'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
  'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
  'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
]

export const pizzas = [
  { id: 'P001', name: 'Napolitana', price: 5950, ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'], img: images[0] },
  { id: 'P002', name: 'Española', price: 6950, ingredients: ['mozzarella', 'chorizo', 'pimentón'], img: images[1] },
  { id: 'P003', name: 'Pepperoni', price: 6950, ingredients: ['mozzarella', 'pepperoni', 'orégano'], img: images[2] },
  { id: 'P004', name: 'Cuatro quesos', price: 7950, ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'], img: images[1] },
  { id: 'P005', name: 'Vegetariana', price: 6450, ingredients: ['mozzarella', 'tomates', 'champiñones', 'aceitunas'], img: images[0] },
  { id: 'P006', name: 'Pollo BBQ', price: 7950, ingredients: ['mozzarella', 'pollo', 'cebolla', 'salsa BBQ'], img: images[2] },
]

export const pizzaCart = pizzas.slice(0, 3).map((pizza) => ({ ...pizza, count: 1 }))
