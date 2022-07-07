import React from 'react'
import style from './ShoppingCategories.module.css'
import Image from 'next/image'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ShoppingCategories = ({categories}) => {

    const moveScroll = (dir)=>{
        let scroll = document.getElementById('categoryTrack')

        if (dir) {
            scroll.scrollLeft += (scroll.scrollWidth / 3)
        }else{
            scroll.scrollLeft -= (scroll.scrollWidth / 3)
        }
    }

    return (
        <div className={style.categories_container}>
            <div className={style.categorieArrow} onClick={()=> moveScroll(false)}><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className={style.categorieTrack} id='categoryTrack'>
                {
                    categories.map((e,i)=>(
                        <div key={i} className={style.item}>
                            <Image src={e.image} width={'70%'} height={50} objectFit='contain' alt="Categoría icono"  draggable="false"/>
                            <p>{e.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className={style.categorieArrow} onClick={()=> moveScroll(true)}><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
    )
}

export default ShoppingCategories