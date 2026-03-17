import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface CartItem {
  name: string;
  price: number;
}

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (name: string, price: number) => {
    setCart((prev) => [...prev, { name, price }]);
  };

  return (
    <>
      <SplashScreen show={showSplash} />
      <div className="min-h-screen">
        <Header cart={cart} />
        <Nav />
        <Slider />
        <Menu onAdd={addToCart} />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
