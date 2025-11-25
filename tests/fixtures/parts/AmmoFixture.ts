import { Page } from 'playwright/test';
import { FixtureBase } from '../bwFixture';
import { GameFixture } from '../gameFixture';
import { BaseItemDialog, BaseItemFixture } from './BaseItemFixture';
import { SeededItems } from '../SeededData';

type LabelFields = 'Amount';
type CheckBoxFields = '';
type SelectFields = '';
class PropertyDialog extends BaseItemDialog<
    LabelFields,
    CheckBoxFields,
    SelectFields
> {
    constructor(fixture: BaseItemFixture, name: SeededItems) {
        super(fixture, name);
    }
}
export class PropertyFixture extends BaseItemFixture {
    constructor(page: Page, gamePage: GameFixture, test: FixtureBase) {
        super(page, gamePage, test);
    }

    async openDialog(name: SeededItems<'ammo'>) {
        await super.open(name);
        return new PropertyDialog(this, name);
    }
}
