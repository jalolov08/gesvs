import React, { useState, useRef } from "react";
import "./header.style.css";
import logo from "../../assets/logo.png";
import { useSpring, animated } from "react-spring";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import Form from "../Form/form.component";


export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const overlayAnimation = useSpring({
    opacity: isModalOpen || isMobileMenuOpen ? 1 : 0,
    config: { duration: 400 },
  });

  const modalAnimation = useSpring({
    opacity: isModalOpen || isMobileMenuOpen ? 1 : 0,
    transform: isModalOpen || isMobileMenuOpen ? "translateY(0%)" : "translateY(-100%)",
    config: { duration: 400 },
  });

  const handleOverlayClick = (e) => {
    if ((modalRef.current && !modalRef.current.contains(e.target)) || isMobileMenuOpen) {
      closeModal();
      closeMobileMenu();
    }
  };

  return (
    <div>
      <div className="header" id="header">
        <img src={logo} className="logo" />
        <animated.ul className="navbar" >
          <Link to="banner" spy={false}
            smooth={true}
            offset={-120}
            className="nav_items"
            duration={500}> Главная </Link>
          <Link to="benefit" spy={true}
            smooth={true}
            offset={-120}

            className="nav_items"
            duration={500}>

            Преимущества</Link>
          <Link to="reviews" spy={true}
            smooth={true}
            offset={-120}

            className="nav_items"
            duration={500}
          >
            Отзывы
          </Link>
          <Link to="partners" spy={true}
            smooth={true}
            className="nav_items"
            offset={-120}
            duration={500}
          >
            Наши партнеры
          </Link>
          <button className="nav_btn" onClick={openModal}>
            Заявка-онлайн
          </button>
        </animated.ul>
        {isMobileMenuOpen ? (
           <FontAwesomeIcon icon={faTimes} className="menu_icon" onClick={toggleMobileMenu} />
        ) : (
          <FontAwesomeIcon icon={faBars} className="menu_icon" onClick={toggleMobileMenu} />
        )}
        {isModalOpen && (
          <animated.div
            className="modal-overlay"
            onClick={handleOverlayClick}
            style={overlayAnimation}
          >
            <animated.div
              ref={modalRef}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={modalAnimation}
            >
              <Form />
            </animated.div>
          </animated.div>
        )}
      </div>
      <animated.ul className={`nav_menu ${isMobileMenuOpen ? "visible" : ""}`} style={overlayAnimation}>
          <Link to="banner" spy={false} smooth={true} offset={-20} onClick={closeMobileMenu} duration={500}>
            <li className="menu_items">Главная</li>
          </Link>
          <Link to="benefit" spy={true} smooth={true} offset={-20} onClick={closeMobileMenu} duration={500}>
            <li className="menu_items">Преимущества</li>
          </Link>
          <Link to="reviews" spy={true} smooth={true} offset={-20} onClick={closeMobileMenu} duration={500}>
            <li className="menu_items">Отзывы</li>
          </Link>
          <Link to="partners" spy={true} smooth={true} onClick={closeMobileMenu} className="menu_items" duration={500}>
            <li>Наши партнеры</li>
          </Link>
        </animated.ul>
    </div>
  );
}
