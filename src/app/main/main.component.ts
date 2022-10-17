import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  trashIcon = faTrash;
  public openSidebar: boolean = false;
  constructor() { }

  sidebarElements: UserElement[] = [{
    Name: "Matevz",
    Surname: "Kukovicic"
  },
  {
    Name: "AAAA",
    Surname: "BBBB"
  },
  {
    Name: "CCCCCC",
    Surname: "DDDDD"
  },
  {
    Name: "EEEEEE",
    Surname: "FFFFFF"
  }
  ]
  mainElements: UserElement[] = [{
    Name: "XXXXX",
    Surname: "BBBB"
  },
  {
    Name: "YYYYYY",
    Surname: "BBBB"
  },
  {
    Name: "ZZZZZ",
    Surname: "BBBB"
  },]
  ngOnInit(): void {
  }

  toggleSideNav() {
    this.openSidebar = !this.openSidebar;
  }
  ElementDropped(event: CdkDragDrop<UserElement[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if(!event.container.data.includes(event.previousContainer.data[event.previousIndex])) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }
  ElementTrashed(event: CdkDragDrop<UserElement[]>) {
    if(event.previousContainer.data == this.mainElements)
      event.previousContainer.data.splice(event.previousIndex, 1);
  }
}

export interface UserElement {
  Name: string;
  Surname: string;
}