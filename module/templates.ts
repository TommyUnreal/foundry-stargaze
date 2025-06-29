export async function preloadHandlebarsTemplates(): Promise<unknown[]> {
    // Define template paths to load
    const templatePaths = [
        // Actor Sheet Partials
        'systems/stargaze/templates/parts/armor.hbs',
        'systems/stargaze/templates/parts/learning.hbs',
        'systems/stargaze/templates/parts/ptgs.hbs',
        'systems/stargaze/templates/parts/relationships.hbs',
        'systems/stargaze/templates/parts/rollable-item.hbs',
        'systems/stargaze/templates/parts/rollable-skill.hbs',
        'systems/stargaze/templates/parts/spell.hbs',
        'systems/stargaze/templates/parts/trait.hbs',
        'systems/stargaze/templates/parts/weapons.hbs',
        'systems/stargaze/templates/parts/injury.hbs',

        'systems/stargaze/templates/sections/attributes.hbs',
        'systems/stargaze/templates/sections/beliefs.hbs',
        'systems/stargaze/templates/sections/character-settings.hbs',
        'systems/stargaze/templates/sections/footer.hbs',
        'systems/stargaze/templates/sections/gear.hbs',
        'systems/stargaze/templates/sections/header.hbs',
        'systems/stargaze/templates/sections/instincts.hbs',
        'systems/stargaze/templates/sections/learning.hbs',
        'systems/stargaze/templates/sections/misc.hbs',
        'systems/stargaze/templates/sections/ptgs.hbs',
        'systems/stargaze/templates/sections/skills.hbs',
        'systems/stargaze/templates/sections/social.hbs',
        'systems/stargaze/templates/sections/spells.hbs',
        'systems/stargaze/templates/sections/stats.hbs',
        'systems/stargaze/templates/sections/traits.hbs',
        'systems/stargaze/templates/sections/weapons-and-armor.hbs',

        'systems/stargaze/templates/parts/npc-stat.hbs',
        'systems/stargaze/templates/parts/npc-editable.hbs',
        'systems/stargaze/templates/parts/npc-skill.hbs',
        'systems/stargaze/templates/parts/npc-spell.hbs',
        'systems/stargaze/templates/parts/npc-weapon.hbs',

        'systems/stargaze/templates/parts/lifepath.hbs',
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
}
