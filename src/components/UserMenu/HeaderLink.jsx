
import { Header, Link } from "./UserMenu.styled";

export const HeaderLink = () => {
    return (
        <div>
            <Header>
            <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                </Header>
        </div>
    )
};

export default HeaderLink;