import React, { forwardRef, Ref, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = forwardRef((props, ref: Ref<HTMLElement>) => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("sending");
        
        // Simulate form submission
        setTimeout(() => {
            setFormStatus("success");
            // Reset form after 3 seconds
            setTimeout(() => {
                setFormStatus("idle");
                setFormState({ name: "", email: "", message: "" });
            }, 3000);
        }, 1500);
    };
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };
    
    return (
        <section id="contact" className="contact section bg-white dark:bg-gray-900 py-16" ref={ref}>
            <motion.div 
                className="container mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 inline-block text-transparent bg-clip-text"
                        animate={{
                            filter: [
                                'drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))',
                                'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))',
                                'drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))'
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                    <motion.p 
                        className="text-gray-600 dark:text-gray-300 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Get in touch with me
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <motion.div 
                        className="lg:col-span-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <motion.h3 
                                className="text-xl font-bold mb-6 text-gray-800 dark:text-white"
                                variants={itemVariants}
                            >
                                Contact Information
                            </motion.h3>
                            
                            <motion.div 
                                className="space-y-6"
                                variants={containerVariants}
                            >
                                <motion.div 
                                    className="flex items-start space-x-4"
                                    variants={itemVariants}
                                >
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                        <AiOutlinePhone className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">+52 (656) 131-1408</p>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex items-start space-x-4"
                                    variants={itemVariants}
                                >
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                        <AiOutlineMail className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">imzodev@gmail.com</p>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex items-start space-x-4"
                                    variants={itemVariants}
                                >
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                        <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">Memmingen, Germany</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                            
                            <motion.div 
                                className="mt-8 flex space-x-4"
                                variants={itemVariants}
                            >
                                <a 
                                    href="https://github.com/irvingzamora28" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                                >
                                    <AiOutlineGithub className="text-gray-700 dark:text-gray-300 text-xl" />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/imzodev" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                                >
                                    <AiOutlineLinkedin className="text-gray-700 dark:text-gray-300 text-xl" />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    {/* Contact Form */}
                    <motion.div 
                        className="lg:col-span-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <form 
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                        >
                            <motion.h3 
                                className="text-xl font-bold mb-6 text-gray-800 dark:text-white"
                                variants={itemVariants}
                            >
                                Send me a message
                            </motion.h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                        placeholder="Your name"
                                        required
                                    />
                                </motion.div>
                                
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </motion.div>
                            </div>
                            
                            <motion.div className="mb-6" variants={itemVariants}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={5} 
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <button 
                                    type="submit" 
                                    disabled={formStatus === "sending" || formStatus === "success"}
                                    className="w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                                >
                                    {formStatus === "idle" && (
                                        <>
                                            Send Message
                                            <BiSend className="ml-2" />
                                        </>
                                    )}
                                    {formStatus === "sending" && "Sending..."}
                                    {formStatus === "success" && "Message Sent!"}
                                    {formStatus === "error" && "Error. Try Again"}
                                </button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
});

Contact.displayName = "Contact";
export default Contact;
