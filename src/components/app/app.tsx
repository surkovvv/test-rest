import React, { useEffect, useState } from 'react';
import './app.css';
import Header from '../header';
import HomePage from '../../pages/home';
import Footer from '../footer';
import { postData } from '../../posts';
const App = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	function handlePostDelete(idPost: string) {
		const newPosts = posts.filter((currentPost) => currentPost._id !== idPost);
		setPosts(newPosts);
	}
	useEffect(() => {
		setPosts(postData);
	}, []);

	return (
		<>
			<Header />
			<HomePage posts={posts} onPostDelete={handlePostDelete} />
			<Footer />
		</>
	);
};

export default App;
