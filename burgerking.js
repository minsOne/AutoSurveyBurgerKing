var Nightmare = require('nightmare');
var vo = require('vo');

// DEBUG=nightmare node --harmony yahoo.js 8150905XXXXXXXXX
var url = 'https://kor.tellburgerking.com'
var surveyCodeStr = process.argv[2] + ""
console.log("버거킹 코드 : ", surveyCodeStr)

if (surveyCodeStr.length != 16) {
    console.log("입력하신 버거킹 코드의 길이가 다릅니다. 확인해주세요. -", "현재 : ", surveyCodeStr.length, "자리", ", 가능 길이 : 16자리");
    process.exit(1);
}

function *run() {
  var nightmare = Nightmare({ show: true });
  var Code = yield nightmare
    .goto(url)
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .type('input[id=CN1]', surveyCodeStr.substring(0,3))
    .type('input[id=CN2]', surveyCodeStr.substring(3,6))
    .type('input[id=CN3]', surveyCodeStr.substring(6,9))
    .type('input[id=CN4]', surveyCodeStr.substring(9,12))
    .type('input[id=CN5]', surveyCodeStr.substring(12,15))
    .type('input[id=CN6]', surveyCodeStr.substring(15,16))
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .click('input[type="submit"]')
    .wait('#NextButton')
    .wait(100)
    .click('input[type="submit"]')
    .evaluate(function () {
      return document.getElementsByClassName('ValCode')[0].innerHTML;
    });
  console.log(Code)

  yield nightmare.end();
}

vo(run)(function(err, result) {
  if (err) throw err;
});