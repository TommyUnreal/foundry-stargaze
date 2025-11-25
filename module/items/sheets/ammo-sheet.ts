import { BWItemSheet } from './bwItemSheet';

export class AmmoSheet extends BWItemSheet {
    get template(): string {
        return 'systems/burningwheel/templates/items/ammo.hbs';
    }
}
