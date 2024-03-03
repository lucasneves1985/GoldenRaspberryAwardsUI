import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieService } from '../movie.service';
import { TopStudiosWinnerListComponent } from './top-studios-winner-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudiosWinCount } from '../model/StudiosWinCount';
import { of } from 'rxjs';

describe('TopStudiosWinnerListComponent', () => {
  let component: TopStudiosWinnerListComponent;
  let fixture: ComponentFixture<TopStudiosWinnerListComponent>;
  let service: any;
  let studiosWinCountMock =
  {
    studios: [
      { name: "Columbia Pictures", winCount: 7 },
      { name: "Paramount Pictures", winCount: 6 },
      { name: "Warner Bros.", winCount: 5 },
      { name: "20th Century Fox", winCount: 4 },
      { name: "MGM", winCount: 3 },
      { name: "Universal Studios", winCount: 2 }
    ]
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [TopStudiosWinnerListComponent],
      providers: [MovieService]
    });
    fixture = TestBed.createComponent(TopStudiosWinnerListComponent);
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
    expect(component.winCount).toBeDefined();
  });

  it('should get top 3 winCount data', () => {
    spyOn(service, "getStudiosWinCount").and.callFake(
      () => of(studiosWinCountMock)
    )
    component.getTopStudiosWinner();

    expect(component.winCount.length).toBe(3);
  });
});
