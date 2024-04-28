import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinstComponent } from './newinst.component';

describe('NewinstComponent', () => {
  let component: NewinstComponent;
  let fixture: ComponentFixture<NewinstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewinstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
