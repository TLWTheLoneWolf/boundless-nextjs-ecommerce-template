import Link from 'next/link';
import logoImg from '../../assets/logo.jpg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || 'Pizza Tank inc.';
	return <>
        <div className='page-footer__logo'>
					<Link href='/'>
						<img src={logoImg.src} width={'90px'} height={'100px'} alt={title} />
					</Link>
        </div>
        <div className='page-footer__company-info'>
            <p className='title'>{title}</p>
        </div>
        <div className='page-footer__disclaimer'>
            <p className='text-muted small'>
                This website is for the worldwide distribution of pizza. We strive for excelence in a global pizza economy!
            </p>
        </div>
    </>;
}