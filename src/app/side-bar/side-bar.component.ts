import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
	isSidebarCollapsed=true;
	value : any[];
	constructor(private http: HttpClient, private db: AngularFirestore ) {
		db.collection('subject').valueChanges()
		.subscribe((op) =>  this.value=op);
				
		$(document).ready(function(){
			$("a").click(function(event) {
				if (this.hash !== "") {
					event.preventDefault();
					var hash = this.hash;
					$('html, body').animate({
						scrollTop: $(hash).offset().top
					}, 1500, function(){
						window.location.hash = hash;
					});
				} 
			});
		});
	}

  ngOnInit(): void {
  }

}
