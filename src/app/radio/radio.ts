export class RadioPlayer{
    url:string;
    stream:any;
    promise:any;

    constructor(){
        //this.url = "http://208.85.5.254:7240/;";
        //this.url = "http://192.99.18.164:9704/;";
        //this.url = "http://198.50.154.235:10248/;";
        this.url = "http://138.197.21.15:8000/stream";
        this.stream = new Audio();
    };

    play(){
        this.stream.src = this.url;
        this.stream.play();
        this.promise = new Promise((resolve,reject) => {
            this.stream.addEventListener('playing', () => {
                resolve(true);
            });
            
            this.stream.addEventListener('error', () => {
                reject(false);
            });
        });

        return this.promise;
    }

    pause(){
        this.stream.pause();
        this.stream.src = "";
    }
}