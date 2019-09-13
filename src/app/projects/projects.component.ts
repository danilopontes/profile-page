import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  status  = 'none';
  modalImageURL = '';

  showModal(event: any): void {
    const elementID = event.target.id;
    if (elementID === 'banking-system') {
      this.modalImageURL = 'assets/banking-system.gif';
    } 
    this.status = 'block';
  }

  closeModal(): void {
    this.status = 'none';
  }

  constructor() { }

  ngOnInit() {
  }

}
