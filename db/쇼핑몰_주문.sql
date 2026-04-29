-- CREATE DATABASE IF NOT EXISTS `shoppy`; -- 동일한 이름이 존재할 수 있기 때문에 백틱으로 묶어서 데이터베이스 생성
show databases;
use shoppy;
select database();
show tables;

/**********************************************************
	Member - member_id - trg_member_mid ::: M0001 -- 테이블이 삭제되면 트리거도 삭제된다
    Order - order_id - trg_order_id ::: O0001
    OrderItem - item_id - trg_orderitem_item_id ::: I0001
    Product - product_id - trg_product_product_id ::: P0001
************************************************/

-- 테이블 생성
create table member(
	member_id 		char(5)			primary key,
    member_name		varchar(6)		not null,
    email			varchar(30),
    created_at		datetime
);

create table order_data( -- order를 백틱으로 묶어 테이블 이름으로도 사용할 수 있었음
	order_id		char(5)			primary key,
    member_id		char(5),
    order_date		date			not null,
    constraint fk_order_data_member_id foreign key(member_id) references member(member_id) on delete cascade on update cascade
);


create table product(
	product_id		char(5)			primary key,
    product_name	varchar(10)		not null,
    price			int				not null
);

create table order_item(
	item_id			char(5)			primary key,
    order_id		char(5)			not null,
    product_id		char(5)			not null,
    quantity		int				not null,
    unit_price		int				not null,
    constraint fk_order_item_order_id foreign key(order_id) references order_data(order_id) on delete cascade on update cascade,
    constraint fk_order_item_product_id foreign key(product_id) references product(product_id) on delete cascade on update cascade
);


/************************************************/
delimiter $$
create trigger trg_member_mid
before insert on member
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(member_id, 4) AS UNSIGNED)), 0)
INTO max_code
FROM member; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.member_id = concat('M', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;
/************************************************/

/************************************************/
delimiter $$
create trigger trg_order_id
before insert on order_data
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(order_id, 4) AS UNSIGNED)), 0)
INTO max_code
FROM order_data; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.order_id = concat('O', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;
/************************************************/

/************************************************/
delimiter $$
create trigger trg_orderitem_item_id
before insert on order_item
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(item_id, 4) AS UNSIGNED)), 0)
INTO max_code
FROM order_item; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.item_id = concat('I', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;
/************************************************/

/************************************************/
delimiter $$
create trigger trg_product_product_id
before insert on product
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(product_id, 4) AS UNSIGNED)), 0)
INTO max_code
FROM product; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.product_id = concat('P', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;
/************************************************/

select * from information_schema.triggers;

-- 데이터 입력
desc member;
alter table member modify column email varchar(30) default 'example@example.com';

insert into member(member_name, created_at) values('홍길동', now());
insert into member(member_name, created_at) values('김유정', now());
insert into member(member_name, created_at) values('홍행홍', now());
insert into member(member_name, created_at) values('이순신', now());
insert into member(member_name, created_at) values('박기동', now());

select * from member;


-- 상품 데이터 입력
desc product;

insert into product(product_name, price) values('연필', 1200);
insert into product(product_name, price) values('선풍기', 150000);
insert into product(product_name, price) values('마우스', 5000);
insert into product(product_name, price) values('키보드', 4000);
insert into product(product_name, price) values('물병', 40000);
insert into product(product_name, price) values('이어폰', 3000);
insert into product(product_name, price) values('로봇청소기', 500000);
insert into product(product_name, price) values('RTX5080TI', 1000000000);

select * from product;

-- 주문 데이터 입력
desc order_data;
insert into order_data(member_id, order_date) values('M0001', '2026-04-29');
insert into order_data(member_id, order_date) values('M0003', '2026-04-01');
insert into order_data(member_id, order_date) values('M0002', '2026-04-20');
insert into order_data(member_id, order_date) values('M0004', '2026-04-17');
insert into order_data(member_id, order_date) values('M0001', '2026-04-11');
insert into order_data(member_id, order_date) values('M0005', '2026-04-15');
insert into order_data(member_id, order_date) values('M0002', '2026-04-08');
insert into order_data(member_id, order_date) values('M0003', '2026-04-03');
insert into order_data(member_id, order_date) values('M0004', '2026-04-25');
insert into order_data(member_id, order_date) values('M0004', '2026-04-13');
insert into order_data(member_id, order_date) values('M0005', '2026-04-19');

select * from order_data;

-- 주문 아이템 데이터 입력
desc order_item;

insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0001', 'P0001', 4, 1200*4);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0002', 'P0006', 2, 3000*2);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0003', 'P0005', 1, 40000);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0004', 'P0002', 3, 150000*3);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0005', 'P0003', 4, 5000*4);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0006', 'P0001', 12, 1200*12);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0007', 'P0002', 1, 150000);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0008', 'P0004', 10, 4000*10);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0009', 'P0005', 9, 40000*9);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0010', 'P0006', 4, 3000*4);
insert into order_item(order_id, product_id, quantity, unit_price)
	values('O0011', 'P0005', 1, 40000);
    
select * from order_item;


-- 대충 join을 이용해서 뭐라도 출력해보자
-- '홍길동' 고객이 주문을 진행한 내역

select m.member_id, m.member_name, od.order_id, od.order_date, p.product_name, oi.quantity, oi.unit_price
	from member m, order_data od, product p, order_item oi
		where m.member_id = od.member_id
			and od.order_id = oi.order_id
			and p.product_id = oi.product_id
            and m.member_name = '홍길동';

-- 'M0004' 회원번호의 고객이 주문을 진행한 내역
select m.member_id, m.member_name, od.order_id, od.order_date, p.product_name, oi.quantity, oi.unit_price
	from member m, order_data od, product p, order_item oi
		where m.member_id = od.member_id
			and od.order_id = oi.order_id
            and p.product_id = oi.product_id
            and m.member_id = 'M0004';

select m.member_name, od.order_date, p.product_name, oi.quantity
	from member m inner join order_data od on m.member_id = od.member_id
					inner join order_item oi on od.order_id = oi.order_id
                    inner join product p on p.product_id = oi.product_id
			order by oi.quantity desc;












































































