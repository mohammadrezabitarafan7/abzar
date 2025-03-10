const SerachBar = () => {
    return (
        <div className="h-[48px] flex flex-row  justify-center w-[390px] mx-auto  rounded-lg 
        max-md:w-2/3">
            <input className="w-full
             bg-gray rounded-s-lg font-irans focus:outline-none
            text-[12px] placeholder:text-gray1 text-gray1 px-2"
                placeholder="محصول مورد نظر را جستوجو کنید" type="text" />
            <div className="bg-main w-[50px] rounded-e-lg " >
                <div className="m-auto items-center flex justify-center  h-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11.4783C1 15.8486 1.78302 18.3581 3.30283 19.8237C4.83125 21.2975 7.35021 21.9565 11.4783 21.9565C15.6063 21.9565 18.1253 21.2975 19.6537 19.8237C21.1735 18.3581 21.9565 15.8486 21.9565 11.4783C21.9565 7.10793 21.1735 4.59845 19.6537 3.13291C18.1253 1.65907 15.6063 1.00002 11.4783 1.00002C7.35021 1.00002 4.83125 1.65907 3.30283 3.13291C1.78302 4.59845 1 7.10793 1 11.4783Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.9564 22.9565L20.3477 20.3478" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default SerachBar