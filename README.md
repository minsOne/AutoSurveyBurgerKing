### 프로젝트 배경

집에서 3분거리에 버거킹이 있어 자주 사먹다가 설문조사를 하면 단품을 업그레이드 할 수 있다고 해서 설문조사를 하였습니다.

몇번 하다가 귀찮아서 자동으로 설문조사 하는 툴을 만들었습니다. 

처음에는 모든 항목에 대해서 입력하도록 하였습니다. 하다보니 다음 버튼을 두번 누르면 다음 페이지로 넘어간다는 사실을 발견하였습니다. 

그래서 '제대로 만들어라'라는 의미로 이 프로젝트를 공개하기로 하였습니다. 따라서 이 프로젝트는 별도의 라이센스를 명기하지 않습니다.

### 사용 방법

#### 설치

이 프로젝트는 node.js를 사용하며, npm을 이용하여 vo, nightmare 라이브러리를 설치합니다.

	$ npm install

#### 실행

다음과 같이 버거킹 코드를 입력하여 실행합니다.

	$ node --harmony burgerking.js [버거킹 설문번호]
	ex) node --harmony burgerking.js 8150905XXXXXXXXX

	버거킹 코드 :  8150905XXXXXXXXX
	확인 코드: 970XXXXX