import { TestBed } from '@angular/core/testing';

import { TeachersService } from './teachers.service';

describe('TeacherService', () => {
  let service: TeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
