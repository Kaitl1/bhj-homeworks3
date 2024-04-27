let elementsArr = Array.from(document.getElementsByClassName('font-size'))
let book = document.getElementsByClassName('book')[0]
let className = ''
let bookClassLast = ''
elementsArr.forEach((el) => el.addEventListener('click',function (event){
        console.log(bookClassLast)
        if(elementsArr.findIndex(el => el.className.includes('font-size_active'))!=-1){
            elementsArr[elementsArr.findIndex(el => el.className.includes('font-size_active'))].classList.remove('font-size_active')
        }
        event.target.classList.add('font-size_active')
        let index = elementsArr.findIndex(el => el == event.target)
        if(index!=1){
            className = index==2?'font-size_big':'font-size_small'
        }else{
            className = ''
        }
        if(bookClassLast){
            book.classList.remove(bookClassLast)
        }
        book.classList.add(className)
        bookClassLast=className
    })
)
