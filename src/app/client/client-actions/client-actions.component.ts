import { Component, OnInit, Type } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="btn-close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS: {[name: string]: Type<any>} = {
  focusFirst: NgbdModalConfirm
};

@Component({
  selector: 'app-client-actions',
  templateUrl: './client-actions.component.html',
  styleUrls: ['./client-actions.component.css']
})
export class ClientActionsComponent implements OnInit {
  
  constructor(private _modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(name: string) { this._modalService.open(MODALS[name]); }
}
