import React from 'react'
import {ShoppingCategories} from '../..'

const rute = '/assets/iconsCategory/'

const categories = [
    {
        image: rute + 'all.png',
        name: 'Todo'
    },
    {
        image: rute + 'beer.png',
        name: 'Cervezas'
    },
    {
        image: rute + 'champagne.png',
        name: 'Champagne'
    },
    {
        image: rute + 'coffee.png',
        name: 'Más'
    },
    {
        image: rute + 'liqueur.png',
        name: 'Licores'
    },
    {
        image: rute + 'whiskey.png',
        name: 'Whisky'
    },
    {
        image: rute + 'wine.png',
        name: 'Vinos'
    },
]


const Shopping = () => {
    return (
        <section>
            <ShoppingCategories categories={categories}/>
        </section>
    )
}

export default Shopping