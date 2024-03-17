import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeventhComponent } from './modal-seventh.component';

describe('ModalSeventhComponent', () => {
  let component: ModalSeventhComponent;
  let fixture: ComponentFixture<ModalSeventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSeventhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
