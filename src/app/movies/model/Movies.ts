/**
 * Data model for Movies
 */

export class Movies {
    id: number = 0;
    year: number = 0;
    title: string = "";
    studios: string[] = [];
    producers: string[] = [];
    winner: boolean = false;
}