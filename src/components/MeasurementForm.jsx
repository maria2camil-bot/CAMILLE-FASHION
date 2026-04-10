import React, { useState } from 'react';

const MeasurementForm = () => {
    const [isAdult, setIsAdult] = useState(true);
    const [measurements, setMeasurements] = useState({
        height: '',
        weight: '',
        chest: '',
        waist: '',
        hips: '',
        neck: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeasurements({ ...measurements, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Measurements submitted:', measurements);
        // Additional submit logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{isAdult ? 'Adult' : 'Baby'} Measurement Form</h1>
            <label>
                <input
                    type="radio"
                    value="adult"
                    checked={isAdult}
                    onChange={() => setIsAdult(true)}
                />
                Adult
            </label>
            <label>
                <input
                    type="radio"
                    value="baby"
                    checked={!isAdult}
                    onChange={() => setIsAdult(false)}
                />
                Baby
            </label>\n
            {isAdult ? (
                <div>
                    <label>
                        Height (cm):
                        <input type="number" name="height" value={measurements.height} onChange={handleChange} />
                    </label>
                    <label>
                        Weight (kg):
                        <input type="number" name="weight" value={measurements.weight} onChange={handleChange} />
                    </label>
                    <label>
                        Chest (cm):
                        <input type="number" name="chest" value={measurements.chest} onChange={handleChange} />
                    </label>
                    <label>
                        Waist (cm):
                        <input type="number" name="waist" value={measurements.waist} onChange={handleChange} />
                    </label>
                    <label>
                        Hips (cm):
                        <input type="number" name="hips" value={measurements.hips} onChange={handleChange} />
                    </label>
                    <label>
                        Neck (cm):
                        <input type="number" name="neck" value={measurements.neck} onChange={handleChange} />
                    </label>
                    <label>
                        Age:
                        <input type="number" name="age" value={measurements.age} onChange={handleChange} />
                    </label>
                </div>
            ) : (
                <div>
                    <label>
                        Height (cm):
                        <input type="number" name="height" value={measurements.height} onChange={handleChange} />
                    </label>
                    <label>
                        Weight (kg):
                        <input type="number" name="weight" value={measurements.weight} onChange={handleChange} />
                    </label>
                    <label>
                        Age:
                        <input type="number" name="age" value={measurements.age} onChange={handleChange} />
                    </label>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default MeasurementForm;