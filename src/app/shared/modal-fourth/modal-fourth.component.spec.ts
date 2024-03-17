import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFourthComponent } from './modal-fourth.component';

describe('ModalFourthComponent', () => {
  let component: ModalFourthComponent;
  let fixture: ComponentFixture<ModalFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFourthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
