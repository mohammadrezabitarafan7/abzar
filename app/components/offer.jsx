'use client'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import e1 from '../../public/images/e1.png'
import e2 from '../../public/images/e2.png'
import Image from 'next/image';
import Link from 'next/link';
import bbb from '../../public/images/bbb.png'
import s from '../../public/images/s.png'
import MyTimer from './timer';
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'
import p4 from '../../public/images/p4.png'


const Offer = () => {
    const [swiper, setSwiper] = useState(null);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 200000);

    const next = () => {
        swiper.slideNext();
    };
    const breakpoints = {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
   
      };

    const back = () => {
        swiper.slidePrev();
    };

    const items = [
        { img: p2, href: "", name: "دریل گیربکسی AEG ", price: "1/580/000", des: "AEG Drill SB2-700" },
        { img: p3, href: "", name: "دریل چکشی رونیکس۲۲۱۱", price: "1/780/000", des: "AD-12A NEW 2021" },
        { img: p4, href: "", name: "دریل چکشی رونیکس۲۲۱۱", price: "1/350/000", des: "Ronix 2211 Impact Drill" },
        { img: e1, href: "", name: "دریل چکشی رونیکس۲۲۱۱", price: "1/350/000", des: "Ronix 2211 Impact Drill" },
        { img: e1, href: "", name: "دریل چکشی رونیکس۲۲۱۱", price: "1/350/000", des: "Ronix 2211 Impact Drill" },

    ];

    return (
        <div className='flex flex-col px-20 gap-9 pt-20 max-md:px-0'>
        
            <div className='flex flex-row gap-5 max-md:flex-col max-md:px-14'>
                <div className='relative'>
                    <Image className='rounded-[35px] w-full' src={bbb} />
                    <div className='absolute  top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <MyTimer expiryTimestamp={time} />
                    </div>
                </div>
                <div className='flex w-[70%] flex-col justify-between gap-4 max-md:w-full'>
                    


                <div className="flex flex-row justify-between ">
                <span className="text-main text-xl font-irans">تخفیف شگفت انگیز</span>
                <div className="flex flex-row justify-between">
                    <div className='w-8 h-8 cursor-pointer' onClick={back}>
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.832 4L32.168 4C39.246 4 44 8.552 44 15.33L44 32.67C44 39.448 39.246 44 32.168 44L15.832 44C8.756 44 4 39.446 4 32.668L4 15.33C4 8.552 8.756 4 15.832 4Z" fill="#FF5023" fill-opacity="0.28" />
                            <path d="M25.7109 15.4412L33.2409 22.9372C33.8069 23.5012 33.8069 24.4992 33.2409 25.0652L25.7109 32.5612C25.1229 33.1452 24.1729 33.1432 23.5889 32.5552C23.0049 31.9672 23.0049 31.0192 23.5929 30.4332L28.5469 25.4992H15.8369C15.0069 25.4992 14.3369 24.8272 14.3369 23.9992C14.3369 23.1712 15.0069 22.4992 15.8369 22.4992L28.5469 22.4992L23.5929 17.5672C23.2989 17.2732 23.1529 16.8892 23.1529 16.5032C23.1529 16.1212 23.2989 15.7372 23.5889 15.4452C24.1729 14.8592 25.1229 14.8572 25.7109 15.4412Z" fill="#FF5023" />
                        </svg>
                    </div>
                    <div className='w-8 h-8 cursor-pointer' onClick={next}>
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.28" d="M32.168 4L15.832 4C8.754 4 4 8.552 4 15.33L4 32.67C4 39.448 8.754 44 15.832 44L32.168 44C39.244 44 44 39.446 44 32.668L44 15.33C44 8.552 39.244 4 32.168 4Z" fill="#FF5023" />
                            <path d="M22.2891 15.4412L14.7591 22.9372C14.1931 23.5012 14.1931 24.4992 14.7591 25.0652L22.2891 32.5612C22.8771 33.1452 23.8271 33.1432 24.4111 32.5552C24.9951 31.9672 24.9951 31.0192 24.4071 30.4332L19.4531 25.4992H32.1631C32.9931 25.4992 33.6631 24.8272 33.6631 23.9992C33.6631 23.1712 32.9931 22.4992 32.1631 22.4992L19.4531 22.4992L24.4071 17.5672C24.7011 17.2732 24.8471 16.8892 24.8471 16.5032C24.8471 16.1212 24.7011 15.7372 24.4111 15.4452C23.8271 14.8592 22.8771 14.8572 22.2891 15.4412Z" fill="#FF5023" />
                        </svg>
                    </div>

                </div>
            </div>



                    <Swiper
                        className='w-full'
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={breakpoints}

                        onSwiper={setSwiper}
                        modules={[EffectFade, Navigation]}>
                        {
                            items.map((i) => (
                                <SwiperSlide key={i.id}>
                                    <div className="bg-main rounded-[20px] p-5 flex flex-col gap-3
                                    ease-out hover:translate-y-2 duration-500 cursor-pointer">
                                        <div className="bg-white p-3 rounded-[15px] h-[190px] max-md:h-[160px]">
                                            <Image className="m-auto" src={i.img} />
                                        </div>
                                        <span className="font-irans text-xl text-white max-md:text-sm">{i.name}</span>
                                        <span className="font-irans text-[16px] text-[#ffffff57] max-md:text-[12px]">{i.des}</span>
                                        <div className="flex flex-row justify-between px-1">
                                            <span className="font-irans text-white text-xl max-md:text-sm">قیمت:</span>
                                            <span className="font-irans text-white text-xl max-md:text-sm">{i.price}</span>
                                        </div>
                                        <div className="flex justify-center py-5 max-md:py-2">
                                            <svg width="180" height="1" viewBox="0 0 180 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="180" y1="0.5" y2="0.5" stroke="#DEDEDE" />
                                            </svg>
                                        </div>
                                        <div className="bg-[#ff8a6c] text-white font-irans cursor-pointer py-2 rounded-lg flex flex-row gap-2 
                                         px-5 m-auto justify-center hover:bg-[#942e15] max-md:px-2">
                                            <svg className='max-md:hidden' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z" fill="white" fill-opacity="0.36" />
                                                <path d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z" fill="white" fill-opacity="0.36" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z" fill="white" />
                                            </svg>
                                            <span className="text-sm text-center max-md:text-[8px]" >افزودن به سبد خرید</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div>
                        <Image
                            className='ease-out hover:translate-y-2 duration-500 cursor-pointer max-md:hidden' src={s} />
                    </div>
                  
                </div>
              
            </div>
            <div className='lg:hidden w-96 px-5 py-2'>
                        <Image
                            className='ease-out hover:translate-y-2 duration-500 cursor-pointer' src={s} />
                    </div>
        </div>
    )
}
export default Offer

