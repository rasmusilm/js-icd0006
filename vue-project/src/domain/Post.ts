export interface Post {
    id: string;
    title: string;
    explanation: string;
    PostedAt: string;
    Edited: boolean;
    Deleted: boolean;
    complexity: string;
    difficulty: string;
    userId: string;
    User?: User;
    rating: number;
    tagIds: string[];
}

interface User {
    Name: string;
}