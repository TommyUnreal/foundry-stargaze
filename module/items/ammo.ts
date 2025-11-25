import { DisplayClass, BWItem } from './item';

export class Ammo extends BWItem<AmmoData> {
    type: 'ammo';
    prepareData(): void {
        super.prepareData();
        this.system.cssClass = 'equipment-property';
    }
}

export interface AmmoData extends DisplayClass {
    amount: number;
    tag: string;
    description: string;
}
