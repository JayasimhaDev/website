import React, { useState } from 'react';
import Com from './Com';
import Popup from './Popup';

function App() {
	const [num, setNum] = useState(0);
	const [pop, setPop] = useState(false);
	const brand = 'maruthi';
	const logo = 'toyota';
	const kids = 'localkids';
	const java = 'scripts';
	const kello = 'abcd';
	const arr = [
		{
			id: 'image01',
			title: 'homelane01',
			src: 'https://super.homelane.com/KRI133426_srp-1509888466_1_crockery-cabinet-2400-1.jpg',
		},
		{
			id: 'image02',
			title: 'homelane02',
			src: 'https://super.homelane.com/products/07dec18/entertainment_unit/2.jpg',
		},
		{
			id: 'image03',
			title: 'homelane03',
			src: 'https://super.homelane.com/products/07dec18/entertainment_unit/5.jpg',
		},
	];

	const student = [
		{
			name: 'ramesh',
			age: '25y',
			course: 'bcom',
		},
		{
			name: 'ravi',
			age: '25y',
			course: 'mcom',
		},
		{
			name: 'paramesh',
			age: '25y',
			course: 'mca',
		},
	];

	return (
		<div>
			{pop === false ? (
				<Com
					brand={brand}
					logo={logo}
					kids={kids}
					java={java}
					kello={kello}
					arr={arr}
					student={student}
					setNum={setNum}
					setPop={setPop}
				/>
			) : (
				<Popup arr={arr} num={num} setPop={setPop} />
			)}
		</div>
	);
}

export default App;
