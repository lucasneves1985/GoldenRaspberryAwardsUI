/**
 * Data model for Maximun and Minimal Interval for produces
 */
export class MaxMinIntervalOfProducers {
    min: IntervalOfProducers[] = [];
    max: IntervalOfProducers[] = [];


}

export class IntervalOfProducers {
    producer: string = "";
    interval: number = 0;
    previousWin: number = 0;
    followingWin: number = 0;

}