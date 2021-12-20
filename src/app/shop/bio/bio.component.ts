import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
})
export class BioComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = 'text/javascript';
    script.text = `
    function timeDrop() {
      var element = document.getElementById("time-list");
      element.classList.toggle("show");
    }
    `;
    this._renderer2.appendChild(this._document.body, script);
  }
}
