import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  imagePath = '../../../../assets/images/placeholder.png'

  constructor() { }

  ngOnInit(): void {
  }

}
