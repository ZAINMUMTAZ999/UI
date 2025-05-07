
enum Role {
    User = 'user',
    Admin = 'admin',
    Moderator = 'moderator'
  }
export type AddJobTypes = {
    dashboard: never[];
  
    _id:string;
    userId:string;
    companyName: string;
    imageFile:  string; 
    ownerName: string;
    companyOwnerNumber: number;
    ownerEmail: string;
    companysIndustry: string;
    companyDescription: string;
    jobTitle: string;
    file:File;
    
    numberofPeopleHiring: number;
    jobLocation: string;
    
    salary: number;
    postalCode : number;
    jobStatus: "Interview" | "Pending" | "Declined";
    // jobStatus:string;
    starRating:string[];
    imageUrl:string[];
    jobType:Role;
    role:string;
    fvrtJob:string;
    textEditor:string;
    // companyFind:["NewsPaper","mobile","social networks","addverstjjisment","college"]
    companyFind:string;
    // textEditor2:string;
    date: Date;
  };
  export type jobSearchResponse = {
    data: AddJobTypes[];
    pagination: {
      total: number;
      page: number;
      pages: number;
    };
  };
