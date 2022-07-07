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
      filter === "even" ? item % 2 === 0 : item % 2 === 1
    );
  }
}
