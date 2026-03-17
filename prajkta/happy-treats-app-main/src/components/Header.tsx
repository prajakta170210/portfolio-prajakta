import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CartItem {
  name: string;
  price: number;
}

interface HeaderProps {
  cart: CartItem[];
}

const Header = ({ cart }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bakery-gradient text-primary-foreground text-center py-6 px-4 relative"
      >
        <h1 className="text-2xl md:text-4xl font-display font-bold">🍰 Sweet Bite Bakery</h1>
        <p className="text-sm md:text-lg opacity-90 mt-1">Fresh Cakes Made With Love</p>
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-4 top-6 md:top-7 flex items-center gap-1 text-primary-foreground hover:opacity-80 transition-opacity"
        >
          <ShoppingCart size={22} />
          <span className="bg-primary-foreground text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed top-20 right-4 w-72 bg-background rounded-lg shadow-2xl p-4 z-50 border border-border"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-display font-bold text-lg">Your Cart</h3>
              <button onClick={() => setOpen(false)}>
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-muted-foreground text-sm">Cart is empty</p>
            ) : (
              <ul className="space-y-2 max-h-48 overflow-y-auto">
                {cart.map((item, i) => (
                  <li key={i} className="text-sm flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
