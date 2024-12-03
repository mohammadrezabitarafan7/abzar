'use client'
import e1 from '../../public/images/sl1.png'
import e2 from '../../public/images/s2.png'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import './styles.css'
const Slider = () => {
    const items = [
        { img: e1, href: "" },
        { img: e2, href: "" },
        { img: e1, href: "" },
        { img: e2, href: "" },

    ];



    return (

        <div className="flex flex-col px-4">
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {items.map((i) => (
                    <SwiperSlide key={i.id}>
                        <Link href="/" className="gap-4">
                            <div className="">
                                <Image
                               className='max-md:h-[150px]'
                                    src={i.img}
                                    alt={i.name}
                                />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Slider