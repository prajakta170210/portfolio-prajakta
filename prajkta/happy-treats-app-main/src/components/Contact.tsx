import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSend = () => {
    toast.success("Thank you! Your message has been sent.");
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-8"
      >
        Contact Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center space-y-3 mb-8"
      >
        <p className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin size={18} className="text-primary" /> Sweet Bite Bakery, Nagpur, Maharashtra
        </p>
        <p className="flex items-center justify-center gap-2 text-muted-foreground">
          <Phone size={18} className="text-primary" /> 9876543210
        </p>
        <p className="flex items-center justify-center gap-2 text-muted-foreground">
          <Mail size={18} className="text-primary" /> sweetbitebakery@gmail.com
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto space-y-3"
      >
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
        <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
        <button onClick={handleSend} className="w-full py-3 rounded-lg bakery-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </motion.div>
    </section>
  );
};

export default Contact;
