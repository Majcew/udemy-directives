import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "evenodd",
})
export class EvenoddPipe implements PipeTransform {
  transform(value: number[], filter: string): number[] {
    if (!value || (filter !== "even" && filter !== "odd")) {
      return value;
    }
    return value.filter((item, idx) =>
      filter === "even" ? idx % 2 === 0 : idx % 2 === 1
    );
  }
}
