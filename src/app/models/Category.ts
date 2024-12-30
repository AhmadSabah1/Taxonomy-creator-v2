export interface Category {
    id: string;
    name: string;
    description?: string;
    color?: string;
    children?: Category[];
    parentCategoryId?: string | null;
    literatureIds?: string[];
    isOpen?: boolean; // Indicates if the node is expanded
}
