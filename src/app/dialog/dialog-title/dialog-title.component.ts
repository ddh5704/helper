import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.css'],
  standalone: false,
})
export class DialogTitleComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
