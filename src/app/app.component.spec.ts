import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MovieService } from './movies/movie.service';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, FontAwesomeModule, HttpClientTestingModule , SharedModule],
    declarations: [AppComponent],
    providers: [MovieService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GoldenRaspberryAwards'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GoldenRaspberryAwards');
  });

});
