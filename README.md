# 라면집
* 클래스는 필요해서 생겨야함
* (명사라고 다 생기는게 아님)

## class
* 오더큐1(제작,완료)
* 매니저1
* 주방장1
* 서버1(오더큐1초마다확인)
* 테이블5개

* 메뉴1개
* 손님(명수?모름)

## 요구사항
* 손님앚음,주문을 하면 그때 매니저가 자리배치하기..
* 매니저 - 자리배치 -> 주문받기 -> 주문큐에 주문넣기(자리안내와 동시에 주문받기)
* 주방장이 - 주문큐확인 후 주문꺼내기 -> 한번에1그릇만 제조가능(3초) -> 
           제조완료되면 오더큐에 완료올림
* 서버-오더큐확인하며 완료된거있으면 테이블배달

* 일요일 오후 3시까지