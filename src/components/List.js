import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import MyCard from './MyCard';
import Avatar from './Avatar';
import styled from 'styled-components';
import 'styled-components/macro';

const GET_USER_ACTIVITY = gql`
	query($user: String!) {
		user(login: $user) {
			id
			login
			url
			avatarUrl
			repositories(last:30) {
				edges {
					node {
						id
						name
						url
						createdAt
					}
				}
			}
		}
	}
`;

const ListWrapper = styled('section')({
	margin: '15px 10%',
	backgroundColor: '#fafafa',
	borderRight: '2px solid #eee',
	padding: 15,
	height: 'calc(100vh - 4px)',
	overflowY: 'scroll',
});

const renderRepos = (repos) => {
	return (
		repos.map(({ node }) => (
			<MyCard data={node} key={node.id} />
		))
	)
};

const List = ({ user }) => (
	<ListWrapper>
		<Query query={GET_USER_ACTIVITY} variables={{ user}}>
			{({ data, error, loading }) => (
				<>
					{loading && <div>loading...</div>}
					{error && <div>{JSON.stringify(error)}</div>}
					{data && data.user && (
						<>
							<div
								css={{
									alignItems: 'center',
									display: 'flex',
									padding: '0 0 16px',
								}}
							>
								<Avatar src={data.user.avatarUrl} width={25} height={25} />
								<div css={{ marginLeft: 12 }}>{user}</div>
							</div>
							{data.user.repositories && data.user.repositories.edges.length > 0 ? renderRepos(data.user.repositories.edges) : <div>No repos available :(</div>}
						</>
					)}
				</>
			)}
		</Query>
	</ListWrapper>
);

export default List;
