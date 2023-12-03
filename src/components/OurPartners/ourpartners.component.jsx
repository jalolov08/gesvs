import React from 'react'
import './ourpartners.style.css'
import dozarplati from '../../assets/dozarplati.png';
import turbozaym from '../../assets/turbozaym.png'
import vebZaym from '../../assets/veb-zaym.png'
import cashU from '../../assets/cash-u.png'
import webbankir from '../../assets/webbankir.png'
import srochnodengi from '../../assets/srochnodengi.png'
import pliskovru from '../../assets/pliskovru.png'
import moneyman from '../../assets/moneyman.png'
import kviku from '../../assets/kviku.png'
import konga from '../../assets/konga.png'
export default function OurPartners() {
    const partnersFirst = [
        { id: 1, img: dozarplati, link: "https://dozarplati.com" },
        { id: 2, img: turbozaym, link: "https://turbozaim.ru/" },
        { id: 3, img: vebZaym, link: "https://web-zaim.ru/" },
        { id: 4, img: cashU, link: "https://cash-u.com/" },
        { id: 5, img: webbankir, link: "https://sbsp.ru/wp-content/uploads/2023/07/webbankir.png" },

    ]
    const partnersSecond = [
        { id: 1, img: srochnodengi, link: "https://srochnodengi.ru/" },
        { id: 2, img: pliskovru, link: "https://pliskov.ru/" },
        { id: 3, img: moneyman, link: "https://moneyman.ru/" },
        { id: 4, img: kviku, link: "https://kviku.ru/" },
        { id: 5, img: konga, link: "https://www.konga.ru/" }
    ]
    return (
        <div className='our_partners' id='partners'>
            <h1 className='partners_title'>Наши партнеры</h1>
          <div className='all_partners'>
          <div className='partners_cont'>
                {partnersFirst.map((el) => (
                    <div key={el.id} className='partner_card'>
                        <a href={el.link} target='_blank'>
                            <img src={el.img} className='partner_logo' />
                        </a>
                    </div>
                ))}
               </div>
               <div className='partners_cont'> 
               {partnersSecond.map((el) => (
                    <div key={el.id} className='partner_card__large'>
                        <a href={el.link} target='_blank'>
                            <img src={el.img} className='partner_logo_large' />
                        </a>
                    </div>
                ))} 
               </div>
          </div>

        </div>
    )
}
