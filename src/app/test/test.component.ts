import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>This test works inline!</p>`,
  styles: [`p{
    color:red;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    font-family: arial;
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
