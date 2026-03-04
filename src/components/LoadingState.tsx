import React from 'react';

const LoadingState: React.FC = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            width: '100%'
        }}>
            {[...Array(8)].map((_, i) => (
                <div key={i} className="glass shimmer-wrapper" style={{ height: '400px', borderRadius: '16px' }}>
                    <div className="shimmer" />
                    <div style={{ height: '260px', background: 'rgba(255,255,255,0.02)' }} />
                    <div style={{ padding: '1.5rem' }}>
                        <div style={{ height: '24px', width: '70%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '1rem' }} />
                        <div style={{ height: '16px', width: '40%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LoadingState;
