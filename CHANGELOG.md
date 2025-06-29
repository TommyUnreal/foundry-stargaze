# Stargaze Foundry VTT System Changelog

This file contains the changelog for the Stargaze Foundry VTT System, based on Burning Wheel implementation by [StasTserk](https://github.com/StasTserk/foundry-burningwheel). It documents notable changes, features, fixes, and maintenance updates for each release.

## 0.2.0

- Features:
    - Add Stargate Injury and Recovery system instead of Burning Wheel ptgs.
        - Included in the Character Sheet.
        - Custom dice rolls for Bleeding and Breathing.
        - Remove call of `_calculatePtgs()`.

## 0.1.0

-   Features:
    -   Add recording feature to roll dialogs.
        -   Roll tests are recorded automatically only when checkbox is checked in the roll dialog.
    -   Refactor system to implement Stargaze-specific details and folder structure for templates.
-   Maintenance:
    -   Add localization for roll dialog in the Stargaze module.
-   Bigfixes:
    -   Fix BL fate reroll not finding stat fate spent (Merged from upstream master branch).
