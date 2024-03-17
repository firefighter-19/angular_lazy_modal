import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { modal_list } from './modal-list';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonComponent } from 'ng-zorro-antd/button';

const result_multiplier = 10;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NzButtonComponent],
  providers: [NzModalService, NzNotificationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private readonly nzModalService: NzModalService,
    private readonly nzNotificationService: NzNotificationService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  readonly modal_list = modal_list;

  openModal(): void {
    const modal_index = this.randomizeIndex();
    const chosenModal = this.modal_list[modal_index];
    if (chosenModal) {
      this.openModalLazy(chosenModal.modalName);
    } else {
      this.nzNotificationService.error('Error', 'No modal window found');
    }
  }

  private randomizeIndex(): number {
    return Math.floor(Math.random() * result_multiplier);
  }

  private openModalLazy(modalName: string): void {
    const modalPath = modalName
      .split(/(?=[A-Z])/)
      .join('-')
      .toLowerCase();
    import(`../app/shared/${modalPath}/${modalPath}.component.ts`).then(
      (component) => {
        this.cdr.detectChanges();
        const modal = this.nzModalService.create({
          nzContent: component[modalName + 'Component'],
          nzClosable: true,
        });
      }
    );
  }
}
