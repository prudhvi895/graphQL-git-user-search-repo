import React from 'react';
import 'styled-components/macro';
import Card from './Card';

const MyCard = ({ data }) => {

	return (
		<Card>
			<p>{data.id}</p>
			<p css={{
						color: 'rgb(50,205,50)',
						fontSize: 24,
						marginTop: 12,
					}}>
				{data.name}
			</p>
			<a href={data.url}>Link to GitHub Repo</a>
		</Card>
	);
};

export default MyCard;
