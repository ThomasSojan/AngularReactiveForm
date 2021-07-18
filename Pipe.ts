

@Pipe({name: 'successMessagePipe'})
export class SuccessMessagePipe implements PipeTransform {
  transform(value: number): string {
    return "Sucessfully registered with registrationId :"+value;
  }
}





@Pipe
({
  name: 'internshipType'
})

export class InternshipTypePipe implements PipeTransform
{
  transform(value: string): string
  {
    switch (value)
    {
      case "S3":
        return "Summer Internship - 3 Months";
    
      case "S6":
        return "Summer Internship - 6 Months";

      case "W3":
        return "Winter Internship - 3 Months";

      case "W6":
        return "Winter Internship - 6 Months";
    }
  }
}






@Pipe({
  name: 'aadharNumber'
})
export class AadharNumberPipe implements PipeTransform {

  transform(aadharNo: string): string {
   return aadharNo.substring(0,3)+"-"+aadharNo.substring(4,7)+"-"+aadharNo.substring(8,11);
  }
        

}