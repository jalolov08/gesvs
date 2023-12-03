import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './banner.style.css';
import Form from '../Form/form.component';

export default function Banner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fadeIn = useSpring({
        opacity: isModalOpen ? 1 : 0,
        from: { opacity: 0 },
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    return (
        <div className='banner'>
            <div className='banner_content'>
                <p className='small_title'>Оформление займа за 2 минуты в онлайн режиме</p>
                <h1 className='main_title'>Получите деньги наличными или на карту</h1>
                <p className='description'>Займ на карту без отказа! Первый займ под 0%</p>
                <button className='apply_btn' onClick={openModal}>
                    Оформите заявку
                </button>
            </div>

            {isModalOpen && (
                <animated.div className="modal-overlay" style={fadeIn} onClick={handleOverlayClick}>
                    <animated.div className="modal-content">
                        <Form />
                    </animated.div>
                </animated.div>
            )}
        </div>
    );
}
