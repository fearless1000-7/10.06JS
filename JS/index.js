let laptops = [
    {
        id: 1,
        brand: 'Samsung',
        proc: 'Core-i5',
        asccesM: 8,
        color: 'Gray',
        screen: 'FullHD',
        memory: 1000
    },
    {
        id: 2,
        brand: 'Acer',
        proc: 'Core-i9',
        asccesM: 16,
        color: 'Black',
        screen: 'HD',
        memory: 500
    },
    {
        id: 3,
        brand: 'Apple',
        proc: 'M1 Ultra',
        asccesM: 16,
        color: 'Gray',
        screen: 'Retina',
        memory: 1000
    },
    {
        id: 4,
        brand: 'asus',
        proc: 'Core-i7',
        asccesM: 16,
        color: 'Blue',
        screen: 'FullHD',
        memory: 1000
    },
    {
        id: 5,
        brand: 'Lenovo',
        proc: 'AMD Ryzen-5',
        asccesM: 32,
        color: 'black',
        screen: '2K',
        memory: 1000
    },
    {
        id: 6,
        brand: 'Samsung',
        proc: 'Core-i5',
        asccesM: 16,
        color: 'Gray',
        screen: 'HD',
        memory: 1000
    },
    {
        id: 7,
        brand: 'Acer',
        proc: 'Core-i9',
        asccesM: 24,
        color: 'Black',
        screen: 'HD',
        memory: 500
    },
    {
        id: 8,
        brand: 'Apple',
        proc: 'M1 MAX',
        asccesM: 16,
        color: 'Midnight Blue',
        screen: 'Retina 4K',
        memory: 1000
    },
    {
        id: 9,
        brand: 'Asus',
        proc: 'Core-i7',
        asccesM: 16,
        color: 'Pink',
        screen: 'fhd',
        memory: 1000
    },
    {
        id: 10,
        brand: 'Lenovo',
        proc: 'Core-i7',
        asccesM: 32,
        color: 'Red',
        screen: 'FullHD',
        memory: 1000
    }
]
let ask = {
    brand: prompt('brand').trim(),
    proc: prompt('proc').trim(),
    asccesM:prompt('asccesM').trim(),
    color: prompt('color').trim(),
    screen: prompt('screen').trim(),
    memory: prompt('memory').trim()

}
let {brand,proc, asccesM,color,screen,memory } = ask
let closeItems = []
for(let item of laptops){

    if(item.brand.includes(brand)) {
        if(!closeItems.includes(item)) {
            closeItems.push(item)
        }
        if(item.proc === proc) {
            closeItems.push(item)

            if(item.asccesM >= asccesM) {
                closeItems.push(item)
            }
        }
    }
}

closeItems= [...new Set(closeItems)]
console.log(
    closeItems
);
