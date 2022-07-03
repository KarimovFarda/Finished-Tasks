import { HttpClient } from "./httpRequest";

class MemberService extends HttpClient {
    constructor(){
        super('https://62b87e12f4cb8d63df5ec8f1.mockapi.io/');
    }

    async getMember(){
        return this.get('Member');
    }

    addMember(data){
        return this.post("Member",data);
    }

}

export const memberService = new MemberService();
