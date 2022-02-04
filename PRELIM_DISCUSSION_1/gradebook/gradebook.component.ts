import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

studName = ""  ;
subject = ""
prelims = 0
midterms = 0
finals = 0
ave = "";
studName2 = ""  ;
subject2 = ""
prelims2 = 0
midterms2 = 0
finals2 = 0
ave2 = "";
}
