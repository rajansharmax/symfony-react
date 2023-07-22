import React from "react";
import { Heart } from "react-feather";

const Footer = () => {
	return (
		// <!-- Footer -->
		<footer className="content-footer footer bg-footer-theme">
			<div className="container-xxl">
				<p className='clearfix mb-0'>
					<span className='float-md-start d-block d-md-inline-block mt-25'>
						COPYRIGHT © {new Date().getFullYear()}{' '}
						<a href='#' target='_blank' rel='noopener noreferrer'>
						YardSignPlus
						</a>
						<span className='d-none d-sm-inline-block'>, All rights Reserved</span>
					</span>
					<span className='float-md-end d-none d-md-block'>
						Hand-crafted & Made with
						<Heart size={14} />
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
