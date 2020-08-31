import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
isNavbarCollapsed=true;
	
  constructor() { }

  ngOnInit(): void {
  }
}
