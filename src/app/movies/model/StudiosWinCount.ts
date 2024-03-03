/**
 * Data model for Win count of Studios
 */
export class StudiosWinCount {
    studios: WinCount[] = []
}


export class WinCount {
    name: string = "";
    winCount: number = 0;
}