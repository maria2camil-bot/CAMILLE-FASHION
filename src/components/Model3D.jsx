import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const Model3D = () => {
    useEffect(() => {
        // Any necessary initialization for Three.js can go here
    }, []);

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Box position={[-1.2, 0, 0]}>
                <meshStandardMaterial attach='material' color='orange' />
            </Box>
            <Box position={[1.2, 0, 0]}>
                <meshStandardMaterial attach='material' color='blue' />
            </Box>
        </Canvas>
    );
};

export default Model3D;
