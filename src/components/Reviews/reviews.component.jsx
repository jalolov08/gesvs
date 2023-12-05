import React from 'react'
import './reviews.style.css'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Reviews() {
  const reviews = [
    { id: 1, name: "Дмитрий", surname: "Востряков", review: "Здесь работают добрые люди, всегда советуют как поступить и куда обратиться" },
    { id: 2, name: "Виктория", surname: "Гаврикова", review: "Быстро одобряют. Беру уже 2 раза. Все хорошо. Проценты приемлемые. Рекомендую." },
    { id: 3, name: "Андрей", surname: "Москвин", review: "Первый займ в 15000 рублей получил абсолютно бесплатно, без процентов, причём на нужный мне срок. Пользуюсь постоянно, очень удобно, всем рекомендую." },
    { id: 4, name: "Александр", surname: "Дивнич", review: "Отличная компания, приятные сотрудники, проблем никогда не возникало, спасибо за помощь!" },
    { id: 5, name: "Светлана", surname: "Давыдкина", review: "Все четко и быстро. Оставила заявку, мне перезвонили примерно через 10 минут и предложили на выбор 3 организации где можно взять займ под небольшой %." }
  ]
  return (
    <div className='reviews'>
      <div className="review_cont">
        <h1 className='review_title'>Отзывы наших клиентов</h1>
        {reviews.map(el => (
          <div key={el.id} className='review_card'>
            <FontAwesomeIcon icon={faMessage} size='24px' color='#7298C4' />

            <div className='review_text'>
              <p className='review_author'>{el.name} {el.surname}</p>
              <p className='review_text'>{el.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
