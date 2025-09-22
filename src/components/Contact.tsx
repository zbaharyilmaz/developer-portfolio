"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { styles } from "@/utils/styles";
import { animations, viewport } from "@/hooks/useAnimations";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Your message has been sent successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "An error occurred. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Connection error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className={styles.backgroundOrb}>
        <motion.div
          animate={animations.backgroundOrb1.animate}
          transition={animations.backgroundOrb1.transition}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-dune-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={animations.backgroundOrb2.animate}
          transition={animations.backgroundOrb2.transition}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-dune-gold/8 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={animations.fadeInUp.initial}
          whileInView={animations.fadeInUp.animate}
          transition={animations.fadeInUp.transition}
          viewport={viewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dune-gold">
            Contact
          </h2>
          <p className={`${styles.sectionSubtitleSmall} text-center`}>
            Get in touch with me for your projects. Together we can create
            amazing things!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={animations.fadeInUp.initial}
            whileInView={animations.fadeInUp.animate}
            transition={animations.fadeInUp.transition}
            viewport={viewport}
            className={styles.card}
          >
            {/* Status Messages */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : "bg-red-500/20 border border-red-500/30 text-red-400"
                }`}
              >
                <p className="font-medium">
                  {submitStatus.type === "success" ? "✅" : "❌"}{" "}
                  {submitStatus.message}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={viewport}
                >
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Your first name"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={viewport}
                >
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Your last name"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={viewport}
              >
                <label className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-dune-gold/20 rounded-lg focus:border-dune-gold focus:outline-none transition-colors text-dune-sand placeholder-dune-sand/50"
                  placeholder="email@example.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={viewport}
              >
                <label className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-dune-gold/20 rounded-lg focus:border-dune-gold focus:outline-none transition-colors text-dune-sand placeholder-dune-sand/50"
                  placeholder="Subject"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={viewport}
              >
                <label className={styles.formLabel}>Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-dune-gold/20 rounded-lg focus:border-dune-gold focus:outline-none transition-colors resize-none text-dune-sand placeholder-dune-sand/50"
                  placeholder="Write your message here..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={viewport}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base text-dune-dark ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-dune-gold hover:bg-dune-gold/90 cursor-pointer"
                }`}
              >
                <Send size={20} className="text-dune-dark" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
