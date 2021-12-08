import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtterjobs'
})
export class FiltterjobsPipe implements PipeTransform {

  transform(jobs: any , search: string): any {

    return jobs?.filter(function(jobs:any){
      
    return jobs?.title.includes(search);

    })
  }

}
