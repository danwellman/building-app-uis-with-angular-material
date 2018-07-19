import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

import { ContentComponent } from '../content/content.component';
import { YumComponent } from '../yum/yum.component';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html',
  styleUrls: ['./overlays.component.scss']
})
export class OverlaysComponent implements OnInit {
  @ViewChild('snack') snack: TemplateRef<MatSnackBar>;

  public contentDialog: MatDialogRef<ContentComponent>;
  public simpleSb: MatSnackBarRef<SimpleSnackBar>;
  public templateSb: MatSnackBarRef<any>;

  constructor(
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    //setTimeout(() => {
    //  this.simpleSb = this.snackbar.open('This is a simple snackbar!', 'Alrighty!', {
    //    duration: 3000
    //  });

    //  this.simpleSb.afterDismissed().subscribe(event => {
    //    console.log(event);
    //  });

    //}, 1000);
    //setTimeout(() => {
    //  this.templateSb = this.snackbar.openFromTemplate(this.snack, {
    //    duration: 3000,
    //    panelClass: 'mat-simple-snackbar'
    //  });

    //  this.templateSb.afterDismissed().subscribe(event => {
    //    console.log(event);
    //  });
    //}, 1000);

    setTimeout(() => {
      this.snackbar.openFromComponent(YumComponent, {
        duration: 3000,
        panelClass: 'mat-simple-snackbar'
      });
    }, 1000);
  }

  closeTemplateSb() {
    this.templateSb.dismissWithAction();
  }

  showDialog(): void {
    this.contentDialog = this.dialog.open(ContentComponent, {
      width: '500px',
      height: '300px',
      closeOnNavigation: false,
      ariaDescribedBy: 'dialogDescription',
      data: { custom: 'Some arbitrary data' }
    });

    this.contentDialog.afterClosed().subscribe(result => {
      console.log('The message is: ', result);
    });
  }

}
