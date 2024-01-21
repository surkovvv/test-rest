import { ChangeEvent, FC, useState } from 'react';
import { Container, Stack, Switch, Typography } from '@mui/material';
import PostList from '../../components/post-list';
import { PostListType } from '../../components/post-list/post-list';

interface IHomePageProps {
	posts: Post[];
	onPostDelete: (id: string) => void;
}

const HomePage: FC<IHomePageProps> = ({ posts, onPostDelete }) => {
	const [isMasonry, setIsMasonry] = useState<boolean>(false);
	const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIsMasonry(event.target.checked);
	};
	return (
		<Container maxWidth='lg'>
			<Stack direction='row' spacing={1} alignItems='center' sx={{ mt: 6 }}>
				<Typography>Grid</Typography>
				<Switch
					checked={isMasonry}
					onChange={handleSwitchChange}
					value='masonry'
					name='masonry'
				/>
				<Typography>Masonry</Typography>
			</Stack>

			<PostList
				posts={posts}
				onPostDelete={onPostDelete}
				type={isMasonry ? PostListType.Masonry : PostListType.Grid}
			/>
		</Container>
	);
};

export default HomePage;
