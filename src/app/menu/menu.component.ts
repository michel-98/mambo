import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  clicked: any;

  constructor() { }

  ngOnInit(): void {
  }

  trigger(event, section) {
    if (!this.clicked) {
      this.clicked = true;
      console.log(event.target)
      let element: HTMLElement;
      if ((event?.target as HTMLElement).tagName === 'DIV') {
        element = event.target as HTMLElement;
      } else if ((event?.target?.parentElement as HTMLElement)?.tagName === 'DIV') {
        element = event.target?.parentElement as HTMLElement;
      } else if ((event?.target?.parentElement?.parentElement as HTMLElement)?.tagName === 'DIV') {
        element = event.target.parentElement.parentElement as HTMLElement;
      } else if ((event?.target?.parentElement?.parentElement?.parentElement as HTMLElement)?.tagName === 'DIV') {
        element = event.target.parentElement.parentElement.parentElement as HTMLElement;
      } else if ((event?.target as HTMLElement)?.tagName === 'DIV') {
        element = event.target as HTMLElement;
      }
      if (section.style.display != 'none') {
        section.style.display = 'none';
        element.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M147.6 210.7c-7.5 7.5-7.5 19.8 0 27.3l95.7 95.4c7.3 7.3 19.1 7.5 26.6.6l94.3-94c3.8-3.8 5.7-8.7 5.7-13.7 0-4.9-1.9-9.9-5.6-13.6-7.5-7.5-19.7-7.6-27.3 0l-81 79.8-81.1-81.9c-7.5-7.5-19.7-7.5-27.3.1z"></path><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm332.4-124.4C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6z"></path></svg>';
      } else {
        element.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M147.6 301.3c-7.5-7.5-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.8-81.1 81.9c-7.5 7.5-19.7 7.5-27.3-.1z"></path><path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-32c-47 0-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432z"></path></svg>';
        section.style.display = '';
      };
      setTimeout(() => {
        this.clicked = false;
      }, 500);
    }
  }
  click(div: HTMLElement) {
    if (!this.clicked) {
      div.click();
    }
  }

}
