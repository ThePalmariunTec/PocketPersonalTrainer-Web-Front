import { Person } from './person';
import { User } from './user';

export class Employe {
    id: number;
    user: User;
    documento: string;
    funcao: string;
    person: Person;
}