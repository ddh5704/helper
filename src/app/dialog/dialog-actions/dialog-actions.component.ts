import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-actions',
  templateUrl: './dialog-actions.component.html',
  styleUrls: ['./dialog-actions.component.scss'],
  standalone: false,
})
export class DialogActionsComponent implements OnInit {
  @Input() actionLabel = '';
  @Output() action = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
