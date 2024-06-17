export interface News {

	title: string,
	content: string,
	author: string,
	createdAt: Date,

}


export interface NewsDomainModel {
	id: number;
	title: string;
	content: string;
}