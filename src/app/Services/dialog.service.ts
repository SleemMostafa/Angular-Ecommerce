import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  OpenConfirmDialog()
  {
    return this.dialog.open(ConfirmDialogComponent,{
      width:"390px",
      panelClass:'confirm-dialog-container',
      disableClose:true,
    });
  }
}
