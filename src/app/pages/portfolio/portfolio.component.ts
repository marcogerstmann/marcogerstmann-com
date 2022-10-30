import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';
declare var Isotope: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  isotope:any;
  filter = 'all';
  items = [
    { name: 'Project name', type: 'design', src: 'https://images.unsplash.com/photo-1522199670076-2852f80289c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab630f082590b51249a9df9975164eb2&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'code', src: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-0.3.5&s=4d74cc124328397a61a946235f1aad13&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'code', src: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b54e36ca60c8e2b8f57a897b94cdd5e3&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'photo', src: 'https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=712fa3e4441f895bb401dfa66e6528c3&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'design', src: 'https://images.unsplash.com/photo-1422480041422-130238c67fe2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d78a9d007327a714a4251e4b3b8cbf6e&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'design', src: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=836d0f2a3ff5d2ed1481daae93c662a3&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'photo', src: 'https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b650a7c9fac45aed0e47f2a508ca259&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'code', src: 'https://images.unsplash.com/photo-1518118238797-500670daedf7?ixlib=rb-0.3.5&s=6b6aa58cce317074280b5feadcae9755&auto=format&fit=crop&w=650&q=80'},
    { name: 'Project name', type: 'photo', src: 'https://images.unsplash.com/photo-1501856777435-29877ed80a3d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=deeadc7e3ba616024d4628dc66de128f&auto=format&fit=crop&w=650&q=80'}
  ]

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() { }

  ngAfterViewInit(){
    this.isotope = new Isotope(document.querySelector('.gallery'), {
      itemSelector: '.gallery-item',
      filter: '.all'
    });       
  }

  public openItemDialog(item:any){   
    let dialogRef = this.dialog.open(ItemDialogComponent, {
        data: item,
        panelClass: 'item-dialog'
    });
    dialogRef.afterClosed().subscribe(item => {
      if(item){
         this.router.navigate(['/home']); 
      }
    });
  }

  public ngDoCheck(){
    var last = document.getElementsByClassName('last');
    if(last.length > 0){
      this.isotope.arrange({ filter: '.'+this.filter });
    }
  }

}