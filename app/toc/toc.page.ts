import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | Latte",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Breve",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Macchiato",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Stout",
      url: "/chapter4"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
