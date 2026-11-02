import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../pizzas'

function Home() {
  return (
    <main>
      <Header />
      <section className="pizza-grid" aria-label="Nuestras pizzas">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} {...pizza} />
        ))}
      </section>
    </main>
  )
}

export default Home
