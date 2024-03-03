import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalProducersWinListComponent } from './interval-producers-win-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieService } from '../movie.service';
import { of } from 'rxjs';

describe('IntervalProducersWinListComponent', () => {
  let component: IntervalProducersWinListComponent;
  let fixture: ComponentFixture<IntervalProducersWinListComponent>;
  let service: any;
  let intervalOfProducersMock = {
    min: [{ producer: "Joel Silver", interval: 1, previousWin: 1990, followingWin: 1991 }],
    max: [{ producer: "Matthew Vaughn", interval: 13, previousWin: 2002, followingWin: 2015 }]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [IntervalProducersWinListComponent],
      providers: [MovieService]
    });
    fixture = TestBed.createComponent(IntervalProducersWinListComponent);
    service = TestBed.inject(MovieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('columns variable should be defined', () => {
    expect(component.columns).toBeDefined();
  });

  it('yearMultipleWinners variable should be defined', () => {
    expect(component.maxMinIntervalOfProducers).toBeDefined();
  });

  it('should get producers with maximum and minimum winners', () => {
    spyOn(service, "getMaxMinIntevalOfProducers").and.callFake(
      () => of(intervalOfProducersMock)
    )
    component.getMaxMinIntervalOfProducers()

    expect(component.maxMinIntervalOfProducers).toBe(intervalOfProducersMock);
    expect(component.maxMinIntervalOfProducers.max.length).toBe(1);
    expect(component.maxMinIntervalOfProducers.min.length).toBe(1);

  });
});
