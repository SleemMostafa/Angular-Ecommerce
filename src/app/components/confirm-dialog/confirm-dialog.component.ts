import { Component, OnInit,inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {

  }
  CloseDialog()
  {
    this.matDialogRef.close();
  }

}
