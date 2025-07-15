import React from "react";
import { motion, Variants } from "framer-motion";

const ImageBackground = () => {
    // Animation variants for the blob
    const blobVariants = {
        initial: {
            scale: 0.8,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Animation for the path morphing
    const pathVariants: Variants = {
        animate: {
            d: [
                "M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z",
                "M185.312 41.4879C201.582 67.1187 196.309 107.826 177.328 139.186C158.346 170.547 125.807 192.559 95.226 191.353C64.6454 190.297 36.0228 166.023 16.7403 134.362C-2.54225 102.8511 -12.48481 64.1033 1.67581 39.5279C15.9871 15.1032 54.7028 4.849132 92.9666 5.00163737C131.23 5.303176 169.193 15.857 185.312 41.4879Z",
                "M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            ],
            transition: {
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        }
    };

    // Animation for the image
    const imageVariants: Variants = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1,
            transition: { 
                delay: 0.3,
                duration: 0.5 
            }
        }
    };

    return (
        <motion.div 
            className="hero__blob"
            initial="initial"
            animate="animate"
            variants={blobVariants}
        >
            <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6a11cb" />
                        <stop offset="100%" stopColor="#2575fc" />
                    </linearGradient>
                </defs>
                <mask id="mask0" mask-type="alpha">
                    <motion.path
                        variants={pathVariants}
                        initial="initial"
                        animate="animate"
                        d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                </mask>
                <g mask="url(#mask0)">
                    <motion.path
                        variants={pathVariants}
                        initial="initial"
                        animate="animate"
                        fill="url(#gradient)"
                        d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <motion.image 
                        className="hero__blob-img" 
                        xlinkHref="/assets/images/profile-picture-alt.png" 
                        x="-80" 
                        y="-30" 
                        width="400" 
                        height="240" 
                        variants={imageVariants}
                    />
                </g>
            </svg>
        </motion.div>
    );
};

export default ImageBackground;
