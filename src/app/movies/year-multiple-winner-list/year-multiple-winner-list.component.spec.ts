import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMultipleWinnerListComponent } from './year-multiple-winner-list.component';
import { MovieService } from '../movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { of } from 'rxjs';

describe('YearMultipleWinnerListComponent', () => {
  let component: YearMultipleWinnerListComponent;
  let fixture: ComponentFixture<YearMultipleWinnerListComponent>;
  let service: any;
  let yearMultipleWinnersMock = {
    years: [
      { year: 1986, winnerCount: 2 },
      { year: 1990, winnerCount: 2 },
      { year: 2015, winnerCount: 2 }
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [YearMultipleWinnerListComponent],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService)
    fixture = TestBed.createComponent(YearMultipleWinnerListComponent);
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
    expect(component.yearMultipleWinners).toBeDefined();
  });

  it('should get yearMultipleWinners data', () => {
    spyOn(service, "getYearMultipleWinners").and.callFake(
      () => of(yearMultipleWinnersMock)
    )
    component.getYearMultipleWinners();

    expect(component.yearMultipleWinners).toBe(yearMultipleWinnersMock)
    expect(component.yearMultipleWinners.years.length).toBeGreaterThan(0);
  });

});
