/**
 * Data model for years with multiples winners
 */
export class YearMultipleWinners {
    years: Year[] = []
}

export interface Year {
    year: number
    winnerCount: number
}