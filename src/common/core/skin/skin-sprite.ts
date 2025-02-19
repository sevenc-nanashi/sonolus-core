export enum SkinSprite {
    NoteHeadNeutral = 1000,
    NoteHeadRed,
    NoteHeadGreen,
    NoteHeadBlue,
    NoteHeadYellow,
    NoteHeadPurple,
    NoteHeadCyan,

    NoteTickNeutral = 2000,
    NoteTickRed,
    NoteTickGreen,
    NoteTickBlue,
    NoteTickYellow,
    NoteTickPurple,
    NoteTickCyan,

    NoteTailNeutral = 3000,
    NoteTailRed,
    NoteTailGreen,
    NoteTailBlue,
    NoteTailYellow,
    NoteTailPurple,
    NoteTailCyan,

    NoteConnectionNeutral = 11000,
    NoteConnectionRed,
    NoteConnectionGreen,
    NoteConnectionBlue,
    NoteConnectionYellow,
    NoteConnectionPurple,
    NoteConnectionCyan,

    NoteConnectionNeutralSeamless = 11100,
    NoteConnectionRedSeamless,
    NoteConnectionGreenSeamless,
    NoteConnectionBlueSeamless,
    NoteConnectionYellowSeamless,
    NoteConnectionPurpleSeamless,
    NoteConnectionCyanSeamless,

    SimultaneousConnectionNeutral = 12000,
    SimultaneousConnectionRed,
    SimultaneousConnectionGreen,
    SimultaneousConnectionBlue,
    SimultaneousConnectionYellow,
    SimultaneousConnectionPurple,
    SimultaneousConnectionCyan,

    SimultaneousConnectionNeutralSeamless = 12100,
    SimultaneousConnectionRedSeamless,
    SimultaneousConnectionGreenSeamless,
    SimultaneousConnectionBlueSeamless,
    SimultaneousConnectionYellowSeamless,
    SimultaneousConnectionPurpleSeamless,
    SimultaneousConnectionCyanSeamless,

    DirectionalMarkerNeutral = 21000,
    DirectionalMarkerRed,
    DirectionalMarkerGreen,
    DirectionalMarkerBlue,
    DirectionalMarkerYellow,
    DirectionalMarkerPurple,
    DirectionalMarkerCyan,

    SimultaneousMarkerNeutral = 22000,
    SimultaneousMarkerRed,
    SimultaneousMarkerGreen,
    SimultaneousMarkerBlue,
    SimultaneousMarkerYellow,
    SimultaneousMarkerPurple,
    SimultaneousMarkerCyan,

    StageMiddle = 40000,

    StageLeftBorder = 40001,
    StageRightBorder = 40002,
    StageTopBorder = 40004,
    StageBottomBorder = 40008,
    StageLeftBorderSeamless = 40101,
    StageRightBorderSeamless = 40102,
    StageTopBorderSeamless = 40104,
    StageBottomBorderSeamless = 40108,

    StageTopLeftCorner = 40005,
    StageTopRightCorner = 40006,
    StageBottomLeftCorner = 40009,
    StageBottomRightCorner = 40010,

    Lane = 40100,
    LaneSeamless = 40110,

    LaneAlternative = 40200,
    LaneAlternativeSeamless = 40210,

    JudgmentLine = 41000,
    NoteSlot = 41001,

    StageCover = 42000,
}

export function customSkinSprite(engineId: number, spriteId: number): number {
    return 100000 + engineId * 100 + spriteId
}
