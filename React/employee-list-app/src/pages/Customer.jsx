import React from "react";
import { motion } from "framer-motion";

function Employee() {
    return (
        <>
        <motion.div
            initial={{ x:0,y:200, opacity:0 }}
            animate={{ x:0,y:0,opacity:1  }}
            exit={{ x: 0 }}
            transition={{ duration: 0.5, ease: "circInOut" }}
            className="bg-red-600 p-4"
            >
            <h1 className="text-white">Hello world</h1>
            <h1 className="text-white">Hello world</h1>
            <h1 className="text-white">Hello world</h1>
        </motion.div>
        <motion.div
            initial={{ x:0,y:200, opacity:0 }}
            animate={{ x:0,y:0,opacity:1  }}
            exit={{ x: 0 }}
            transition={{ duration: 1, ease: "circInOut" }}
            className="bg-red-600 p-4"
            >
            <h1 className="text-white">Hello world</h1>
            <h1 className="text-white">Hello world</h1>
            <h1 className="text-white">Hello world</h1>
        </motion.div>
        </>
    );
}

export default Employee;
