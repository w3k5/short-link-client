import type { BaseEntityInterface } from '@shared';

export interface LinkEntity extends BaseEntityInterface {
    /**
     * Источник
     */
    source: string;
    /**
     * Перенаправление
     */
    alias: string;
    /**
     * Количество прямых редиректов
     */
    forwards: number;
}
