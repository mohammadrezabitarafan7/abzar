import Image from 'next/image';
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'
import p4 from '../../public/images/p4.png'
import vv from '../../public/images/vv.png'
const Banner1 = () => {
    const items = [
        { img: p2, href: "", name: "دریل گیربکسی AEG ", price: "1/580/000", des: "AEG Drill SB2-700" },
        { img: p2, href: "", name: "دریل چکشی رونیکس۲۲۱۱", price: "1/780/000", des: "AD-12A NEW 2021" },
        { img: p2, href: "", name: "دریل چکشی رونیکس۲۲۱۱", price: "1/350/000", des: "Ronix 2211 Impact Drill" },

    ];
    return (
        <div className='flex flex-row  gap-4 px-20 max-md:px-5'>
            <div className='basis-[25%] relative bg-[#FF9A2E] rounded-[34px] max-md:hidden'>
                <div className='w-[680px]  transform translate-x-40 right-0  absolute'>
                    <Image className='z-20' src={vv} />
                </div>
            </div>







            <div className='basis-[75%] flex flex-col p-12  bg-[#FF9A2E] rounded-[34px] max-md:basis-full max-md:p-4 max-md:flex-col-reverse'>
                <div className='grid grid-rows-1 gap-5 grid-cols-3 max-md:grid-cols-2 '>
                    {
                        items.map((i) => (
                            <div className="bg-white rounded-[20px] p-5 flex flex-col gap-3
                            ease-out hover:translate-y-2 duration-500 cursor-pointer ">
                                <div className="bg-[#e1e1e1] flex justify-center p-3 rounded-[15px] h-[190px] max-md:h-[120px]">
                                    <Image className="m-auto" src={i.img} />
                                </div>
                                <span className="font-irans text-lg text-[#212121] max-md:text-xs">{i.name}</span>
                                <span className="font-irans text-[14px] text-[#9c9c9c] max-md:text-xs">{i.des}</span>
                                <div className="flex flex-row justify-between px-1">
                                    <span className="font-irans text-[#212121] text-lg max-md:text-sm">قیمت:</span>
                                    <span className="font-irans text-[#212121] text-lg max-md:text-sm">{i.price}</span>
                                </div>
                                <div className="flex justify-center py-5">
                                    <svg width="180" height="1" viewBox="0 0 180 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="180" y1="0.5" y2="0.5" stroke="#DEDEDE" />
                                    </svg>
                                </div>
                                <div className="bg-main text-white font-irans cursor-pointer py-2 rounded-lg flex flex-row gap-2 
                                px-5 m-auto justify-center hover:bg-[#942e15]
                                 max-md:px-2 ">
                                    <svg className='max-md:hidden' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z" fill="white" fill-opacity="0.36" />
                                        <path d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z" fill="white" fill-opacity="0.36" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z" fill="white" />
                                    </svg>
                                    <span className="text-sm text-center max-md:text-[8px]" >افزودن به سبد خرید</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <span className='text-white text-2xl font-irans py-8'>جدیدترین دریل های شرکت AEG</span>
                <span className='text-white text-lg font-irans '>
                    شرکت AEG توسط امیل راتناو در سال 1883 ابتدا در شهر برلین در کشور آلمان تاسیس شد نخستین نام این شرکت ( شرکت آلمانی برق ادیسون ) بود و امیل راتناو در همان سال ها با خرید امتیاز ثبت ...
                </span>
                <button className='text-[#FF9A2E] font-irans bg-white py-3 w-48 rounded-md my-8'>مشاهده همه محصولات</button>

            </div>


        </div>
    )
}
export default Banner1