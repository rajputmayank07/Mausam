import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const jsonResponse = await response.json();
            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
        setError(false); // Reset error on input change
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Start loading
        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // Clear input
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Search"}
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}