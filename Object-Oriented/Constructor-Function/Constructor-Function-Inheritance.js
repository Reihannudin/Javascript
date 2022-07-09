

function Member(freeCourse){
    this.freeCourse = freeCourse;
    this.accesFreeCourse = function() {
        console.log(`\n You can acces free course \n`)
    }
}

function PremiumMember(freeCourse , premiumCourse){
    this.premiumCourse = premiumCourse;
    this.accesPremiumCourse = function(){
        console.log(`\n you can acces premium course \n`)
    }
    Member.call(this, freeCourse);
}

const member = new Member("Javascript Dasar")
member.accesFreeCourse()
console.log(member);

const premiumMember = new PremiumMember("Javascript Dasar", "Javascript DOM")
premiumMember.accesFreeCourse()
premiumMember.accesPremiumCourse()
console.log(premiumMember);