import { BWItemSheet } from './bwItemSheet';

export class PropertySheet extends BWItemSheet {
    get template(): string {
        return 'systems/stargaze/templates/items/property.hbs';
    }
}
