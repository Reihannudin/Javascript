
class Member {

    constructor(freeCourse) {
        this.freeCourse = freeCourse;
    }

    accessCourse() {
        console.log(`You can access Free Course : ${this.freeCourse} `)
    }
}

class PremiumMember extends Member{

    constructor(freeCourse, premiumCourse) {
        super(freeCourse);
        this.premiumCourse = premiumCourse;
    }

    accessCourse(){
        console.log(`You can access Free Course : ${this.freeCourse} And Premium Course : ${this.premiumCourse}`)
    }

}


const member = new Member("JavaScript Dasar");
member.accessCourse()
console.log(member);

const premiumMember = new PremiumMember("JavaScript Dasar", "JavaScript DOM")
premiumMember.accessCourse()
console.log(premiumMember);