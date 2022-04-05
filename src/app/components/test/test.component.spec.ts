import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstDependacy } from './first-dependacy.service';
import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: TestingService;

  const FirstDependacyMock = {
    get name(): string {
      return '';
    },
    set name(value: string) {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestingService,
        { provide: FirstDependacy, useValue: FirstDependacyMock },
      ],
    });
    service = TestBed.inject(TestingService);
  });

  it('should create', () => {
    console.log(service);
    expect(service).toBeDefined();
  });

  it('should return Hi Mike', () => {
    spyOnProperty(FirstDependacyMock, 'name', 'get').and.returnValue('Mike');
    let res = service.sayHi();
    expect(res).toBe('Hi Mike');
  });

  it('should return Hi Stranger', () => {
    let seter = spyOnProperty(
      FirstDependacyMock,
      'name',
      'set'
    ).and.callThrough();
    service.setName('joe');
    expect(seter).toBe('Hi Stranger');
  });
});
