import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSecondComponent } from './modal-second.component';

describe('ModalSecondComponent', () => {
  let component: ModalSecondComponent;
  let fixture: ComponentFixture<ModalSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
