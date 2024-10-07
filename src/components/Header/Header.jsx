
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { logo } from "../../assets/img/main";

export default function Header ({ size, setShow }) {
    const handleLogoClick = () => {
        setShow(true);
    };

    const handleCartClick = () => {
        setShow(false);
    };

    return (
        <header className="header-general flex justify-between">
            <div className="header-general-logo flex items-center gap-5">
                <img src={logo} alt="logo" />
                <div>
                    <h1 className="font-extrabold cursor-pointer" onClick={handleLogoClick}>
                        KROSS STORE
                    </h1>
                    <h5 className="header-title">Магазин лучших кроссовок</h5>
                </div>
            </div>
            <nav className="header-nav flex gap-10 items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={handleCartClick}>
                    <BsCart2 />
                    <span>{size}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaRegHeart />
                    <span>Закладки</span>
                </div>
                <div className="flex items-center gap-2">
                    <CgProfile className="color-#9B9B9B text-xl" />
                    <span>Профиль</span>
                </div>
            </nav>
        </header>
    );
};

