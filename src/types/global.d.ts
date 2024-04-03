export {};

declare global {
	interface CommentPost {
		id: string;
		text: string;
		createdAt: string;
		user?: User;
		post?: Post;
	}

	interface Post {
		images: string;
		description: string;
		id: string;
		title: string;
		body: string;
		createdAt: string;
		updatedAt?: string;
		slug: string;
		isPublished: boolean;
		tags: string[];
		favoritesCount: number;
		favorites?: FavoriteUser[];
		comments?: CommentPost[];
		author?: User;
		userId?: string;
	}

	interface User {
		id: string;
		email: string;
		name: string;
		about: string;
		avatarPath: string;
		phone: string;
		roles: string[];
		favoritesPost: FavoritesPost[];
	}

	interface FavoriteUser {
		id: string;
		userId: string;
		postId: string;
		user: User;
	}
	interface FavoritesPost {
		id: string;
		userId: string;
		postId: string;
		post: Post;
	}

	type PostLikeParam = {
		_id: string;
		likes: string[];
	};
}
