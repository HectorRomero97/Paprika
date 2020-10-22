import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { UserdataService } from './userdata.service';

describe('UserdataService', () => {
  let service: UserdataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
