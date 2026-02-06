// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-screen flex items-center justify-center bg-zinc-900 will-change-transform backface-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Contato
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-white/85">
          Entre em contato comigo pelas redes sociais ou por email!
        </p>
      </div>
    </motion.section>
  );
}
