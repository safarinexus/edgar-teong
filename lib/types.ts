export interface Metadata {
    title: string; 
    date: string; 
    description: string;
}
export interface Post { 
    slug: string; 
    data: Metadata; 
    content: string;
}

export type ListingPost =  Omit<Post, 'content'>;