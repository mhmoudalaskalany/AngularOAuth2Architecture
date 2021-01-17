import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  public onConfirm(): void {
    this.modal.close(true);
  }

  public onCancel(): void {
    this.modal.close(false);
  }
}
