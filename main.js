// Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.
alert("1-vazifa")
let num_1 = [1, 2, 3, 4, 5, 6]

num_1.forEach(function (value) {
    console.log(value)
})

// Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.
alert("2-vazifa")
let num_2 = [1, 2, 3, 4, 5, 6]
let kvadrat

num_2.forEach(function (value) {
    kvadrat = value * value
    console.log(kvadrat)
})

// Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.
alert("3-vazifa")
let num_3 = [1, 2, 3, 4, 5, 6]
let massiv_1 = []

num_3.forEach(function (value) {
    value *= 2
    massiv_1.push(value)
})

console.log(massiv_1)

// Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.
alert("4-vazifa")
let num_4 = [1, 2, 3, 9, 7, 10]

num_4.forEach(function (value) {
    if (value > 5) {
        console.log(value)
    } else {
        console.log("bu son 5 dan katta emas", value)
    }
})

// Har bir elementga 10 qo'shib, yangi massivga saqlang.
alert("5-vazifa")
let num_5 = [1, 2, 3, 4, 5, 6]
let massiv_2 = []

num_5.forEach(function (value) {
    value += 10
    massiv_2.push(value)
})

console.log(massiv_2)

// Massivdagi barcha juft sonlarni ekranga chiqaring.
alert("6-vazifa")
let num_6 = [1, 2, 3, 4, 5, 6]

num_6.forEach(function (value) {
    if (value % 2 === 0) {
        console.log(value)
    }
})

// Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).
alert("7-vazifa")
let num_7 = [12, 11, 85, 48, 85, 3] // for each dan oldin reverse qilish kerakligini googledan topdim

num_7.reverse().forEach(function (value) {
    console.log(value)
})

// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).
alert("8-vazifa")
let num_8 = ["a", "b", "c", "d", "e"]
let found

num_8.forEach(function (value) {
    found = value.includes("a")
    console.log(found)
})

// Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.
alert("9-vazifa")
let num_9 = [1, 2, 3, 4, 5, 6]
let massiv_3 = []

num_9.forEach(function (value) {
    let ind = num_9.indexOf(value)
    massiv_3.push(ind)
})

console.log(massiv_3)

// Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).
alert("10-vazifa")
let num_10 = [1, 2, 3, 4, 5, 6] // ustoz for each da rosa harakat qildim lekin oxshamadi

let kk = num_10.join("va")

console.log(kk)

// Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).
alert("11-vazifa")
let num_11 = [1, 2, 3, 4, 5, 6]

num_11.slice(1, 4).forEach(function (value) {
    console.log(value)
})

// Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.
alert("12-vazifa") // ustoz savoliga tushunmadim elementni qanaqa belgisini aytganini tepadaginiyam slice orqali 3 tasini chiqarib qoydim

//  Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).
alert("13-vazifa")
let num_12 = [25, 63, 96, 51, 1]

num_12.sort((a, b) => a - b).forEach(function (value) {
    console.log(value)
})

// Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.
alert("14-vazifa") // ustoz spliceyam pushham qilib ko'rdim o'xshatolmadim

// Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.
alert("15-vazifa")
let num_13 = ["UPDATE", "ADAPT", "OVERCOME"] // lowercase kodi googledan topildi

num_13.forEach(function(value) {
    console.log(value.toLowerCase())
})

// Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.
alert("16-vazifa")
let num_14 = [1, 2, 3, 4, 5, 6]

num_14.map(function(value) {
    value *= 2
    console.log(value)
})

// Har bir elementning kvadratini hisoblab yangi massivga saqlang.
alert("17-vazifa")
let num_15 = [1, 2, 3, 4, 5, 6]

num_15.map(function(value) {
    let kvadrat_2 = value * value
    console.log(kvadrat_2)
})

// Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).
alert("18-vazifa")
let num_16 = [1, 2, 3, 4, 5, 6]

num_16.reverse().map(function(value) {
    console.log(value)
})

// Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).
alert("19-vazifa")
let num_17 = [1, 2, 3, 4, 5, 6]

num_17.slice(2, 5).map(function(value) {
    console.log(value)
})

// Har bir elementni katta harf bilan yozib yangi massivga saqlang.
alert("20-vazifa")
let num_18 = ["update", "adapt", "overcome"]

num_18.map(function(value) {
    console.log(value.toUpperCase())
})

// Har bir elementga "Hello, " qo'shib yangi massivga saqlang.
alert("21-vazifa") // ?

// Har bir elementni ikki marta takrorlang va yangi massivga saqlang.
alert("22-vazifa") // ?

// Har bir elementning uzunligini aniqlang va yangi massivga saqlang.
alert("23-vazifa")
let num_19 = [1, 2, 3, 4, 5]

num_19.map(function(value, index) {
    console.log(index)
})

// Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).
alert("24-vazifa") // savol mantiqan notogrimi ?
let num_20 = [1, 2, 3, 4, 5, 6]

num_20.map(function(value, index) {
    console.log(value, index)
})

// Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).
alert("25-vazifa") // bu ham hatomi split massivga otkazish uchun kerak join orasiga narsa qoshib stringa otkazish uchun kerak
let num_21 = [1, 2, 3, 4, 5, 6]

num_21.reverse().map(function(value) {
    console.log(value)
})

// Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).
alert("26-vazifa") // ustoz har bir elementdan olib tashlang deyapti lekin slice da unaqa elementni aynan bir belgisini olib tashlash mumkin bo'lmasa kerak ? qilolmadim ustoz

// Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).
alert("27-vazifa") // osish boyicha tartibladim
let num_22 = [12, 56, 44, 11, 36, 19, 96]

num_22.sort((a, b) => a - b).map(function(value) {
    console.log(value)
})

// Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.
alert("28-vazifa")
let num_23 = ["Well done is better than well said."]

num_23.map(function(value) {
    console.log(value.toUpperCase())
})

// Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.
alert("29-vazifa")
let num_24 = [1, 3, 9, 6, 7, 10, 9]

num_24.map(function(value) {
    if(value > 5) {
        console.log("bular 5 dan katta", value)
    } else {
        console.log("bular 5 dan kichik", value)
    }
})

// Har bir elementdan faqat sonlarni olib yangi massivga saqlang.
alert("30-vazifa")
let num_25 = [1, 2, 3, 4, 5, 6]

num_25.map(function(value) {
    console.log(value)
})

// Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.
alert("31-vazifa")
let num_26 = [1, 2, 3, 4, 5, 6]
let massiv_4 = []

num_26.filter(function(value) {
    if(value % 2 === 1) {
        massiv_4.push(value)
    }
})

console.log(massiv_4)

// Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.
alert("32-vazifa")
let num_27 = [1, -2, 3, -4, 5, -6]
let massiv_5 = []

num_27.filter(function(value) {
    if(value > 0) {
        massiv_5.push(value)
    }
})

console.log(massiv_5)

// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).
alert("33-vazifa")
let num_28 = ["a", "b", "a", "c"]
let massiv_6 = []

num_28.filter(function(value) {
    let search = value.includes("a")
    massiv_6.push(search)
})

console.log(massiv_6)

// Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.
alert("34-vazifa")
let num_29 = [6, 9, 7, 1, 2, 3, 17]
let massiv_7 = []

num_29.filter(function(value) {
    if(value > 5) {
        massiv_7.push(value)
    }
})

console.log(massiv_7)

// Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.
alert("35-vazifa")
let num_30 = ['test', 'something', 'anything', 'test']
let massiv_8 = []

num_30.filter(function(value) {
    if(value === 'test') {
        massiv_8.push(value)
    } else {
        console.log("bular togrimas: ", value)
    }
})

console.log(massiv_8)

// Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).
alert("36-vazifa")
let num_31 = [6, 5, 4, 3, 2, 1]
let massiv_9 = []

num_31.reverse().filter(function(value) {
    massiv_9.push(value)
})

console.log(massiv_9)

// Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.
alert("37-vazifa")
let num_32 = [1, -2, 0, 96, -5, -9, 5]
let massiv_10 = []

num_32.filter(function(value) {
    if(value > 0) {
        massiv_10.push(value)
    }
})

console.log(massiv_10)

// Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.
alert("38-vazifa")
let num_33 = [1, 5, 10, 15, 'qwert', 'trewq']
let massiv_11 = []

num_33.filter(function(value) {
    if(value > String) {
        massiv_11.push(value)
    }
})

console.log(massiv_11)

// Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.
alert("39-vazifa") 
let num_34 = [3, 6, 8, 9, 4, 2, 1, -8, -9]
let massiv_12 = []

num_34.filter(function(value) {
    if(value < 3) {
        massiv_12.push(value)
    }
})

console.log(massiv_12)

// Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.
alert("40-vazifa")
let num_35 = ['u', 'b', 'o', 'e', 'd']
let massiv_13 = []
let unli = ['a', 'i', 'e', 'o', 'u', 'y']

num_35.filter(function(value) {
    if (unli.includes(value)) {
        massiv_13.push(value)
    } else {
        console.log("undosh: ", value)
    }
})

console.log(massiv_13)

// Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
alert("41-vazifa") // ?

// Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
alert("42-vazifa") // ?

// Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.
alert("43-vazifa")
let num_36 = [20, 4, 6, 9, 89, 15, 2]
let massiv_14 = []

num_36.filter(function(value) {
    if(value < 10) {
        massiv_14.push(value)
    }
})

console.log(massiv_14)

// Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).
alert("44-vazifa")
let num_37 = ['test', 'apple', 'banana', 'pear']
let massiv_15 = []

num_37.filter(function(value) {
    if(!value.includes('test')) {
        massiv_15.push(value)
    }
})

console.log(massiv_15)

// Faqat uzunligi eng uzun bo‘lgan elementlarni olib yangi massivga saqlang.
alert("45-vazifa") // ?