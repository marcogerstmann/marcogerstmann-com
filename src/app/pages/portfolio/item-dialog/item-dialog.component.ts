import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any
  ) {}

  ngOnInit() {}

  public close(): void {
    this.dialogRef.close();
  }
}
