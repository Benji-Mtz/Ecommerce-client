// import MenuWeb from "./MenuWeb"
import MenuWeb from "./MenuWeb"
import Topbar from "./TopBar"

const Header = () => {
    return (
        <div className="header">
            <Topbar />
            <MenuWeb />
        </div>
    )
}

export default Header
