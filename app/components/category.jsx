import Image from 'next/image'
import c1 from '../../public/images/c1.png'
import c2 from '../../public/images/c2.png'
import c3 from '../../public/images/c3.png'
import c4 from '../../public/images/c4.png'
import c5 from '../../public/images/c5.png'
const Category = () => {
    const category = [
        {
            name: "اره کمانی",
            icon: c1
        },
        {
            name: "دریل",
            icon: c2
        },
        {
            name: "سنگ فرز",
            icon: c3
        },
        {
            name: "اره برقی",
            icon: c4
        },
        {
            name: "اره گرد بر",
            icon: c5
        },
        {
            name: "پیکور",
            icon: c1
        },
    ]
    return (
        <div className="grid grid-rows-1 grid-cols-6 pt-20 max-md:grid-cols-2 px-40 max-md:px-2 max-md:pt-7">

            {
                category.map((i, index) => (
                    <div className='flex flex-col
                     m-auto gap-3 justify-center cursor-pointer ease-out hover:translate-y-2 duration-500 text-[#212121] hover:text-main'>
                        <div className='rounded-3xl flex flex-col justify-center shadow-slate-100 shadow-md w-[111px] h-[111px] bg-white'>
                            <Image className='m-auto' width={60} src={i.icon} />

                        </div>
                        <span className='text-lg font-irans text-center  '>{i.name}</span>
                    </div>
                ))
            }

        </div>
    )
}
export default Category