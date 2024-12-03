import Image from "next/image"
import p1 from '../../public/images/p1.png'
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'
import p4 from '../../public/images/p4.png'

const NewProducts = () => {
    const products = [
        {
            title: "موتور برق آسترا AST3700",
            price: "16/650/000",
            img: p1,
            des: "ronix 2211 impact drill"
        },
        {
            title: "موتور برق رونیکس 4790",
            price: "6/480/000",
            img: p2,
            des: "ronix 2211 impact drill"
        },
        {
            title: "دریل چکشی رونیکس۲۲۱۱",
            price: "1/580/000",
            img: p3,
            des: "ronix 2211 impact drill"
        },
        {
            title: "مینی فرز ادون مدل AG115",
            price: "826/000",
            img: p4,
            des: "ronix 2211 impact drill"
        },
    ]

    return (
        <div className="flex flex-col gap-5 px-20 justify-center py-20 max-md:px-5 max-md:py-7">
            <div className="flex flex-row justify-between py-6">
                <span className="text-main text-lg font-irans max-md:text-sm">
                    جدیدترین محصولات
                </span>
                <div className="flex flex-row justify-center cursor-pointer text-main hover:text-[#942e15] ">
                    <span className=" text-lg font-irans max-md:text-sm">
                        مشاهده همه
                    </span>
                    <svg className="w-7 h-7 max-md:w-4 max-md:h-4" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 18.4114C30 18.981 29.5768 19.4516 29.0277 19.5261L28.875 19.5364L9.099 19.5355L16.2435 26.6508C16.6838 27.0892 16.6853 27.8015 16.2469 28.2418C15.8484 28.6421 15.2235 28.6797 14.7823 28.3539L14.6559 28.2452L5.58092 19.2092C5.52288 19.1514 5.47248 19.0889 5.42969 19.0228C5.41761 19.003 5.40531 18.9826 5.39365 18.9619C5.38292 18.9441 5.37323 18.9256 5.36408 18.907C5.35138 18.8798 5.33897 18.8517 5.32771 18.8231C5.31855 18.801 5.31091 18.7795 5.30394 18.7579C5.29565 18.7311 5.2876 18.7025 5.28067 18.6734C5.27552 18.6531 5.27144 18.6336 5.26788 18.614C5.26288 18.5849 5.25862 18.5547 5.25558 18.5242C5.25296 18.5009 5.25138 18.4779 5.25051 18.4548C5.25028 18.4408 5.25 18.4261 5.25 18.4114L5.25056 18.3678C5.25143 18.3458 5.25293 18.3237 5.25509 18.3017L5.25 18.4114C5.25 18.3404 5.25658 18.271 5.26915 18.2036C5.27207 18.1875 5.27554 18.171 5.27939 18.1546C5.28738 18.1207 5.29662 18.0881 5.30725 18.0561C5.31247 18.0402 5.31855 18.0233 5.32505 18.0064C5.3382 17.9726 5.35249 17.9403 5.36821 17.9089C5.37551 17.8941 5.38369 17.8786 5.39225 17.8633C5.40631 17.8383 5.4208 17.8146 5.43611 17.7914C5.44691 17.775 5.45888 17.758 5.47137 17.7412L5.48111 17.7282C5.51142 17.6886 5.5443 17.6511 5.5795 17.6159L5.58085 17.6149L14.6559 8.57737C15.0961 8.13894 15.8084 8.14042 16.2468 8.58067C16.6454 8.98089 16.6804 9.60596 16.3527 10.0457L16.2435 10.1717L9.102 17.2855L28.875 17.2864C29.4963 17.2864 30 17.7901 30 18.4114Z" fill="#FF5023" />
                    </svg>
                </div>

            </div>
            <div className="grid grid-rows-1 grid-cols-4 gap-5 max-md:grid-cols-2">
                {products.map((i, index) => (
                    <div className="bg-[#f9f9f9] rounded-[20px] p-5 flex flex-col gap-3
                    ease-out hover:translate-y-2 duration-500 cursor-pointer">
                        <div className="bg-[#e1e1e1] p-3 rounded-[15px] h-[190px] max-md:h-[120px]">
                            <Image className="m-auto" src={i.img} />
                        </div>

                        <span className="font-irans text-xl text-[#212121] max-md:text-sm">{i.title}</span>
                        <span className="font-irans text-[16px] text-[#9c9c9c] max-md:text-[8px]">{i.des}</span>
                        <div className="flex flex-row justify-between px-5 max-md:px-0">
                            <span className="font-irans text-[#212121] text-xl max-md:text-sm">قیمت:</span>
                            <span className="font-irans text-[#212121] text-xl max-md:text-sm">{i.price}</span>
                        </div>
                        <div className="flex justify-center py-5">
                            <svg width="180" height="1" viewBox="0 0 180 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="180" y1="0.5" y2="0.5" stroke="#DEDEDE" />
                            </svg>
                        </div>
                        <div className="bg-main text-white font-irans cursor-pointer py-2 rounded-lg flex flex-row gap-2 
                    px-5 m-auto justify-center hover:bg-[#942e15] max-md:px-2">
                            <svg className="max-md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z" fill="white" fill-opacity="0.36" />
                                <path d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z" fill="white" fill-opacity="0.36" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z" fill="white" />
                            </svg>

                            <span className="text-sm text-center max-md:text-[8px]" >افزودن به سبد خرید</span>

                        </div>

                    </div>

                ))}


            </div>
        </div>
    )
}
export default NewProducts