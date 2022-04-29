export interface Post {
    Id: string;
    title: string;
    explanation: string;
    PostedAt: string;
    Edited: boolean;
    Deleted: boolean;
    complexity: string;
    difficulty: string;
    userId: string;
    User: User;
    rating: number;
}

interface User {
    Name: string;
}