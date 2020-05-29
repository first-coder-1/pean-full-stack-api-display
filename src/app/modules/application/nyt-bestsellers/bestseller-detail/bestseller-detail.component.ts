import { Component, OnInit } from "@angular/core";
import { NytBestsellersService } from "../../../../services/nyt-bestsellers.service";
import { Router } from '@angular/router';
// import { NytApiResponse } from "../../../../models/nyt";

@Component({
  selector: "app-bestseller-detail",
  templateUrl: "./bestseller-detail.component.html",
  styleUrls: ["./bestseller-detail.component.css"],
})
export class BestsellerDetailComponent implements OnInit {
  bestseller: any

  constructor(private nytBestsellersService: NytBestsellersService, private router: Router) {}

  ngOnInit(): void {
    this.bestseller = this.nytBestsellersService.currentBestseller;
  }

  returnToList() {
    this.router.navigate(["/nyt-bestsellers"]);
  }
}
