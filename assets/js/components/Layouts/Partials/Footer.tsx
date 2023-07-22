import React from "react";

const Footer = () => {
	return (
		// <!-- Footer -->
		<footer className="content-footer footer bg-footer-theme">
			<div className="container-xxl">
				<div
					className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"
				>
					<div>
						©
						<script>
							document.write(new Date().getFullYear());
						</script>
						, made with ❤️ by <a href="#" target="_blank" className="fw-semibold">YardSignPlus</a>
					</div>
					<div>
						<a href="#" className="footer-link me-4" target="_blank">License</a>
						<a href="#" target="_blank" className="footer-link me-4">More Themes</a>

						<a href="#"
							target="_blank"
							className="footer-link me-4">Documentation</a>

						<a href="#" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
