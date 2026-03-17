import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface CakeItem {
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const cakes: CakeItem[] = [
  { name: "Chocolate Cake", price: 500, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", category: "cake", rating: 5 },
  { name: "Strawberry Cake", price: 450, image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80", category: "cake", rating: 4 },
  { name: "Red Velvet Cake", price: 550, image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80", category: "cake", rating: 5 },
  { name: "Chocolate Pastry", price: 90, image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=600&q=80", category: "pastry", rating: 4 },
  { name: "Strawberry Pastry", price: 95, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80", category: "pastry", rating: 4 },
  { name: "Black Forest Cake", price: 520, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80", category: "special", rating: 5 },
];

interface MenuProps {
  onAdd: (name: string, price: number) => void;
}

const Menu = ({ onAdd }: MenuProps) => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = cakes.filter((c) => {
    const matchCategory = filter === "all" || c.category === filter;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = ["all", "cake", "pastry", "special"];

  return (
    <section id="menu" className="py-12 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-8"
      >
        Our Cakes & Pastries
      </motion.h2>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search cakes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
      </div>

      <div className="flex justify-center gap-2 md:gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn capitalize ${filter === cat ? "filter-btn-active" : ""}`}
          >
            {cat === "all" ? "All" : cat + "s"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((cake, i) => (
          <motion.div
            key={cake.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg card-hover"
          >
            <div className="overflow-hidden">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-44 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-display font-bold text-lg mb-1">{cake.name}</h3>
              <p className="text-accent text-lg font-bold mb-2">₹{cake.price}</p>
              <div className="flex justify-center gap-0.5 mb-3">
                {Array.from({ length: cake.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <button
                onClick={() => onAdd(cake.name, cake.price)}
                className="w-full py-2 rounded-md bakery-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
