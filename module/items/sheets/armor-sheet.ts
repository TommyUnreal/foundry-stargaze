import {
    armorLocationSelect,
    gearQualitySelect,
    shadesSelect,
} from '../../constants';
import { BWItemSheet, BWItemSheetData } from './bwItemSheet';

export class ArmorSheet extends BWItemSheet {
    get template(): string {
        return 'systems/burningwheel/templates/items/armor.hbs';
    }

    getData(): MeleeSheetData {
        const data = super.getData() as MeleeSheetData;
        data.armorLocations = armorLocationSelect;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { basic, ...rest } = { ...gearQualitySelect };
        data.armorQuality = rest;
        data.shades = shadesSelect;
        data.penalties = {
            none: 'BW.armor.untrainedNone',
            light: 'BW.armor.untrainedLight',
            heavy: 'BW.armor.untrainedHeavy',
            plate: 'BW.armor.untrainedPlate',
        };
        data.skills = {
            armor: 'BW.armor.skillArmor',
            barriers: 'BW.armor.skillBarriers',
            both: 'BW.armor.skillBoth',
        };
        return data;
    }
}

interface MeleeSheetData extends BWItemSheetData {
    armorQuality: { [key: string]: string };
    armorLocations: { [key: string]: string };
    shades: Record<string, string>;
    penalties: Record<string, string>;
    skills: Record<string, string>;
}
