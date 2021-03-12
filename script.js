

// money: 150,
// notEnoughMoney: false

items = [
    {
        id: "prod1",
        image: "https://i.etsystatic.com/24029103/r/il/7101d9/2582521500/il_794xN.2582521500_pgg3.jpg",
        name: "Leather Tool Roll Up Pouch",
        price: 30.90
    },
    {
        id: "prod2",
        image: "https://i.etsystatic.com/22401403/r/il/56d9f2/2529967961/il_794xN.2529967961_7y5w.jpg",
        name: "Hand Forged Viking Axe",
        price: 132.48
    },
    {
        id: "prod3",
        image: "https://i.etsystatic.com/12741331/r/il/1a6268/1267899307/il_794xN.1267899307_st8j.jpg",
        name: "Leather Cabinet Pulls",
        price: 5.68
    },
    {
        id: "prod4",
        image: "https://i.etsystatic.com/12815693/r/il/ece312/1085869628/il_794xN.1085869628_2z2r.jpg",
        name: "Unicorn Papercraft, 3D Papercraft",
        price: 14.52
    },
    {
        id: "prod5",
        image: "https://i.etsystatic.com/11318063/r/il/53df06/1126873004/il_794xN.1126873004_tg73.jpg",
        name: "Chicken Coop Plans",
        price: 18.11
    }
]

shoppingBag = []

const moneyLeft = document.getElementById('moneyLeft')
const noMoreMoney = document.getElementById('noMoreMoney')
const shop = document.getElementById('shop')
const myBag = document.getElementById('myBag')

let money = 150
let notEnoughMoney = false

updatePage()

function updatePage() {

    shop.innerHTML = ''

    items.map(item => {
        let card = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('div')
        let price = document.createElement('div')
        let buy = document.createElement('button')

        card.setAttribute('class', 'cardStyle')
        img.setAttribute('class', 'imgStyle')
        buy.setAttribute('class', 'buyStyle')
        buy.innerText = 'BUY'


        img.src = item.image
        name.innerText = item.name
        price.innerText = item.price
        card.setAttribute('id', item.id)

        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(price)
        card.appendChild(buy)

        buy.addEventListener('click', buyItem)

        shop.appendChild(card)


    })

    myBag.innerHTML = ''

    shoppingBag.map(item => {

        let card = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('div')
        let price = document.createElement('div')
        let buy = document.createElement('button')

        card.setAttribute('class', 'cardStyle')
        img.setAttribute('class', 'imgStyle')
        buy.setAttribute('class', 'buyStyle')
        buy.innerText = 'BUY'


        img.src = item.image
        name.innerText = item.name
        price.innerText = item.price
        card.setAttribute('id', item.id)

        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(price)


        myBag.appendChild(card)
    })

}


function buyItem(event) {
    if (event.path[1].childNodes[2].innerText > money) {
        noMoreMoney.innerText = 'Mf you broke'
        moneyLeft.style.color = 'red'
    } else {
        money -= event.path[1].childNodes[2].innerText
        moneyLeft.innerText = `My money: ${money}`
        let id = event.path[1].id

        let product = items.filter(el => el.id === id)
        shoppingBag.push(product[0])

        items = items.filter(el => el.id !== id)

        noMoreMoney.innerText = ''
        moneyLeft.style.color = 'black'
        updatePage()
    }

}

