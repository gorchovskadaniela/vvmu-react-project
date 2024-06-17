import {Link} from "react-router-dom";
import './Header.scss';
import logo from '../../assets/logo.png';

export const Header = () => {
	return (
		<header className="header">
			<div className="shell">
				<div className="header__inner">
					<Link to="/" className="header__logo">
						<img src={logo} alt="" />
					</Link>

					<div className="header__menu">
						<nav className="header__nav">
							<ul>
								<li>
									<Link to="/blog">Blog</Link>
								</li>

								<li>
									<Link to="/contacts">Contacts</Link>
								</li>
							</ul>
						</nav>
					</div>

					<a href="#" className="nav-trigger">
						<span></span>

						<span></span>

						<span></span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
