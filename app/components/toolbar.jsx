import Logo from "../ui/logo"
import SerachBar from "../ui/search-bar"
import Profile from "./profile"

const Toolbar = () => {
    return (
        <div className=" flex flex-row justify-between p-4 max-md:flex-col-reverse">
            <div className="basis-[20%] max-md:hidden">
                <Logo />
            </div>
            <div className="basis-[60%] max-md:basis-full">
                <SerachBar />
            </div>
            <div className="basis-[20%] max-md:hidden">
                <Profile />
            </div>
        </div>
    )
}
export default Toolbar