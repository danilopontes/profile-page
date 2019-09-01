import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  status: String = "none";
  modalImageURL: String = "";

  showModal(event): void{
    let elementID = event.target.id;
    if(elementID == "banking-system") {
      this.modalImageURL = "/assets/banking-system.jpg";
    } else if(elementID == "discord-bot") {
      this.modalImageURL = "/assets/discord-bot.jpg"
    }

    this.status = "block";
  }

  closeModal(): void {
    this.status = "none";
  }
  

  constructor() { }

  ngOnInit() {
  }

}
