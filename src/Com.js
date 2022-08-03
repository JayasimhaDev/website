import React from 'react';

const Com = (props) => {
	const numchange = (e) => {
		props.setNum(+e.target.id);

		props.setPop(true);
		// else {
		// // 	props.SetPop(false);
		// // }
	};
	return (
		<div>
			<h1>my brand is {props.brand}</h1>
			<h1>my brand is {props.logo}</h1>
			<h1>my brand is {props.kids}</h1>
			<h1>my brand is {props.java}</h1>
			<h1>my brand is {props.kello}</h1>
			<div>
				{props.arr.map((v, i) => {
					return (
						<div>
							<p> {v.title} </p>
							<p>{v.id}</p>
							<img
								id={i}
								src={v.src}
								onClick={(e) => {
									numchange(e);
								}}
							/>
						</div>
					);
				})}
			</div>
			<div>
				{props.student.map((v) => {
					return (
						<div>
							<p>{v.name}</p>
							<p>{v.age}</p>
							<p>{v.course}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Com;
