import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    return (
        <header className="glass" style={{ margin: '2rem 0', padding: '1.5rem 2rem', position: 'sticky', top: '2rem', zIndex: 100 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        RICK & MORTY ARCHIVE
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}
                >
                    EXPLORE THE MULTIVERSE
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
