//JAWABAN NO 1
const biodata = {
    name: "vicko",
    age: 25,
    hobbies: ["nonton", "bulu tangkis", "belajar coding"],
    isMerried: false,
    schoolList: [
        {
            name: "SDN Margajaya",
            yearIn: 2002,
            yearOut: 2008,
            major: "null",
        },
        {
            name: "SMPN 15 Kota Tangerang Selatan",
            yearIn: 2008,
            yearOut: 2011,
            major: "null",
        },
        {
            name: "SMK PUSTEK Serpong",
            yearIn: 2011,
            yearOut: 2014,
            major: "Multimedia",
        },
        {
            name: "Universitas Matana",
            yearIn: 2014,
            yearOut: 2019,
            major: "Teknik Informatika",
        },
    ],
    skillName: [
        {
            skillname: "HTML",
            level: "advanced",
        },
        {
            skillname: "CSS",
            level: "beginner",
        },
        {
            skillname: "JS",
            level: "advanced",
        },
        {
            skillname: "Node JS",
            level: "beginner",
        },
    ],
    interesInCoding: true,
};

console.log(biodata);


//JAWABN NOMER 2
let Indonesia = 90;
let Inggris = 89;
let Matematika = 80;
let IPA = 69;
let hasil = (Indonesia + Inggris + Matematika + IPA) / 4;
let grade= "";
if ( hasil >= 90) {
    grade = "A";
    //console.log("A");
} else if (hasil >= 80 && hasil <= 89) {
    grade = "B";
    //console.log("B");
} else if (hasil >= 70 && hasil <= 79) {
    grade = "C";
    //console.log("C");
} else if (hasil >= 60 && hasil <= 69) {
    grade = "D";
    //console.log("D");
} else if(hasil >= 0 && hasil <= 59) {
    grade = "E";
    //console.log("E");
}
console.log("Rata- rata =" + hasil);
console.log("Grade =" + grade);

//JAWABAN NOMER 3
const printSegitiga = 5; 
let hasilSegitiga ="";
    if(Number.isInteger(printSegitiga)){ 
        for(let i = 1; i <= printSegitiga; i++){ //ini buat print baris 
                for(let j = 1; j <= printSegitiga - i + 1; j++){ //ini print angka
                    hasilSegitiga += j; 
                } 
                hasilSegitiga += "\n";                  
            }console.log(hasilSegitiga) 
        } else { console.log("Data harus number") 
    }


//JAWABAN NOMER 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};
let newData = {
    id: 2,
    name: "vicko maris",
    email: "vicko.maris.s@gmail.com",
    hobby: "nonton, bulu tangkis, belajar coding"
};
//JAWABAN 4A
let printData = { ...newData };
console.log(printData);

//JAWABAN 4B
let { street, city } = data.address;
console.log(`${street} ${city}`);