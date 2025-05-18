const myCalculator = document.querySelector('.myCal');

      const myKeys = [
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['C', '0', '=', '/'],
      ];

      const myOper = ['+', '-', '*', '/'];

      let myOutput;

      document.addEventListener('DOMContentLoaded', function () {
        myOutput = document.createElement('div');
        myOutput.innerHTML = '0';
        myOutput.classList.add('output');
        myCalculator.appendChild(myOutput);

        for (let y = 0; y < myKeys.length; y++) {
          let div = document.createElement('div');
          div.classList.add('row');
          myCalculator.appendChild(div);

          for (let x = 0; x < myKeys[y].length; x++) {
            let btn = document.createElement('div');
            btn.innerHTML = myKeys[y][x];
            btn.classList.add('btn');
            div.appendChild(btn);
            btn.addEventListener('click', btnHit);
          }
        }
      });

      function btnHit(e) {
        let myValue = this.innerText;  
        let myCal = myOutput.innerText;
        // console.log(myValue, myCal); 
        if (myCal == '0') {
          myCal = '';
        }
        if (myValue == '=') {
          myCal = eval(myCal);

        } else {
            // console.log(myCal);
            let lastChar = myCal.substring(myCal.length - 1);  // myCal ki total length ka last digit lastChar hai
            // console.log("myValue:", myValue);
            // console.log("lastChar:", lastChar);
            // console.log("myCal:", myCal);
            if (myOper.includes(myValue)) {  //ye if iss liye use hoi hai kyu k ye check kry gi k user ne do dafah operator tou nai lga diya
                if (myOper.includes(lastChar)) {
                    myCal = myCal.substring(0, myCal.length - 1);
                    console.log(myCal, 'value');
                } else {
                    myCal = eval(myCal);
                    console.log(myCal);
                }
            }
            // console.log('cal :', myCal, 'value : ',myValue);
            myCal = myCal + myValue;
            console.log(myCal);
        }
        if (myValue == 'C') {
          myCal = 0;
        }
        myOutput.innerText = myCal;
      }