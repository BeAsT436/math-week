// ребуси
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const paragraph = document.querySelector(".paragraph")
            
btn.addEventListener("click", ()=>{
    if (input.value == "слово") {
        paragraph.textContent = "Правильно!!!"
        input.value = ""
    }
    else{
        paragraph.textContent = "Спробуй ще раз"
        input.value = ""
    }
})

const input2 = document.querySelector("#input2")
const btn2 = document.querySelector("#btn2")
const p2 = document.querySelector("#p2")
            
btn2.addEventListener("click", ()=>{
    if (input2.value == "співак") {
        p2.textContent = "Правильно!!!"
        input2.value = ""
    }
    else{
        p2.textContent = "Спробуй ще раз"
        input2.value = ""
    }
})

const input3 = document.querySelector("#input3")
const btn3 = document.querySelector("#btn3")
const p3 = document.querySelector("#p3")
            
btn3.addEventListener("click", ()=>{
    if (input3.value == "тривога") {
        p3.textContent = "Правильно!!!"
        input3.value = ""
    }
    else{
        p3.textContent = "Спробуй ще раз"
        input3.value = ""
    }
})

const input4 = document.querySelector("#input4")
const btn4 = document.querySelector("#btn4")
const p4 = document.querySelector("#p4")
            
btn4.addEventListener("click", ()=>{
    if (input4.value == "серце") {
        p4.textContent = "Правильно!!!"
        input4.value = ""
    }
    else{
        p4.textContent = "Спробуй ще раз"
        input4.value = ""
    }
})
// кінець ребусів
// Так чи ні
const button = document.querySelector(".btn")
const button2 = document.querySelector(".btn2")
const button3 = document.querySelector(".btn3")
const button4 = document.querySelector(".btn4")
const button5 = document.querySelector(".btn5")
const button6 = document.querySelector(".btn6")
const button7 = document.querySelector(".btn7")
const button8 = document.querySelector(".btn8")
const button9 = document.querySelector(".btn9")
const button10 = document.querySelector(".btn10")

const p = document.querySelector(".p1")
const p_2 = document.querySelector(".p2")
const p_3 = document.querySelector(".p3")
const p_4 = document.querySelector(".p4")
const p_5 = document.querySelector(".p5")

button.addEventListener("click", ()=>{
    p.textContent = "Неправильно"
})
button2.addEventListener("click", ()=>{
    p.textContent = "Правильно!!!"
})
button3.addEventListener("click", ()=>{
    p_2.textContent = "Правильно!!!"
})
button4.addEventListener("click", ()=>{
    p_2.textContent = "Неправильно"
})
button5.addEventListener("click", ()=>{
    p_3.textContent = "Неправильно"
})
button6.addEventListener("click", ()=>{
    p_3.textContent = "Правильно!!!"
})
button7.addEventListener("click", ()=>{
    p_4.textContent = "Неправильно"
})
button8.addEventListener("click", ()=>{
    p_4.textContent = "Правильно!!!"
})
button9.addEventListener("click", ()=>{
    p_5.textContent = "Правильно!!!"
})
button10.addEventListener("click", ()=>{
    p_5.textContent = "Неправильно"
})
// кінець так чи ні
// Дай відповідь на запитання
const inp1 = document.querySelector(".inp1")
const inp2 = document.querySelector(".inp2")
const inp3 = document.querySelector(".inp3")
const inp4 = document.querySelector(".inp4")
const inp5 = document.querySelector(".inp5")
const inp6 = document.querySelector(".inp6")
const inp7 = document.querySelector(".inp7")

const btn_1 = document.querySelector("#btn_1")
const btn_2 = document.querySelector("#btn_2")
const btn_3 = document.querySelector("#btn_3")
const btn_4 = document.querySelector("#btn_4")
const btn_5 = document.querySelector("#btn_5")
const btn_6 = document.querySelector("#btn_6")
const btn_7 = document.querySelector("#btn_7")

const p__1 = document.querySelector("#p_1")
const p__2 = document.querySelector("#p_2")
const p__3 = document.querySelector("#p_3")
const p__4 = document.querySelector("#p_4")
const p__5 = document.querySelector("#p_5")
const p__6 = document.querySelector("#p_6")
const p__7 = document.querySelector("#p_7")

btn_1.addEventListener("click", ()=>{
    if (inp1.value == "3") {
        p__1.textContent = "Правильно!!!"
        inp1.value = ""
    }else{
        p__1.textContent = "Спробуй ще раз"
        inp1.value = ""
    }
})
btn_2.addEventListener("click", ()=>{
    if (inp2.value == "2") {
        p__2.textContent = "Правильно!!!"
        inp2.value = ""
    }else{
        p__2.textContent = "Спробуй ще раз"
        inp2.value = ""
    }
})
btn_3.addEventListener("click", ()=>{
    if (inp3.value == "60") {
        p__3.textContent = "Правильно!!!"
        inp3.value = ""
    }else{
        p__3.textContent = "Спробуй ще раз"
        inp3.value = ""
    }
})
btn_4.addEventListener("click", ()=>{
    if (inp4.value == "час") {
        p__4.textContent = "Правильно!!!"
        inp4.value = ""
    }else{
        p__4.textContent = "Спробуй ще раз"
        inp4.value = ""
    }
})
btn_5.addEventListener("click", ()=>{
    if (inp5.value == "перевернути його на 180 градусів") {
        p__5.textContent = "Правильно!!!"
        inp5.value = ""
    }else{
        p__5.textContent = "Спробуй ще раз"
        inp5.value = ""
    }
})
btn_6.addEventListener("click", ()=>{
    if (inp6.value == "37") {
        p__6.textContent = "Правильно!!!"
        inp6.value = ""
    }else{
        p__6.textContent = "Спробуй ще раз"
        inp6.value = ""
    }
})
btn_7.addEventListener("click", ()=>{
    if (inp7.value == "10") {
        p__7.textContent = "Правильно!!!"
        inp7.value = ""
    }else{
        p__7.textContent = "Спробуй ще раз"
        inp7.value = ""
    }
})
// кінець запитаннь

