import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-row',
  templateUrl: './delete-row.component.html',
  styleUrls: ['./delete-row.component.scss']
})
export class DeleteRowComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteRowComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) { }

  ngOnInit(): void {
  }

  ondelete(option){
    this.dialogRef.close(option);
  }
}
