import type { RoleEnum } from '@shared';

export interface UserInterface {
    email: string;
    username: string;
    balance: number;
    role: RoleEnum;
}
