function hitBtn() {
    let myVal = this.innerHTML
    let myCal = output.innerHTML

    if(myCal === 0) {
        myCal = ''
    }

    if(myVal === '='){
        myCal = eval(myCal)
    }else{
        let lastChar = myCal.substring(myCal.length - 1)

        if(opers.includes(myVal)){
            if(opers.includes(lastChar)){
                myCal = myCal.substring(0, myCal.length - 1)
            }else{
                myCal = eval(myCal)
            }
        }

        myCal = myVal + myCal
    }

    if(myVal === 'C'){
        myCal = 0
    }

    output.innerHTML = myCal
}