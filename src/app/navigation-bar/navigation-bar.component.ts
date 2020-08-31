import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
isNavbarCollapsed=true;
	
    value : any[];
  constructor(private http: HttpClient, private db: AngularFirestore ) {
		db.collection('subject').valueChanges()
		.subscribe((op) =>  this.value=op);
		 }

  ngOnInit(): void {
  }
}
