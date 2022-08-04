import React from 'react';

const Book = (props) => {
	return (
		<div>
			{props.book.map((book) => {
				return (
					<div>
						<h1>{book.title}</h1>
						<h1>{book.author}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Book;
