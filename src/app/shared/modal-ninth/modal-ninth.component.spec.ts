import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNinthComponent } from './modal-ninth.component';

describe('ModalNinthComponent', () => {
  let component: ModalNinthComponent;
  let fixture: ComponentFixture<ModalNinthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNinthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
