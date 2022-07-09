import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import ProductCard from '../ProductCard/ProductCard'

import styles from './ProductSlider.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import { FreeMode, Pagination,Navigation } from "swiper";

const ProductSlider = ({title = '', sx}) => {
    return (
        <Paper sx={{...sx, p: 3}}>
            <Typography 
                component={"h2"} 
                variant="h5" 
                sx={{
                    mb: 1
                }}
                >Nuestros productos</Typography>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation
                freeMode={true}
                scrollbar={{draggable: true}}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <ProductCard product={{
                        id: '1215', 
                        name: 'Vino', 
                        description: 'Commodo ullamco ullamco in veniam tempor ut qui aute consequat id sint velit ut cupidatat. Elit mollit laborum amet nisi culpa pariatur officia labore. Dolore aliquip irure labore mollit enim minim enim occaecat sunt deserunt aliquip esse. Sit laborum Lorem excepteur nulla labore amet ut mollit cillum ad et. Eu velit deserunt exercitation quis id voluptate minim aliqua enim.', 
                        sale_price: '5859', 
                        feature_img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }}
                    sx={{mr:1}}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <ProductCard product={{
                        id: '1215', 
                        name: 'Vino', 
                        description: 'Commodo ullamco ullamco in veniam tempor ut qui aute consequat id sint velit ut cupidatat. Elit mollit laborum amet nisi culpa pariatur officia labore. Dolore aliquip irure labore mollit enim minim enim occaecat sunt deserunt aliquip esse. Sit laborum Lorem excepteur nulla labore amet ut mollit cillum ad et. Eu velit deserunt exercitation quis id voluptate minim aliqua enim.', 
                        sale_price: '5859', 
                        feature_img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }}
                    sx={{mr:1}}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <ProductCard product={{
                        id: '1215', 
                        name: 'Vino', 
                        description: 'Commodo ullamco ullamco in veniam tempor ut qui aute consequat id sint velit ut cupidatat. Elit mollit laborum amet nisi culpa pariatur officia labore. Dolore aliquip irure labore mollit enim minim enim occaecat sunt deserunt aliquip esse. Sit laborum Lorem excepteur nulla labore amet ut mollit cillum ad et. Eu velit deserunt exercitation quis id voluptate minim aliqua enim.', 
                        sale_price: '5859', 
                        feature_img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }}
                    sx={{mr:1}}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <ProductCard product={{
                        id: '1215', 
                        name: 'Vino', 
                        description: 'Commodo ullamco ullamco in veniam tempor ut qui aute consequat id sint velit ut cupidatat. Elit mollit laborum amet nisi culpa pariatur officia labore. Dolore aliquip irure labore mollit enim minim enim occaecat sunt deserunt aliquip esse. Sit laborum Lorem excepteur nulla labore amet ut mollit cillum ad et. Eu velit deserunt exercitation quis id voluptate minim aliqua enim.', 
                        sale_price: '5859', 
                        feature_img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }}
                    sx={{mr:1}}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <ProductCard product={{
                        id: '1215', 
                        name: 'Vino', 
                        description: 'Commodo ullamco ullamco in veniam tempor ut qui aute consequat id sint velit ut cupidatat. Elit mollit laborum amet nisi culpa pariatur officia labore. Dolore aliquip irure labore mollit enim minim enim occaecat sunt deserunt aliquip esse. Sit laborum Lorem excepteur nulla labore amet ut mollit cillum ad et. Eu velit deserunt exercitation quis id voluptate minim aliqua enim.', 
                        sale_price: '5859', 
                        feature_img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }}
                    sx={{mr:1}}
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <ProductCard product={{
                        id: '1215', 
                        name: 'Vino', 
                        description: 'Commodo ullamco ullamco in veniam tempor ut qui aute consequat id sint velit ut cupidatat. Elit mollit laborum amet nisi culpa pariatur officia labore. Dolore aliquip irure labore mollit enim minim enim occaecat sunt deserunt aliquip esse. Sit laborum Lorem excepteur nulla labore amet ut mollit cillum ad et. Eu velit deserunt exercitation quis id voluptate minim aliqua enim.', 
                        sale_price: '5859', 
                        feature_img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }}
                    sx={{mr:1}}
                    />
                </SwiperSlide>
                
            </Swiper>
        </Paper>
    )
}

export default ProductSlider