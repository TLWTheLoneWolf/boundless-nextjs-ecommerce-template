import {faUndo} from '@fortawesome/free-solid-svg-icons/faUndo';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons/faPhoneVolume';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const shippingInfo = [
	{id: 1, text: 'Overnight delivery.'},
	{id: 2, text: 'Changed your mind? Problem!'},
	{id: 3, text: 'Customers? I disagree'},
];

export default function ProductShipping() {
	return (
		<div className='product-page__shipping'>
			{shippingInfo.map(row => (
				<div className='product-page__shipping-row' key={row.id}>
					<span className='product-page__shipping-icon'>
						
					</span>
					{row.text}
				</div>
			))}
		</div>
	);
}