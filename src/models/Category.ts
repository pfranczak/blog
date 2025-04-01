import { Author } from "./Author";
import { Category } from "./Post";

export interface CategoriesResponse {
	categories: Category[]
}

export interface Content {
	text: string;
	markdown: string;
}

export interface RecentPost {
	createdAt: string;
	image: {
		url: string;
	};
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	id: string;
	author: Author;
}

export interface RecentPostsResponse {
	posts: RecentPost[]
}