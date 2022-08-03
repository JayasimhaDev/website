import React from 'react';

const Popup = ({ arr, num, setPop, children }) => {
	const close = () => {
		setPop(false);
	};
	return (
		<div>
			<img src={arr[num].src} onDoubleClick={close} />
			<p>{children}</p>
		</div>
	);
};

export default Popup;
