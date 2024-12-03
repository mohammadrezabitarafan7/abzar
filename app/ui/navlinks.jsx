'use client'
import Link from 'next/link'
import Menu from '../ui/icons/menu'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Bars3Icon, ChatBubbleBottomCenterTextIcon, ShoppingBagIcon, ClipboardDocumentListIcon,HomeIcon } from '@heroicons/react/24/outline';


const NavLinks = () => {
    const pathname = usePathname()
    const links = [
        {
            name: "صفحه نخست",
            icon: HomeIcon,
            href: "/"
        },
        {
            name: "آرشیو بلاگ",
            icon: ClipboardDocumentListIcon,
            href: ""
        },
        {
            name: "فروشگاه",
            icon: ShoppingBagIcon,
            href: ""
        },
        {
            name: "سوالات متداول",
            icon: ChatBubbleBottomCenterTextIcon,
            href: ""
        },
    ]
    return (
        <div className='my-auto flex flex-row gap-2 px-6'>
            <Link
                href="/"
                className='flex px-3  bg-main text-white select-none flex-row gap items-center font-irans rounded-lg text-center text-sm'

            >
                <Bars3Icon className=" w-5 h-5 " aria-hidden="true" />
                <span>دسته بندی محصولات</span>
            </Link>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href="/"
                    className={clsx(
                        'flex flex-row gap-1 p-2 space-x-2  rounded-lg  font-irans text-center text-sm',
                        pathname === link.href
                            ? 'text-main select-none'
                            : ' text-gray2  hover:bg-main hover:text-white',


                    )}
                >


                    <link.icon className=" w-5 h-5 " aria-hidden="true" />
                    <span>{link.name}</span>
                </Link>
            ))}
        </div>
    )
}
export default NavLinks