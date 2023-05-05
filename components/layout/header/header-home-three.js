/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

export default function HeaderHomeThree() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const scroll = useScroll();
	return (
		<header
			className={`site-header site-header--menu-right fugu--header-section fugu--header-three ${
				scroll ? "sticky-menu" : ""
			}`}
			id="sticky-menu"
			style={{
			}}
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link href={"/"}>
							{/* <img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" /> */}
							<h3 style={{
								zIndex: 2,
								color: 'white'
							}}>At-Hack</h3>
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								<NavItem navItemText="Pages" menuItems={PagesDropdownMenus} />
								<NavItem navItemText="Equipe" menuItems={[]} href={"/team"} />
								<NavItem navItemText="Contactez-nous" menuItems={[]} href={"/contact"} />
								{/* <NavItem navItemText="Demo" menuItems={DemoDropdownMenus} /> */}
								{/* <NavItem navItemText="Elements" menuItems={ElementsMegaMenu} megaMenu /> */}
								{/* <NavItem navItemText="Blog" menuItems={BlogDropdownMenus} /> */}
							</Navbar>
						</nav>
					</div>
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="fugu--btn fugu--menu-btn1" href="contact.html" style={{
							marginLeft: 10
						}}>
							Se connecter
						</a>
					</div>
					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}
