import React, { useState } from 'react';
import './footer.style.css';
import { Link } from 'react-scroll';
import Privacy from '../Privacy/privacy.component';

export default function Footer() {
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);

  const openPrivacyModal = () => {
    setPrivacyModalVisible(true);
    document.body.classList.add('modal-open');
  };

  const closePrivacyModal = () => {
    setPrivacyModalVisible(false);
    document.body.classList.remove('modal-open'); 
  };

  return (
    <div className='footer'>
      <div className='footer_section'>
        <p className='privacy' onClick={openPrivacyModal}>
          © 2023 sbsp.ru. Все права защищены.
        </p>
        <p className='privacy' onClick={openPrivacyModal}>
          Политика конфиденциальности
        </p>
      </div>
      <div className='footer_nav'>
        <Link to="benefit" spy={true} smooth={true} offset={-120} duration={500} className='footer_nav_itme'>
          Преимущества
        </Link>
        <Link to="reviews" spy={true} smooth={true} offset={-120} duration={500} className='footer_nav_itme'>
          Отзывы
        </Link>
        <Link to="partners" spy={true} smooth={true} offset={-120} duration={500} className='footer_nav_itme'>
          Наши партнеры
        </Link>
      </div>
      {privacyModalVisible && <Privacy onClose={closePrivacyModal} />}
    </div>
  );
}
