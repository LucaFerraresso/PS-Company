import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email inviata: ${email}`);
    setSubmitted(true);
  };

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Contattami</h1>
      <p className="mb-6">
        Registrati alla mia newsletter per ricevere aggiornamenti.
      </p>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Inserisci la tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded-md hover:bg-secondary transition-colors"
          >
            Iscriviti
          </button>
        </motion.form>
      ) : (
        <div className="text-lg text-green-500">
          Grazie per esserti iscritto alla newsletter!
        </div>
      )}
    </div>
  );
}

export default Contact;
