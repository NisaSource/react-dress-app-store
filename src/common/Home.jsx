import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<section className="home-banner">
				<div className="banner-inner d-flex align-items-center">
					<div className="container">
						<div className="banner-content row">
							<div className="offset-lg-2 col-lg-8">
								<h3>
									Fashion for
									<br />
									Upcoming Summer
								</h3>

								<Link className="white-bg-btn" to="/dress">
									View Collection
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
