import { AiOutlineFileText, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiImage, BiMoon, BiSun } from "react-icons/bi";
import { FaBlog, FaTimes } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";

interface Props {
    isHomePage: boolean;
    showMenu?: boolean;
    setShowMenu?: (newValue: boolean) => void;
    activeLink?: string;
};

const Header: React.FC<Props> = ({ showMenu, setShowMenu, activeLink, isHomePage }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleNav = () => {
        setShowMenu?.(!showMenu);
    };


    return (
        <header id="header" className="header">
            <nav className="nav container mx-auto">
                <a href={"/#"} className="nav__logo mx-6">
                {isHomePage ? "Irving" : "Home" }
                </a>
                <div className="nav__buttons">
                    {theme === "dark" ? (
                        <BiSun className="nav__toggle-darktheme" id="button-darktheme" onClick={handleTheme} />
                    ) : (
                        <BiMoon className="nav__toggle-darktheme" id="button-darktheme" onClick={handleTheme} />
                    )}
                    {isHomePage && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
                        <TiThMenuOutline />
                    </div>
                    )}
                </div>
                {isHomePage && (
                    <div className={"nav__menu " + (showMenu ? "show-menu" : "")} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href={"/#"} className={`nav__link flex items-center ${activeLink === "hero" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <AiOutlineHome className="nav__icon" />
                                    <div className="pl-1">Home</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#about"} className={`nav__link flex items-center ${activeLink === "about" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <AiOutlineUser className="nav__icon" />
                                    <div className="pl-1">About</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#skills"} className={`nav__link flex items-center ${activeLink === "skills" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <AiOutlineFileText className="nav__icon" />
                                    <div className="pl-1">Skills</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#projects"} className={`nav__link flex items-center ${activeLink === "projects" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <BiImage className="nav__icon" />
                                    <div className="pl-1">Projects</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/blog"} className={`nav__link flex items-center ${activeLink === "blogs" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <FaBlog className="nav__icon" />
                                    <div className="pl-1">Blog</div>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href={"/#contact"} className={`nav__link flex items-center ${activeLink === "contact" ? "nav__link-active" : ""}`} onClick={toggleNav}>
                                    <MdOutlineContactMail className="nav__icon" />
                                    <div className="pl-1">Contact</div>
                                </a>
                            </li>
                        </ul>
                        <FaTimes className="nav__close" id="nav-close" onClick={toggleNav} />
                    </div>

                    )
                }
            </nav>
        </header>
    );
};
Header.displayName = "Header";


export default Header;
