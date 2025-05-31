//Describes the structure of tasks (Todo)
//Defines the type for filtering (Filter)
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
export type Filter = 'all' | 'active' | 'completed';
