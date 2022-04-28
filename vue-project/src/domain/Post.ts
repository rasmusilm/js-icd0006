export interface Post {
    Id: string;
    Title: string;
    Text: string;
    PostedAt: string;
    Edited: boolean;
    Deleted: boolean;
    complexity: string;
    difficulty: string;
    userId: string;
    User: User;
    Rating: number;
}

interface User {
    Name: string;
}