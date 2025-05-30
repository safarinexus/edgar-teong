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

export interface TechIconProps {
    overridePath?: string;
    technology: string;
    customTWprop?: string;
}

export interface TechMap { 
    [key: string]: (size?: string) => JSX.Element;
}

export type ListingPost =  Omit<Post, 'content'>;

export type tParams = Promise<{ slug: string }>;