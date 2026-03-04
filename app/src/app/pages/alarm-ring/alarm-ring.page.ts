import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alarm-ring',
  templateUrl: './alarm-ring.page.html',
  styleUrls: ['./alarm-ring.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlarmRingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
