import React from 'react';

const Com = (props) => {
	const { brand, model, year } = props.car;
	const { a, b, c } = props.logo;
	const { name, age, location } = props.kids;
	const { x, y, z } = props.java;
	const { ab, bc, cd, p } = props.kello;

	const numchange = (e) => {
		props.setNum(+e.target.id);

		props.setPop(true);
		// else {
		// // 	props.SetPop(false);
		// // }
	};
	return (
		<div>
			<h1>
				{brand} {model} {year}
			</h1>
			<h1>
				{a} {b} {c}
			</h1>
			<h1>
				{name} {age} {location}
			</h1>
			<h1>
				{x} {y} {z}
			</h1>
			<h1>
				{ab}
				{bc}
				{cd}
				{p}
			</h1>
			<div></div>
			<p>{props.children}</p>
			<div></div>
			<div>
				{props.arr.map((v, i) => {
					const clickhack = () => {
						alert('hello jaya');
					};
					return (
						<div key={i}>
							<p> {v.title} </p>
							<p>{v.id}</p>
							<img
								id={i}
								src={v.src}
								alt="rtre"
								onClick={(e) => {
									numchange(e);
								}}
							/>
							<button type="butoon" onClick={clickhack}>
								click me
							</button>
						</div>
					);
				})}
			</div>
			<div>
				{props.student.map((v, idx) => {
					const clickHandler = () => {
						alert('hello');
					};
					return (
						<div key={idx}>
							<p>{v.name}</p>
							<p>{v.age}</p>
							<p>{v.course}</p>
							<button type="butoon" onClick={clickHandler}>
								clickme
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Com;
