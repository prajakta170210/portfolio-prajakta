import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=1200&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80",
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1200&q=80",
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1200&q=80",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div id="home" className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Bakery showcase"
        />
      </AnimatePresence>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
