// import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
// import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
// import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function SocialButtons() {
	return (
		<>
			<h3 className='page-footer__header'>Follow us</h3>
			<div className='page-footer__social-buttons'>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://fb.com'>
						
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://instagram.com'>
				
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://twitter.com'>
						
					</a>
				</div>
			</div>
			<p className='text-muted'>All rights reserved. © Boundless-Commerce</p>
		</>
	);
}