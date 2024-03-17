import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSixthComponent } from './modal-sixth.component';

describe('ModalSixthComponent', () => {
  let component: ModalSixthComponent;
  let fixture: ComponentFixture<ModalSixthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSixthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
