import CoverTextInCenter from '../../components/CoverTextInCenter';
import bgImg from '../../assets/cover-bg.jpeg';
import bgPortraitImg from '../../assets/cover-bg-portrait.jpg';

export default function CoverPage() {
	return (
		<>
			<CoverTextInCenter
				showChevronDown
				img={bgImg.src}
				imgPortrait={bgPortraitImg.src}
				content={{
					intro: 'pizza tank',
					head: 'revolution through pizza',
					subHead: 'hunger dies beneath our treads'
				}}
				shadow={{
					opacity: 0.5,
					backgroundColor: '#000'
				}}
				link={'http://google.com'}
			/>
			<div className='text-center' style={{minHeight: 200}}>pizza</div>
		</>
	);
}