import React, { FC } from 'react';
import cn from 'classnames';
import s from './post-card.module.css';
import {
	Card,
	CardHeader,
	Avatar,
	CardMedia,
	CardContent,
	Typography,
	SvgIconProps,
	SvgIcon,
	Box,
	Stack,
	Button,
} from '@mui/material';

type TPostCardProps = {
	onPostDelete: (id: string) => void;
} & Post;

export function FireIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path
				d='M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z'
				fill='#000'></path>
		</SvgIcon>
	);
}

export function CalendarIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path d='M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z' />
		</SvgIcon>
	);
}

export function CloseIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
		</SvgIcon>
	);
}

const PostCard: FC<TPostCardProps> = ({
	_id,
	title,
	text,
	author,
	image,
	likes,
	onPostDelete,
}) => {
	const like = true;

	function handleClickRemove() {
		onPostDelete(_id);
	}
	return (
		<Card sx={{ maxWidth: 345 }} className={s.item}>
			<Box component='div' className={s.wrapper}>
				<CloseIcon className={s.remove_icon} onClick={handleClickRemove} />
				<CardMedia
					component='img'
					height='194'
					image={image ? image : 'https://picsum.photos/480/320/'}
					alt=''
					className={s.media}
				/>
				<CardHeader title={title} />
				<CardContent sx={{ mb: 2 }} className={s.body}>
					<Stack direction='row' justifyContent='center' gap={1}>
						<CalendarIcon fontSize='small' className={cn(s.date_icon)} />
					</Stack>
					<Typography className={s.text}>{text}</Typography>
				</CardContent>
				<Stack direction='row' gap='10px' className={s.footer}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Avatar
							aria-label='post'
							className={s.avatar}
							sx={{ width: 35, height: 35 }}>
							R
						</Avatar>
						<Typography>{author.name}</Typography>
					</div>
					<Button
						sx={{ marginLeft: 'auto' }}
						className={cn(s.icon, s.like, { [s.like_active]: like })}>
						<FireIcon /> {likes?.length}
					</Button>
				</Stack>
			</Box>
		</Card>
	);
};

export default PostCard;
