export enum ParticleEffect {
    NoteCircularTapBase = 110000,
    NoteCircularTapRed,
    NoteCircularTapGreen,
    NoteCircularTapBlue,
    NoteCircularTapYellow,
    NoteCircularTapPurple,
    NoteCircularTapCyan,

    NoteCircularAlternativeBase = 111000,
    NoteCircularAlternativeRed,
    NoteCircularAlternativeGreen,
    NoteCircularAlternativeBlue,
    NoteCircularAlternativeYellow,
    NoteCircularAlternativePurple,
    NoteCircularAlternativeCyan,

    NoteCircularHoldBase = 112000,
    NoteCircularHoldRed,
    NoteCircularHoldGreen,
    NoteCircularHoldBlue,
    NoteCircularHoldYellow,
    NoteCircularHoldPurple,
    NoteCircularHoldCyan,

    NoteLinearTapBase = 120000,
    NoteLinearTapRed,
    NoteLinearTapGreen,
    NoteLinearTapBlue,
    NoteLinearTapYellow,
    NoteLinearTapPurple,
    NoteLinearTapCyan,

    NoteLinearAlternativeBase = 121000,
    NoteLinearAlternativeRed,
    NoteLinearAlternativeGreen,
    NoteLinearAlternativeBlue,
    NoteLinearAlternativeYellow,
    NoteLinearAlternativePurple,
    NoteLinearAlternativeCyan,

    NoteLinearHoldBase = 122000,
    NoteLinearHoldRed,
    NoteLinearHoldGreen,
    NoteLinearHoldBlue,
    NoteLinearHoldYellow,
    NoteLinearHoldPurple,
    NoteLinearHoldCyan,

    LaneCircular = 310000,
    LaneLinear = 320000,

    SlotCircular = 410000,
    SlotLinear = 420000,

    JudgeLineCircular = 510000,
    JudgeLineLinear = 520000,
}

export function customParticleEffect(
    engineId: number,
    effectId: number
): number {
    return 100000 + engineId * 100 + effectId
}
