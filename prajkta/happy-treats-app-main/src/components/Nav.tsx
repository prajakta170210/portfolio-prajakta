import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-secondary text-center py-3 px-4 flex justify-center gap-6 md:gap-10"
    >
      <a href="#home" className="nav-link text-sm md:text-lg">Home</a>
      <a href="#menu" className="nav-link text-sm md:text-lg">Menu</a>
      <a href="#contact" className="nav-link text-sm md:text-lg">Contact</a>
    </motion.nav>
  );
};

export default Nav;
