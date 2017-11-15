import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title='My Dog';
decription='Lets adopt dogs';
  constructor(public ServiceService:ServiceService) { }
  ngOnInit() {
  }

}
