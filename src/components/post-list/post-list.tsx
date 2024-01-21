import React, { ChangeEvent, FC } from 'react';
import { Masonry } from '@mui/lab';
import { Grid, Stack, Typography, Pagination } from '@mui/material';
import PostCard from '../post-card';
import usePagination from '../../hooks/usePagination';

export enum PostListType {
	Masonry = 'masonry',
	Grid = 'grid',
}

type PostListProps = {
	posts: Post[];
	type: string;
	onPostDelete: (id: string) => void;
};

const PostList: FC<PostListProps> = ({ posts, onPostDelete, type }) => {
	const PER_PAGE = 8;
	const { currentPage, getCurrentData, setPagePaginate, countPage } =
		usePagination<Post>(posts, PER_PAGE);
	function handlePageChange(e: ChangeEvent<unknown>, page: number) {
		setPagePaginate(page);
	}
	return (
		<>
			{type === PostListType.Masonry ? (
				<Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
					{getCurrentData().map((item) => (
						<PostCard key={item._id} onPostDelete={onPostDelete} {...item} />
					))}
				</Masonry>
			) : (
				<Grid container spacing={2}>
					{getCurrentData().map((item) => (
						<Grid
							key={item._id}
							item
							sx={{ display: 'flex' }}
							xs={12}
							sm={6}
							md={4}
							lg={3}>
							<PostCard onPostDelete={onPostDelete} {...item} />
						</Grid>
					))}
				</Grid>
			)}
			<Stack spacing={2} sx={{ marginTop: 2 }}>
				<Typography> Страница {currentPage}</Typography>
				<Pagination
					count={countPage}
					page={currentPage}
					onChange={handlePageChange}
				/>
			</Stack>
		</>
	);
};

export default PostList;
