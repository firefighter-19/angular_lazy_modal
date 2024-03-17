import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFifthComponent } from './modal-fifth.component';

describe('ModalFifthComponent', () => {
  let component: ModalFifthComponent;
  let fixture: ComponentFixture<ModalFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFifthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
