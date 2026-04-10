import React from 'react';

const LilyGarden = () => {
    const categories = [
        { name: 'Bodys', description: 'Comfortable and stylish bodysuits for babies.' },
        { name: 'Dresses', description: 'Adorable dresses for little girls.' },
        { name: 'Pants', description: 'Trendy pants for boys and girls.' },
        { name: 'Accessories', description: 'Cute accessories to complete any outfit.' }
    ];

    return (
        <div>
            <h1>Lily Garden</h1>
            <h2>Clothing Patterns for Babies and Children</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LilyGarden;