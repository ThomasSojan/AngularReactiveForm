
// As constructor paramater
private http:HttpClient



//fn def Ex 1
getAadhar(data: AadharCard) : Observable<any> {
    
    return this.http.post<any>("http://localhost:8765/AadharAPI/getAadhar",data);
    
  }


//fn def Ex 2
 register(laptopData:any) : Observable<any> {

    return this.http.post<any>("http://localhost:3333/infyLaptopApi/register",laptopData);
  }  
  
  
  
  
//fn def Ex 2
apply(internData) : Observable<any>
  {
    return this.http.post("http://localhost:3692/GreyPinkUniverse/InternshipAPI/apply/", internData);
  }  