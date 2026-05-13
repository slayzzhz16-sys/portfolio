import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:imad.bmk.91@gmail.com?subject=${encodeURIComponent(`Message de ${name}`)}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-padding bg-noise relative">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-4xl md:text-6xl mb-4"
        >
          {t("Travaillons ", "Let's work ")}
          <span className="text-gradient-primary">{t("ensemble", "together")}</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-muted-foreground font-body text-base md:text-lg mb-12"
        >
          {t(
            "Une idée, un projet, ou juste envie de discuter ? Envoyez-moi un message.",
            "An idea, a project, or just want to chat? Send me a message."
          )}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl"
        >
          <input
            type="text"
            placeholder={t("Votre nom", "Your name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            className="w-full px-6 py-5 rounded-2xl bg-surface-elevated border border-border text-foreground font-body text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder={t("Votre email", "Your email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={255}
            className="w-full px-6 py-5 rounded-2xl bg-surface-elevated border border-border text-foreground font-body text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder={t("Votre message...", "Your message...")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={1000}
            rows={6}
            className="w-full px-6 py-5 rounded-2xl bg-surface-elevated border border-border text-foreground font-body text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            {t("Envoyer", "Send")} <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Imad Belmekki
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
