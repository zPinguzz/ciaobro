import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuckDetail } from './duck-detail';

describe('DuckDetail', () => {
  let component: DuckDetail;
  let fixture: ComponentFixture<DuckDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuckDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(DuckDetail);
    fixture.componentRef.setInput('id', '1');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
