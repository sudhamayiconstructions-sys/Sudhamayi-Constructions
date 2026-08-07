import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import logo from "../assets/images/logo.png";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  document.body.style.overflow = "hidden";

  const timer = setTimeout(() => {
    setLoading(false);
    document.body.style.overflow = "auto";
  }, 1500);

  return () => {
    clearTimeout(timer);
    document.body.style.overflow = "auto";
  };
}, []);

  return (
    <>
      <AnimatePresence>

        {loading && (

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              flex-col
              items-center
              justify-center
              bg-black
            "
          >

            <motion.img
              src={logo}
              alt="Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-36"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                mt-10
                text-4xl
                font-bold
                tracking-[8px]
                text-white
              "
            >
              SUDHAMAYI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="
                mt-3
                tracking-[8px]
                text-amber-400
              "
            >
              CONSTRUCTIONS
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="
                mt-8
                text-gray-400
              "
            >
              Building Dreams Since 2016
            </motion.p>

            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
              }}
              className="
                mt-10
                flex
                gap-3
              "
            >
              <div className="h-2 w-2 rounded-full bg-amber-400"></div>
              <div className="h-2 w-2 rounded-full bg-amber-400"></div>
              <div className="h-2 w-2 rounded-full bg-amber-400"></div>
            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: loading ? 0 : 1 }}
  transition={{ duration: 0.8 }}
>
  {!loading && children}
</motion.div>

    </>
  );
}