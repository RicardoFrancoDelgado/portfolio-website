import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  Linkedin,
  Github,
  Mail,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

const EMAIL_ADDRESS = "ricardodelgado693@gmail.com";

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Conecte-se comigo profissionalmente",
    href: "https://www.linkedin.com/in/ricardofrancodelgado-dev/",
    icon: Linkedin,
    iconBg: "from-blue-500 to-blue-700",
    hoverBorder: "hover:border-blue-400/60",
    hoverShadow: "hover:shadow-blue-500/20",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    description: "Veja meus projetos e contribuições",
    href: "https://github.com/RicardoFrancoDelgado",
    icon: Github,
    iconBg: "from-zinc-400 to-zinc-600",
    hoverBorder: "hover:border-zinc-400/60",
    hoverShadow: "hover:shadow-zinc-500/20",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    description: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: Mail,
    iconBg: "from-yellow-400 to-orange-500",
    hoverBorder: "hover:border-orange-400/60",
    hoverShadow: "hover:shadow-orange-500/20",
    external: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

function LinkCard({ link }) {
  const [copied, setCopied] = useState(false);
  const Icon = link.icon;
  const isEmail = link.id === "email";

  function handleCopyEmail(e) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <motion.div variants={cardVariants}>
      <motion.a
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative flex items-center gap-4 sm:gap-5 w-full p-4 sm:p-5 rounded-xl bg-zinc-800/60 border border-orange-500/15 backdrop-blur-sm transition-all duration-300 cursor-pointer ${link.hoverBorder} ${link.hoverShadow} hover:shadow-lg hover:bg-zinc-800/80`}
      >
        {/* Gradient glow behind icon */}
        <div className="relative shrink-0">
          <div
            className={`absolute inset-0 bg-linear-to-br ${link.iconBg} rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          />
          <div
            className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br ${link.iconBg} shadow-lg`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
            {link.label}
          </h3>
          <p className="text-xs sm:text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300 truncate">
            {link.description}
          </p>
        </div>

        {/* Action area */}
        <div className="flex items-center gap-2 shrink-0">
          {isEmail && (
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-orange-500/40 transition-all duration-300"
              title="Copiar email"
              type="button"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
              )}
            </motion.button>
          )}
          <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Bottom highlight line */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-orange-500 group-hover:w-4/5 transition-all duration-500 rounded-full" />
      </motion.a>

      {/* Copied feedback toast */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="mt-2 text-center text-xs text-green-400 font-medium"
        >
          ✓ Email copiado para a área de transferência!
        </motion.div>
      )}
    </motion.div>
  );
}

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
      <div className="w-full max-w-lg mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={headingVariants}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
              Contato
            </span>
          </motion.h2>
          <motion.p
            variants={subtitleVariants}
            className="text-base sm:text-lg text-white/60 max-w-md mx-auto"
          >
            Vamos conversar? Me encontre nas redes abaixo ou envie um email
            diretamente.
          </motion.p>
        </motion.div>

        {/* Linktree cards */}
        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="h-px w-12 bg-linear-to-r from-transparent to-orange-500/40" />

          <span className="h-px w-12 bg-linear-to-l from-transparent to-orange-500/40" />
        </motion.div>
      </div>
    </motion.section>
  );
}
