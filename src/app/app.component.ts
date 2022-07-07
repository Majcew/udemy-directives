import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers = [1, 2, 9, 14, 5, 873, 2, 3, 32, 123, 4, 5, 23, 9];
  selectedNumber: number | "Not selected yet" = "Not selected yet";
  onlyOdd = false;
  value: number = 10;

  onSelectedNumber(selectedNumber: number) {
    this.selectedNumber = selectedNumber;
  }
}
