import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrslistComponent } from './crslist.component';

describe('CrslistComponent', () => {
  let component: CrslistComponent;
  let fixture: ComponentFixture<CrslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
