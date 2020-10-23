import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  level = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.level = this.route.snapshot.paramMap.get('level');
  }

}
