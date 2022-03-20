let para = document.querySelector("p")

// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
const content = para.innerText
const array = content.split(" ")
for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 8) {
        array[i] = `<span style="background-color:yellow">${array[i]}</span>`
    }
}

para.innerHTML = array.join(" ")
// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const link = document.createElement("a")

link.innerText = "Facebook"
link.href = "https://www.facebook.com/home.php" 
link.target = "_blank"

para.insertAdjacentElement("afterend",link)
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const number = document.createElement("div")
number.innerHTML = array.length
 
para.insertAdjacentElement("afterend",number)
// Thay thế các ký hiệu ? => 🤔, ! => 😲
para.innerHTML = para.innerHTML.replaceAll("?", "🤔")
para.innerHTML = para.innerHTML.replaceAll("!", "😲")