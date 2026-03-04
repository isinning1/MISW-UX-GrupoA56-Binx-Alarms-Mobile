import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alarm-reprogram',
  templateUrl: './alarm-reprogram.page.html',
  styleUrls: ['./alarm-reprogram.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlarmReprogramPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
