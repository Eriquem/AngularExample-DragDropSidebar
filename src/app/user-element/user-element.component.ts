import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.css']
})
export class UserElementComponent implements OnInit {

  @Input() Name! : string;
  @Input() Surname! :string;
  constructor() { }

  ngOnInit(): void {
  }

}
