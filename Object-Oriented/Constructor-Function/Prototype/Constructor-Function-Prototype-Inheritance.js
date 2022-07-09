
function Member(freeCourse){
    this.freeCourse = freeCourse;
    this.accessFreeCourse =  function () {
        console.log(`You can acces free course`)
    }
}

function PremiumMember(freeCourse, premiumCourse){
    this.premiumCourse = premiumCourse;
    Member.call(this, freeCourse);
}

PremiumMember.prototype = Object.create(Member.prototype);

PremiumMember.prototype.accessPremiumCourse = function(){
    console.log(`You can access premium course`)
}


Member.prototype.accessPremiumCourse = function(){
    console.log(`You cannot access premium course`)
}


const member = new Member("JavaScript Dasar");
member.accessFreeCourse()
member.accessPremiumCourse()
console.log(member);

const premiumMember = new PremiumMember("JavaScript Dasar", "Javascript DOM");
premiumMember.accessFreeCourse()
premiumMember.accessPremiumCourse()
console.log(premiumMember);