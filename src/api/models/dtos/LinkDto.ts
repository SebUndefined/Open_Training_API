export class LinkDto {  
    public href: string;
    public rel: string;
    public method: string;

    constructor(href : string, rel : string ,method : string ) {    
        this.href = href;    
        this.rel = rel;    
        this.method = method;  
    }
}