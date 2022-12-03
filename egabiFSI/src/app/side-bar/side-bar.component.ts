import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  items: any = [
    {
      id: 0,
      title: 'Personal information',
      link: '/profile/personal',
      isActive: false
    },
    {
      id: 1,
      title: 'Account information',
      link: '/profile/account',
      isActive: false
    },
    {
      id: 2,
      title: 'Transactions information',
      link: '/profile/transaction',
      isActive: false
    },
    {
      id: 3,
      title: 'Make a transaction',
      link: '/profile/make-transaction',
      isActive: false
    }
  ]

  markHovered(item: any): void {
    this.items = this.items.map((_item: any) => ({
      ..._item,
      isActive: _item.id === item.id ? true : false
    }));

    console.log(this.items);
  }
}
