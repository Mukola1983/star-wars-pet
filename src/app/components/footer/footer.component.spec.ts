import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FirstDependacy } from './first-dependacy.service';
import { TestingService } from './testing.service';

describe('FooterComponent', () => {
  let service: TestingService;
  let firrstDependacy: FirstDependacy;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      // declarations: [TestingService],
      providers: [TestingService, FirstDependacy],
    }).compileComponents();
    service = TestBed.inject(TestingService);
    firrstDependacy = TestBed.inject(FirstDependacy);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should return value by index', () => {
    spyOn(firrstDependacy, 'returnValue').and.returnValue('two');
    let res = service.getValue(1);
    expect(res).toBe('two');
  });

  it('should return value using index from getIndex', () => {
    spyOn(firrstDependacy, 'returnValue').and.returnValue('three');
    spyOn(service, 'getIndex').and.returnValue(1);
    let res = service.getValue(service.getIndex());
    expect(res).toBe('three');
  });
});
