import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeywordDialogComponent } from '../components/dialogs/keyword-dialog/keyword-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  text_content:string = "";

  constructor(public dialog: MatDialog) {}

  ngOnInit(){

  }

  getKeywords() :void{
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(KeywordDialogComponent, {
      width: '250px'
    });
  }
}
