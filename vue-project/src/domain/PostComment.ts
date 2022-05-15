export interface PostComment {
    id: string;
    text: string;
    projectIdeaId: string;
    user: User;
    userId: string;
    rating: number;
}

interface User {
    Name: string;
}