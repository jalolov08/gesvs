import React from 'react'
import './application.style.css'
import girl from '../../assets/girl-bisnes.jpg'
import Form from '.././Form/form.component'
export default function Application() {
    return (
        <div className='application' >
            <h1 className='application_title'>Оставьте заявку и получите займ уже через 15 минут</h1>
            <div className='application_cont'>
                <div className='app_cont'>
                    <Form index={5} color={"#f1f5f8"}/>
                </div>
                <div className='app_cont'>
                    <img src={girl} className='app_img' />
                </div>
            </div>
        </div>
    )
}
