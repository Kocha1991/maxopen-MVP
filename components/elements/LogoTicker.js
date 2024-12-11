'use client'
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function LogoTicker() {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        fetch('https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/logo-techonologies', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                setLogos(data[0].logo); // Зберігаємо логотипи з першого об'єкта
            } else {
                console.error('Дані не є масивом:', data);
            }
        })
        .catch(error => console.error('Помилка при отриманні даних:', error));
    }, []);

    return (
        <Marquee pauseOnHover={true} direction="left" className="carouselTicker__list list-logos">
            {logos.map((logo) => (
                <li key={logo.id} className="carouselTicker__item">
                    <div className="item-logo">
                        <img src={logo.full_url} alt={logo.file_name} />
                    </div>
                </li>
            ))}
        </Marquee>
    );
}
