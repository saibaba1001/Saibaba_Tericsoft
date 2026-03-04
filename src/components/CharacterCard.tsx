import React from 'react';
import { motion } from 'framer-motion';
import type { Character } from '../api/characterService.ts';
import { MapPin, User, Activity } from 'lucide-react';

interface CharacterCardProps {
    character: Character;
    index: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass"
            style={{ overflow: 'hidden', height: '100%' }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'var(--accent-primary)' }}
        >
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                    src={character.image}
                    alt={character.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    color: 'white'
                }}>
                    <h3 style={{ fontSize: '1.25rem' }}>{character.name}</h3>
                </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        <Activity size={16} />
                        <span style={{ color: character.status === 'Alive' ? 'var(--accent-primary)' : character.status === 'Dead' ? '#ff4444' : 'var(--text-secondary)' }}>
                            {character.status}
                        </span>
                        <span style={{ color: 'var(--panel-border)' }}>|</span>
                        <User size={16} />
                        <span>{character.species}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        <MapPin size={16} />
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {character.location.name}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CharacterCard;
