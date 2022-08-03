import React from 'react';

const Popup = ({ arr, num, setPop }) => {
	const close = () => {
		setPop(false);
	};
	return (
		<div>
			<img src={arr[num].src} onDoubleClick={close} />
		</div>
	);
};

export default Popup;
