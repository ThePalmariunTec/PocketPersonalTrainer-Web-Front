import { User } from './user';
import { Address } from './address';

export class Gym{
    id: number;
    nome: string;
    cidade: string;
    estado: string;
    address:Address;
    user: User;
}