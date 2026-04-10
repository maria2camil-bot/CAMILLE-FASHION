import React, { useState } from 'react';

const PatternEditor = () => {
    const [patterns, setPatterns] = useState([]);

    const addPattern = (newPattern) => {
        setPatterns([...patterns, newPattern]);
    };

    const renderPatterns = () => {
        return patterns.map((pattern, index) => (
            <svg key={index} width="200" height="200">
                {/* Render your pattern logic here */}
                <rect x="10" y="10" width="180" height="180" fill="lightgray" />
                <text x="20" y="40" fill="black">{pattern}</text>
            </svg>
        ));
    };

    return (
        <div>
            <h1>Pattern Editor</h1>
            <button onClick={() => addPattern(`Pattern ${patterns.length + 1}`)}>Add Pattern</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {renderPatterns()}
            </div>
        </div>
    );
};

export default PatternEditor;