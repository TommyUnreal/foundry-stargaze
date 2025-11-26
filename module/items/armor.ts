import { BWItem, DisplayClass, HasPointCost } from './item';
import { rollDice } from '../rolls/rolls';
import { ShadeString } from '../helpers';

export class Armor extends BWItem<ArmorData> {
    prepareData(): void {
        super.prepareData();
        this.system.cssClass = 'equipment-armor';

        const dice = this.system.dice;
        this.system.helmDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageHelm
        );
        this.system.torsoDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageTorso
        );
        this.system.shouldersDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageShoulders
        );
        this.system.handsDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageHands
        );
        this.system.pantsDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damagePants
        );
        this.system.feetDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageFeet
        );
        this.system.underwearDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageUnderwear
        );
        this.system.coatDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageCoat
        );
        this.system.backpackDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageBackpack
        );
        this.system.shieldDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageShield
        );
        this.system.specialDisplayClass = this.calculateDisplayClass(
            dice,
            this.system.damageSpecial
        );
    }

    calculateDisplayClass(dice: number, locationDice: string): string {
        if (parseInt(locationDice) >= dice) {
            return 'armor-broken';
        }
        return '';
    }

    async assignDamage(roll: Roll, location: string): Promise<number> {
        const num1s = roll.dice[0].results.filter((r) => r.result === 1).length;
        if (num1s === 0) {
            return new Promise((r) => r(0));
        }

        const locationAccessor = `system.damage${location}`;
        // TEST
        const damage =
            parseInt(foundry.utils.getProperty(this, locationAccessor)) || 0;
        const updateData = {};
        let newDamage = 0;
        switch (this.system.quality) {
            case 'run of the mill':
                newDamage = damage + 1;
                updateData[locationAccessor] = newDamage;
                await this.update(updateData);
                return new Promise((r) => r(1));
            case 'superior':
                const reroll = await rollDice(num1s, false, 'B');
                if (
                    reroll &&
                    reroll.dice[0].results.filter((r) => r.result === 1).length
                ) {
                    newDamage = damage + 1;
                    updateData[locationAccessor] = newDamage;
                    await this.update(updateData);
                    return new Promise((r) => r(1));
                }
                return new Promise((r) => r(0));
            default:
                newDamage = this.system.dice;
                updateData[locationAccessor] = newDamage;
                await this.update(updateData);
                return new Promise((r) => r(num1s));
        }
    }
}

export interface ArmorData extends DisplayClass, HasPointCost {
    quality: string;
    dice: number;
    description: string;
    equipped: boolean;

    // damage info
    hasHelm: boolean;
    damageHelm: string;
    hasTorso: boolean;
    damageTorso: string;
    hasShoulders: boolean;
    damageShoulders: string;
    hasHands: boolean;
    damageHands: string;
    hasPants: boolean;
    damagePants: string;
    hasFeet: boolean;
    damageFeet: string;
    hasUnderwear: boolean;
    damageUnderwear: string;
    hasCoat: boolean;
    damageCoat: string;
    hasBackpack: boolean;
    damageBackpack: string;
    hasShield: boolean;
    damageShield: string;
    hasSpecial: boolean;
    damageSpecial: string;

    // clumsy weight info
    agilityPenalty: number;
    speedObPenalty: number;
    speedDiePenalty: number;
    climbingPenalty: number;
    healthFortePenalty: number;
    throwingShootingPenalty: number;
    stealthyPenalty: number;
    swimmingPenalty: number;
    perceptionObservationPenalty: number;
    untrainedPenalty: 'none' | 'light' | 'heavy' | 'plate';
    skill: string;

    shade: ShadeString;

    helmDisplayClass?: string;
    torsoDisplayClass?: string;
    shouldersDisplayClass?: string;
    handsDisplayClass?: string;
    pantsDisplayClass?: string;
    feetDisplayClass?: string;
    underwearDisplayClass?: string;
    coatDisplayClass?: string;
    backpackDisplayClass?: string;
    shieldDisplayClass?: string;
    specialDisplayClass?: string;
}
