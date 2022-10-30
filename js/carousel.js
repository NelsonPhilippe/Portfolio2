class Carousel {

    /**
     *
     * @param element
     * @param carousel_id
     * @param {Object} options
     * @param {Object} options.slidesToScroll
     * @param {Object} options.slidesVisible
     * @param {boolean} options.loop
     * @param {Carousel} carousel_link
     */
    constructor(element, carousel_id = null, options = {}, carousel_link = undefined) {
        this.carousel_link = carousel_link
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: true
        }, options)
        let children = [].slice.call(element.children)

        this.currentItem = 0

        this.root = this.createDivWithClass('carousel-' + carousel_id)
        this.container = this.createDivWithClass('container-ca-' +  carousel_id)
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallbacks = []
        this.items = children.map((child) => {
            let item = this.createDivWithClass("item_carousel-" +  carousel_id)
            item.appendChild(child)
            this.container.appendChild(item)
            return item;
        })
        this.setStyle()

        this.moveCallbacks.forEach((cb) => {
            cb(0)
        })
    }

    setStyle(){
        let ratio = this.items.length / this.options.slidesVisible;
        this.container.style.width = (ratio * 100) + '%';
        // this.container.style.height ='100%';

        this.items.forEach((item) => {
            item.style.width = ((100 / this.options.slidesVisible) / ratio + "%")
        })

    }

    createNavigation(){
        let nextButton = this.createButtonWithClass("slider-right")
        let prevButton = this.createButtonWithClass("slider-left")


        this.element.appendChild(nextButton)
        this.element.appendChild(prevButton)

        nextButton.addEventListener('click', () => {
            console.log('next')
            this.goTo(this.currentItem + this.options.slidesToScroll)
            if(this.carousel_link !== undefined){
                this.carousel_link.goTo(this.carousel_link.getIndex() + this.carousel_link.getOptions().slidesToScroll)
            }
        })
        prevButton.addEventListener('click', () => {
            console.log('prev')
            this.goTo(this.currentItem - this.options.slidesToScroll)
            if(this.carousel_link !== undefined){
                this.carousel_link.goTo(this.carousel_link.getIndex() - this.carousel_link.getOptions().slidesToScroll)
            }
        })

        this.onMove((index) => {
            if(index === 0){
                prevButton.classList.add('invisible-btn')
            }else {
                prevButton.classList.remove('invisible-btn')
            }

            if(this.items[this.currentItem + this.options.slidesVisible] === undefined){
                nextButton.classList.add('invisible-btn')
            }else{
                nextButton.classList.remove('invisible-btn')
            }
        })

    }

    navigate(index, cb){
        this.goTo(index)
        cb(index)
    }

    onMove(cb){
        this.moveCallbacks.push(cb)
    }

    goTo(index){
        if(index < 0){
            index = this.items.length - this.options.slidesVisible
        } else if(index >= this.items.length){
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d('+ translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach((cb) => {
            cb(index)
        })
    }

    createDivWithClass(className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div;
    }

    createButtonWithClass(className){
        let div = document.createElement('button')
        div.setAttribute('class', className)
        return div;
    }

    getIndex(){
        return this.currentItem;
    }

    setIndex(index){
        this.goTo(index)
        this.currentItem = index;
    }

    getOptions(){
        return this.options
    }

}