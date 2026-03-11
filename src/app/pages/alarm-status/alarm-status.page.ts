import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alarm-status',
  templateUrl: './alarm-status.page.html',
  styleUrls: ['./alarm-status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlarmStatusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
