import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FirstDependacy } from './first-dependacy.service';
import { TestingService } from './testing.service';

describe('FooterComponent version 2', () => {
  let service: TestingService;
  // let firrstDependacy: FirstDependacy;

  const FirstDependacyFake = jasmine.createSpyObj([
    'returnValue',
    'initValue',
    'check',
  ]);

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        TestingService,
        { provide: FirstDependacy, useValue: FirstDependacyFake },
      ],
    }).compileComponents();
    service = TestBed.inject(TestingService);
  });
  it('should return value one', () => {
    FirstDependacyFake.returnValue.and.returnValue('one');
    let res = service.getValue(4);
    expect(res).toBe('one');
  });

  it('should return value two', () => {
    FirstDependacyFake.returnValue.and.returnValue('two');
    let res = service.getValue(4);
    expect(res).toBe('two');
  });

  it('should call call check', () => {
    FirstDependacyFake.check.calls.reset();
    service.callMethod('some text');
    expect(FirstDependacyFake.check).toHaveBeenCalledTimes(1);
    expect(FirstDependacyFake.check).toHaveBeenCalledOnceWith('some text');
  });
});
