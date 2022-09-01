//JAWABAN NO 1
// Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data
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
            level: "beginner",
        },
        {
            skillname: "CSS",
            level: "beginner",
        },
        {
            skillname: "JS",
            level: "beginner",
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
// Buat program yang menghitung rata-rata UN beserta gradenya
let Indonesia = 80;
let Inggris = 90;
let Matematika = 89;
let IPA = 69;
let hasil="";
let grade = "";

if (Number.isInteger(Indonesia) && Indonesia >= 0 && Indonesia <= 100) {
    if (Number.isInteger(Inggris) && Inggris >= 0 && Inggris <= 100) {
        if (Number.isInteger(Matematika) && Matematika >= 0 && Matematika <= 100) {
            if (Number.isInteger(IPA) && IPA >= 0 && IPA <= 100) {
                hasil = (Indonesia + Inggris + Matematika + IPA) / 4;
                if (hasil <= 100 && hasil >= 0) {
                    if (hasil >= 90 && hasil <= 100) {
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
                    } else if (hasil >= 0 && hasil <= 59) {
                        grade = "E";
                        //console.log("E");
                    }
                } else console.log("Grade tidak keluar nilai karena Nilai Rata - rata melebih atau kurang dari 0 - 100, harap cek kembali ");
            } else console.log("Nilai IPA belum dimasukan / bukan angka / nilai bukan dari 0 - 100");
        } else console.log("Nilai Matematika belum dimasukan / bukan angka / nilai bukan dari 0 - 100 ");
    } else console.log("Nilai Inggris belum dimasukan / bukan angka / nilai bukan dari 0 - 100 ");
} else console.log("Nilai Indonesia belum dimasukan / bukan angka / nilai bukan dari 0 - 100 ");

console.log("Rata- rata =" + hasil);
console.log("Grade =" + grade);

//JAWABAN NOMER 3
// Buatlah program yang memiliki satu variabel dengan nama
// “printSegitiga” yg berisi tipe data number yang menghasilkan
// output segitiga terbalik yang berisi angka

const printSegitiga = "lima"; 
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
//4A Ubahlah data tersebut menggunakan spread operator
//4B Ambilah data “street dan city” tersebut menggunakan destructuring
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

//JAWABAN 4A Ubahlah data tersebut menggunakan spread operator
data = {
    ...data,
    name: "vicko maris",
    email: "vicko.maris.s@gmail.com",
    hobby: ["nonton, bulu tangkis, belajar coding"]
}
console.log(data)

//JAWABAN 4B Ambilah data “street dan city” tersebut menggunakan destructuring
let { street, city } = data.address;
console.log(`street = ${street}, city = ${city}`);