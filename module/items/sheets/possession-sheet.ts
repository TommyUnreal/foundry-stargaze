import { BWItemSheet } from './bwItemSheet';

export class PossessionSheet extends BWItemSheet {
    get template(): string {
        return 'systems/stargaze/templates/items/possession.hbs';
    }
}
