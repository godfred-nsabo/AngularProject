import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  title = "Netflix Movies "
  constructor() { }

  ngOnInit(): void {
  }

}
