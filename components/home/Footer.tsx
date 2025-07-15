import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-2">
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block text-transparent bg-clip-text"
              animate={{
                filter: [
                  'drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))',
                  'drop-shadow(0 0 3px rgba(59, 130, 246, 0.5))',
                  'drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Irving Zamora
            </motion.h2>
            <motion.div 
              className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mb-2"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-600 dark:text-gray-400">Full Stack Web Developer</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Building modern web experiences with cutting-edge technologies</p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Quick Links</h3>
            <motion.div className="flex flex-col space-y-2">
              <motion.div className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <motion.span whileHover={{ x: 5 }}>Home</motion.span>
                </Link>
                <Link href="/#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <motion.span whileHover={{ x: 5 }}>Projects</motion.span>
                </Link>
                <Link href="/#blogs" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <motion.span whileHover={{ x: 5 }}>Blog</motion.span>
                </Link>
                <Link href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <motion.span whileHover={{ x: 5 }}>Contact</motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Connect</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/irvingzamora28" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <AiFillGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/imzodev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <AiFillLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/imzodev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <AiFillTwitterCircle size={24} />
              </motion.a>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Feel free to reach out!</p>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Irving Zamora. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;