// todo: 손님 앉음&매니저가 주문넣기 -> 주방장은 음식제조 -> 서버는 음식배달
class RamenStore {
    tables;
    statusBoard;
    manager;
    chef;
    server;

    constructor() {
        this.tables = [['A', true], ['B', true], ['C', true], ['D', true], ['E', true]]; // 왜 배열?
        this.statusBoard = { // 왜 배열?
            order: [], // [tableID, menuCount]
            making: [],
            cooked: [] // [tableID]
        };
        this.manager = new Manager(this.tables, this.statusBoard);
        this.chef = new Chef(this.statusBoard);
        this.server = new Server(this.statusBoard);
    }

    start() {
        console.log(this.statusBoard)
        this.manager.tableGuide();
        this.manager.pushOrder(3);
        this.chef.checkAndMakeOrder();
        setInterval(() => {
            console.log(this.statusBoard)

        }, 4000)

    }

}

// todo: 1.테이블배치  2.주문받고&order에넣기
class Manager {
    seatedTableIdx;

    constructor(tables, statusBoard) {
        // this.seatedTableIdx;
        this.tables = tables;
        this.statusBoard = statusBoard;
    }

    // 테이블배치
    tableGuide() {
        this.seatedTableIdx = this.tables.findIndex((table) => table[1] === true);
        this.tables[this.seatedTableIdx][1] = false;
    }


    // order넣기
    pushOrder(menuCount) {
        const newOrder = [this.tables[this.seatedTableIdx][0], menuCount];
        this.statusBoard.order.push(newOrder);
        console.log(this.statusBoard)
    }

}

// todo: 1.order확인 후 꺼내기(일정시간마다)  2.한 그릇씩만 제조가능  3.제조완료되면 cooked에 올리기
class Chef {
    // isCheck;

    constructor(statusBoard) {
        this.statusBoard = statusBoard;
        // this.isCheck = true;
        // this.checkOrder = setInterval(() => {
        //     if(this.statusBoard.order) {
        //         this.isCheck = false;
        //         console.log('a');
        //     }
        // },1000)
    }

    // order있는지 확인 -> making로 옮김 -> 제조완료 후 cooked로 옮김 ....이 함수 총체적난국
    checkAndMakeOrder() {
        if (this.statusBoard.order[0]) {
            const making = this.statusBoard.order.shift();
            this.statusBoard.making.push(making);
            console.log(this.statusBoard)
            for (let i = 0; i < this.statusBoard.making[0][1]; i++) {
                setTimeout(() => {
                    console.log(`${this.statusBoard.making[0]}테이블 : 라멘 ${i} 제조완료`);
                    if (i === this.statusBoard.making[0][1] - 1) {
                        const maked = this.statusBoard.making.shift();
                        this.statusBoard.cooked.push(maked)
                    }
                }, i * 3000);
            }
        }


        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 3000)
        })
    }


}

// todo: 1.cooked확인(일정시간 마다) 2.cooked된 요리있으면 테이블에 배달(cooked에서 pop)
class Server {
    constructor(statusBoard) {
        this.statusBoard = statusBoard;
    }

}


const ramenStore = new RamenStore();
ramenStore.start();


