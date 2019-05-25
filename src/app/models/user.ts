import { Roles } from './roles';

export class User{
    id: number;
    userName: string;    
    email: string;
    senha: string;
    role: Roles;
}