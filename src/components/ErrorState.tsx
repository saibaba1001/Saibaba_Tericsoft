import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorStateProps {
    message: string;
    onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass"
            style={{
                padding: '3rem',
                textAlign: 'center',
                margin: '2rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
            }}
        >
            <AlertCircle size={48} color="#ff4444" />
            <div>
                <h2 style={{ marginBottom: '0.5rem' }}>Multiverse Connection Lost</h2>
                <p style={{ color: 'var(--text-secondary)' }}>{message}</p>
            </div>
            <button
                onClick={onRetry}
                style={{
                    background: 'var(--accent-primary)',
                    color: 'var(--bg-color)',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s'
                }}
            >
                <RefreshCw size={18} />
                Retry Connection
            </button>
        </motion.div>
    );
};

export default ErrorState;
