import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViscrsComponent } from './viscrs.component';

describe('ViscrsComponent', () => {
  let component: ViscrsComponent;
  let fixture: ComponentFixture<ViscrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViscrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViscrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
