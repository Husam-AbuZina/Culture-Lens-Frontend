import React from 'react'
import './Products.css'

const items = [
  {
    name: 'Syltherine',
    subtitle: 'Stylish cafe chair',
    price: 2500000, oldPrice: 3500000,
    badge: '-30%',
    img: '/images/Product1.jpg'
  },
  {
    name: 'Leviosa',
    subtitle: 'Stylish cafe chair',
    price: 2500000,
    overlay: true,
    img: '/images/Product2.jpg'
  },
  {
    name: 'Lolito',
    subtitle: 'Luxury big sofa',
    price: 7000000, oldPrice: 14000000,
    badge: '-50%',
    img: '/images/Product3.jpg'
  },
  {
    name: 'Respira',
    subtitle: 'Outdoor bar table and stool',
    price: 500000,
    badge: 'New',
    img: '/images/Product4.jpeg'
  },
  {
    name: 'Grifo',
    subtitle: 'Night lamp',
    price: 1500000,
    img: '/images/Product5.jpeg'
  },
  {
    name: 'Muggo',
    subtitle: 'Small mug',
    price: 150000,
    badge: 'New',
    img: '/images/Product6.jpg'
  },
  {
    name: 'Pingky',
    subtitle: 'Cute bed set',
    price: 7000000, oldPrice: 14000000,
    badge: '-50%',
    img: '/images/Product7.jpeg'
  },
  {
    name: 'Potty',
    subtitle: 'Minimalist flower pot',
    price: 500000,
    badge: 'New',
    img: '/images/Product8.jpeg'
  },
]

// simple “Rp” formatter like the mock
const formatRp = n =>
  'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export default function Products() {
  return (
    <section className="products">
      <header className="products-head">
        <h2>Our Products</h2>
      </header>

      <div className="products-grid">
        {items.map((p, i) => (
          <article className="product-card" key={i}>
            <figure className="media">
              <img src={p.img} alt={p.name} loading="lazy" />
              {p.badge && <span className={`badge ${p.badge === 'New' ? 'is-new' : 'is-sale'}`}>{p.badge}</span>}
              <div className="overlay">
                <button className="add">Add to cart</button>
                <div className="actions">
                  <button>Share</button>
                  <span>•</span>
                  <button>Compare</button>
                  <span>•</span>
                  <button>Like</button>
                </div>
              </div>
            </figure>

            <div className="info">
              <h3 className="name">{p.name}</h3>
              <p className="sub">{p.subtitle}</p>
              <div className="price">
                <strong>{formatRp(p.price)}</strong>
                {p.oldPrice && <s>{formatRp(p.oldPrice)}</s>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="more">
        <button className="show-more">Show More</button>
      </div>
    </section>
  )
}
