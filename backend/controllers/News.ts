export interface News {

	title: string,
	content: string,
	author: string,
	createdAt: Date,
	picture: string

}


export interface NewsDomainModel {
	id: number;
	title: string;
	content: string;
}