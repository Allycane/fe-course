/*
	- MySQL - 정형 데이터를 저장하는 데이터베이스의 일종
    - RDBMS (Relational DataBase Management System) 구조를 가지고 있다
	- SQL(Structured Query Language) 문법을 사용하여 데이터의 CRUD를 구현한다
		C (Create) :: Insert 명령어 - 데이터 생성 : RDBMS에 데이터 저장
		R (Read) :: Select 명령어 - 데이터 검색 및 반환
		U (Update) :: Update 명령어 - 데이터 갱신
		D (Delete) :: Delete 명령어 - 데이터 삭제
    - 개발자는 DML 중심의 SQL 문법을 숙지하는 것을 권장
    - SQL은 대소문자를 구분하지 않음. 대부분 소문자로 작성함
    - snake case 방식으로 파일명을 작성함 :: sql_001
    
    SQL
	- SQL의 종류는 DDL, DML, DCL, DTL로 구분한다
		1. DDL(Data Definition Language) :: 데이터 정의어
			- 데이터를 저장하기 위한 공간을 생성하고, 논리적으로 정의하는 언어
            - create, alter, truncate, drop etc...
        2. DML(Data Manipulation Language) :: 데이터 조작어
			- 데이터를 CRUD 하는 명령어
            - insert, select, update, delete
        3. DCL(Data Control Language) :: 데이터 제어어
			- 데이터에 대한 권한과 보안을 정의하는 언어
            - grant, revoke
        4. DTL(Data Transaction Language) :: 트랜젝션 제어어
			- 데이터베이스의 처리 작업인 트랜젝션을 관리하는 언어
            - commit, save, rollback
*/

/********************************************************************************
	✨ Workbench 실행시 필수 명령어 ✨
    1. 데이터 접속 명령어
		show databases; -- 데이터베이스 확인
        use database_name; -- 사용할 데이터베이스 오픈
        
	2. 데이터베이스 선택
		select database(); -- 데이터베이스 선택
        use tables; -- 데이터베이스의 모든 테이블 조회
        
*********************************************************************************/
show databases;
use hrdb2019;
select database();
show tables;

/********************************************************************************
	DESC(DESCRIBE) : 테이블 구조 확인
    형식 > desc 테이블명
    
*********************************************************************************/
desc department;
desc employee;
desc vacation;
desc unit;

/********************************************************************************
	SELECT : 테이블 내용 조회
    형식 > select [컬럼리스트] from [테이블명]
*********************************************************************************/
show tables;
desc employee;
select emp_id from employee;
select emp_id, emp_name, eng_name from employee;
select * from employee;

-- 사원 테이블의 사번, 사원명, 성별, 입사일, 급여률 조회
show tables;
desc employee;
select emp_id, emp_name, gender, hire_date, salary from employee;

-- 부서 테이블의 모든 데이터 조회
desc employee;
select * from department;
/********************************************************************************
	AS : 컬럼의 별칭을 부여할때 사용하는 명령어
    형식> select [컬럼명 as 별칭, ...] from [테이블명]
    ✨ 컬럼명에 함수를 적용하여 실행하는 경우에 별칭 부여
*********************************************************************************/
-- 사원테이블의 emp_id 컬럼명을 '사번' 별칭으로 조회
select emp_id as 사번 from employee;
select emp_id 사번 from employee;
select emp_id '사원 번호' from employee;

-- 사원테이블의 별칭을 emp_id는 사번, emp_name은 사원명, hire_date는 입사일, salary를 급여로 조회
select emp_id 사번, emp_name 사원명, hire_date 입사일, salary 급여 from employee;

-- 사원테이블의 사원명, 폰번호, 급여, 보너스(급여의 10%), 입사일 조회
-- 산술연산식이 가능한 컬럼은 Number 타입 가능
desc employee;
select emp_name, phone, salary, salary*0.1 as bonus, hire_date from employee;

-- 현재 날짜를 조회 : curdate()
select curdate() as today from dual;

/********************************************************************************
	SELECT ~ FROM ~ WHERE : 테이블 상세 내용 조회
    형식> select [컬럼명 as 별칭, ...] from [테이블명] where [컬럼명][조건절]
*********************************************************************************/
-- 사원테이블에서 '정주고' 사원의 정보 조회
desc employee;
select emp_name from employee;
select * from employee where emp_name='정주고';
-- sys 부서에 속한 모든 사원을 조회
desc department;
select dept_id from department;
select * from department where dept_id='sys';

-- 사번이 50005인 사원의 사원명, 성별, 입사일, 급여를 조회
select emp_name, gender, hire_date, salary from employee where emp_id='S0005';

-- SYS부서에 속한 모든 사원들을 조회
-- 단 출력되는 EMP_ID 컬럼은 '사원번호' 별칭으로 조회
desc employee;
select dept_id from department;
select emp_id as '사원번호', emp_name as '사원명', hire_date as '입사일', salary from employee where dept_id='SYS';

-- 🎈 컬럼 별칭을 통해 조건절을 처리할 수 있을까?
-- 조건절의 컬럼명은 테이븡릐 원본 컬럼명만 가능하다!

-- 입사일이 2014년 8월 1일인 사원들을 조회
-- date 타입은 표현은 문자열처럼, 처리는 숫자처럼 사용됨
desc employee;
select * from employee where hire_date='2014-08-01';

-- 급여가 5000 인 사원들을 조회
select * from employee where salary = 5000;

-- 성별이 남자인 사원들을 조회
select * from employee where gender = 'M';
-- 성별이 여자인 사원들을 조회
select * from employee where gender = ' F';

/********************************************************************************
	NULL : 아직 정의되지 않은 미지수
    논리적인 값으로 조건식을 처리 - is null / is not null
*********************************************************************************/
-- 급여가 null인 사원들을 조회
select * from employee where salary is null;

-- 영어 이름이 정해지지 않은 사원 조회
select * from employee where eng_name is null;

-- 퇴사하지 않은 사원들을 조회
select * from employee where retire_date is null;
-- 퇴사한 사원들을 조회
select * from employee where retire_date is not null;

-- 재직중인 사원들의 보너스 칼럼을 추가하고, 급여의 20%를 설정하여 조회
-- 보너스 컬럼의 컬럼명은 'bonus'
select emp_id 사번, 
	emp_name 사원명, 
    hire_date 입사일, 
    salary 급여, 
    salary*0.2 보너스 
    from employee where retire_date is null;

/********************************************************************************
	IFNULL : NULL을 다른값으로 대체해주는 함수
    DB마다 다르다
    형식> IFNULL(NULL 포함 컬럼, 대체값);
*********************************************************************************/
-- STG 부서에 속한 사원들의 정보 조회
-- 단, 급여가 NULL인 사원은 0 값으로 치환
select emp_id, emp_name, hire_date, dept_id, ifnull(salary, 0) as salary from employee where dept_id='STG';

-- 영어이름이 정해지지 않은 사원은 'Smith'로 치환
-- 사원번호, 사원명, 영어이름, 입사일, 부서 아이디
select emp_id, emp_name, ifnull(eng_name, 'Smith') as eng_name, hire_date, dept_id from employee;

-- MKT 부서의 사원들 조회, 재직중인 사원들의 retire_date를 현재 날짜로 치환
select emp_id, 
	emp_name, 
    eng_name, 
    hire_date,
    ifnull(retire_date, curdate()) 
    as retire_date from employee where dept_id='MKT';

/********************************************************************************
	DISTINCT : 중복된 데이터를 배제하고 조회
    형식> SELECT DISTINCT [컬럼 리스트...] FROM ~ WHERE ~
*********************************************************************************/
-- 사원 테이블에서 부서 아이디를 조회
-- 사원 테이블의 부서 아이디는 부서 테이블의 부서 아이디를 참조함으로 다중으로 저장되어있다
select dept_id from employee;
select distinct dept_id from employee;

-- Unique한 Key와 함께 조회하는 경우, distinct가 적용되지 않는다
select distinct emp_id, dept_id from employee;

/********************************************************************************
	ORDER BY : 데이터 정렬
    형식> SELECT [컬럼 리스트...] FROM [테이블명] WHERE [조건절] ORDER BY [컬럼명] ASC(오름차순, default)/DESC(내림차순)
*********************************************************************************/
-- 급여를 기준으로 오름차순 정렬
select * from employee order by salary;
select * from employee order by salary desc;

-- 모든 사원을 급여, 성별을 기준으로 오름차순 정렬
select * from employee order by salary, gender;

-- eng_name 컬럼이 null인 사원들의 입사일이 가장 최근 순서로 조회
select * from employee where eng_name is null order by hire_date desc;

-- 퇴직한 사원들을 급여기준으로 내림차순 정렬
select * from employee where retire_date is not null order by salary desc;

-- 퇴직한 사원들을 급여기준으로 내림차순 정렬
-- 사번, 사원명, 입사일, 퇴사일, 급여
-- salary 컬럼의 별칭으로 '급여'로 수정
select emp_id,		-- 3) dataset에서 요청한 data를 출력
	emp_name,
    hire_date,
    retire_date,
    salary 급여
    from employee	-- 1) table 검색
    where retire_date is not null	-- 2) 조건에 맞는 dataset 출력
    order by 급여 desc;		-- 4) 가장 마지막에 출력되기 때문에 별칭으로도 출력이 가능하다
    
-- 정보 시스템 (SYS) 부서 사원들 중 입사일이 빠른 순서, 급여를 많이 받는 순서로 정렬
-- hire_date, salary 컬럼은 입사일, 급여 별칭으로 컬럼리스트 생성후 정렬
select emp_id,
	emp_name,
    hire_date 입사일,
    salary 급여
	from employee
    where dept_id = "SYS"
    order by 입사일 asc, 급여 desc;
    
show databases;
use hrdb2019;
select database();
show tables;

desc employee;

/*****************************************************************
	조건절 + 비교연산자 : 특정 범위 혹은 데이터 검색
    형식 > SELECT [ 컬럼 리스트 ]
			FROM [ 테이블명 ]
            WHERE [ 컬럼명 ] 비교연산자 [ 값 ]
            ORDER BY [ 기준 컬럼명 ]
*****************************************************************/
-- 급여가 5000 이상인 사원들을 조회, 급여를 오름차순으로 정렬
select * from employee where salary >= 5000 order by salary asc;

-- 2017년 1월 1일 이후 입사한 사원들을 조회
select * from employee where hire_date > '2017-01-01' order by hire_date desc;

-- 입사일이 2015-01-01 이후이거나, 급여가 6000 이상인 사원들을 조회
select * from employee where hire_date > '2015-01-01' or salary >= 6000;

-- 입사일이 2015-01-01 이후이고, 급여가 6000 이상인 사원들을 조회
select * from employee where hire_date > '2015-01-01' and salary >= 6000;

-- 특정 범위 : between and
select * from employee where hire_date > '2015-01-01' and hire_date <'2017-12-31' order by hire_date desc;

-- 급여가 6000 이상, 8000 이하인 모든 사원들을 조회
select * from employee where salary >= 6000 and salary <= 8000 order by salary desc;
select * from employee where salary between 6000 and 8000 order by salary desc;

/*****************************************************************
	특정 범위 엑세스 : BETWEEN ~ AND ~
    형식 > SELECT [ 컬럼 리스트 ]
			FROM [ 테이블명 ]
            WHERE [ 컬럼명 ] BETWEEN [ 조건값 1 ] AND [ 조건값 2 ]
            ORDER BY [ 기준 컬럼명 ]
*****************************************************************/
-- 특정 범위 : between and
select * from employee where hire_date between '2015-01-01' and '2017-12-31' order by hire_date desc;

-- 급여가 6000 이상, 8000 이하인 모든 사원들을 조회
select * from employee where salary between 6000 and 8000 order by salary desc;

-- 사원명이 오삼식, 김삼순, 일지매 사원들 조회
select * from employee where emp_name = '오삼식' or emp_name = '김삼순' or emp_name = '일지매';

-- 부서 아이디가 MKT, SYS, STG에 속한 모든 사원들 조회
select * from employee where dept_id = 'MKT' or dept_id = 'SYS' or dept_id = 'STG' order by dept_id;

/*****************************************************************
	특정 범위 엑세스(논리합) : IN (값1, 값2, 값3, ...)
    형식 > SELECT [ 컬럼 리스트 ]
			FROM [ 테이블명 ]
            WHERE [ 컬럼명 ] IN (값1, 값2, 값3, ...)
*****************************************************************/
select * from employee where emp_name in ('오삼식', '김삼순', '일지매');

select * from employee where dept_id in ('MKT', 'SYS', 'STG');

/*****************************************************************
	특정 문자열 검색 : 와일드 문자 (%, _) + LIKE 연산자
		% : 문자열 전체
        _ : 한글자
    형식 > SELECT [ 컬럼 리스트 ]
			FROM [ 테이블명 ]
            WHERE [ 컬럼명 ] LIKE '검색데이터(와일드 문자 포함)%, _';
*****************************************************************/
-- '한'씨 성을 가진 모든 사원 조회
select * from employee where emp_name like '한%';
-- 영어 이름이 'f'로 시작하는 모든 사원 조회
select * from employee where eng_name like 'F%';
-- 이메일 두번째 자리에 'a'가 들어가는 모든 사원 조회
desc employee;
select * from employee where email like '_a%' order by email;
-- 이메일 아이디가 4자인 모든 사원들 조회
select * from employee where email like '____@%' order by email;
-- 부서 아이디에 a가 들어가는 모든 사원을 조회
select * from employee where dept_id like '%A%';


/*****************************************************************
	내장 함수 ( Built-in Function )
		숫자 함수, 문자 함수, 날짜 함수
	호출되는 위치 - [컬럼리스트], [조건절의 컬럼명]
*****************************************************************/
-- [숫자함수]
-- 함수 실습을 위한 테이블 : DUAL
-- (1) abs(숫자) 절댓값 출력 함수
select abs(100), abs(-100), 100, -100 from dual;

-- (2) 소숫점 버리기
-- floor(숫자), truncate(숫자, 자릿수)
select floor(123.456), truncate(123.456, 3), truncate (123.456, 2) from dual;

-- 사원테이블의 sys 부서 사원들의 사번, 사원명, 부서아이디, 폰번호, 급여
-- 보너스 ( 급여 25% ) 컬럼을 추가하여 조회
select emp_id, emp_name, dept_id, phone, salary, truncate(salary*0.25, 1) as bonus 
	from employee 
	where dept_id = 'SYS';
-- (3) 임의의 난수를 발생시키는 함수 (0~1)
select rand() from dual;

-- 정수 세자리 ( 0~999 ) 사이의 난수 발생
select floor(rand()*1000) as 'Number' from dual;
-- 정수 4자리의 난수
select floor(rand()*10000) as 'Number' from dual;
-- 정수 4자리 사이의 난수, 소숫점 2자리까지 유지
select truncate(rand()*10000, 2) as 'Number' from dual;

-- (4) mod(숫자, 나누는 숫자) (모듈러 연산자) : 나머지 함수
select mod(123, 2) as odd, mod(124, 2) as even from dual;

-- 3자리 수를 랜덤으로 발생시켜, 2로 나누어 홀수, 짝수를 구분
select mod(floor(rand()*1000+1), 2) from dual;


-- [문자 함수]
-- (1) concat(문자열1, 문자열2) : 문자열 결합
select concat('안녕하세요', ' MySQL ', '공부중입니다') as str from dual;
-- 사원 테이블의 사원번호, 사원명, 시원명2 컬럼을 생성하여 조회
-- 사원명2 컬럼 데이터 형식 : S0001(홍길동)
select emp_id, emp_name, concat(emp_id, ' (', emp_name, ')') as emp_name2 from employee;

-- 사번, 사원명, 영어이름, 입사일, 폰번호, 급여를 조회
-- 영어이름의 출력형식을 '홍길동/hong' 타입으로 출력
-- 영어이름이 null인 경우에는 smith를 기본으로 조회
select emp_id, emp_name, concat(emp_name, ' / ', ifnull(eng_name, 'smith')) as eng_name, 
	hire_date, phone, salary
	from employee
    order by emp_id;
    
-- (2) substring(문자열, 위치, 갯수) : 문자열 추출, 공백도 문자열 포함
select substring('대한민국 홍길동', 1, 4) as str1, substring('대한민국 홍길동', 6, 3) as str2;

-- 사원테이블의 사번, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
select emp_id, emp_name, 
	substring(hire_date, 1, 4) as hire_year,
    substring(hire_date, 6, 2) as hire_month,
    substring(hire_date, 9, 2) as hire_date,
    salary from employee order by emp_id;
-- 2015년도에 입사한 모든 사원 조회
select * from employee where substring(hire_date, 1, 4) = '2015' order by emp_id;

-- 2018년도에 입사한 정보시스템(SYS) 부서 사원 조회
select * from employee where substring(hire_date, 1, 4) = '2018' and dept_id = 'SYS' order by emp_id;

-- (3) left / right(문자열, 갯수)
select curdate() from dual;
select left(curdate(), 4) as year, 
	substring(curdate(), 6, 2) as month, 
	right(curdate(), 2) as date from dual;
    
-- 2018년도에 입사한 모든 사원 조회
select * from employee where left(hire_date, 4) = '2018' order by emp_id;
-- 2015년부터 2017년 사이에 입사한 모든 사원 조회
select * from employee where left(hire_date, 4) between '2015' and '2017' order by emp_id;
-- 사원번호, 사원명, 입사일, 폰번호, 급여를 조회
-- 폰 번호 마지막 4자리만 출력
select emp_id, emp_name, hire_date, right(phone, 4) as phone, salary from employee;

-- (4) upper (문자열), lower (문자열) 대, 소문자로 치환
select upper('welcome to mysql') as upper, lower('welcome to mysql') as lower from dual;

-- 사번, 사원명, 영어이름, 부서아이디, 이메일, 급여를 조회
-- 영어이름은 대문자, 부서아이디는 소문자, 이메일은 대문자
select emp_id, emp_name, 
	ifnull(upper(eng_name), ' ') as eng_name, 
    lower(dept_id) as dept_id, 
    upper(email) as email, 
    salary from employee;
    
-- (5) trim(문자열) : 앞, 뒤 공백제거
select trim('       대한민국') as t1, 
	trim('       대한민국        ') as t2, 
	trim('       대한     민국') as t3,
    trim('대한민국            ') as t4 from dual;

-- (6) format(문자열, 소수점자리) : 문자열 포멧 - 3자리 , 로 구분
select format(12345, 0) as format1, format('123456', 0) as format2 from dual;

-- 사번, 사원명, 입사일, 폰번호, 급여, 보너스(급여의 20%) 조회
-- 급여, 보너스는 소수점 없이 3자리 콤마로 구분
-- 급여가 null인 경우에는 기본값 0
-- 2016년부터 2017년 사이에 입사한 사원
-- 사번 기준으로 내림차순
select emp_id,
	emp_name,
    hire_date,
    phone,
    concat(ifnull(format(salary, 0), 0), ' 원') as salary,
    concat(format(salary*0.2, 0), ' 원') as bonus
    from employee
    where left(hire_date, 4) between '2016' and '2017'
    order by emp_id desc;

-- [날짜 함수]
-- curdate() : 년-월-일 형식 : 현재 날짜를 출력함
-- sysdate(), now() : 년-월-일-시:분:초
select curdate() as today, sysdate() as today2, now() as now from dual;

-- [형변환 함수]
-- cast(변환값 as 데이터타입)
-- convert(변환값 as 데이터타입) : 오래된 버전
select 123 as number, cast(123 as char) as char1 from dual;
select '1234' as str, cast('1234' as signed int) as number from dual;

select '20260421' as str, cast('20260421' as date) as date1 from dual;

-- now()
select now() as date1,
	cast(now() as char) as string,
	cast(cast(now() as char) as date) as dateTime1 from dual;
    
-- signed integer, unsigned integer, decimal
select '1234' as string,
	cast('1234' as signed integer) as cast_int1,
	cast('1234' as unsigned integer) as cast_int2,
	cast('1234' as decimal(10, 2)) as cast_decimal from dual;
    
-- [문자열 치환 함수]
-- replace(문자열, old, new)
select '홍-길-동' as old, replace('홍-길-동', '-', '/') from dual;

-- 사번, 사원명, 입사일, 퇴사일, 부서아이디, 폰번호, 급여
-- 입사일, 퇴사일 출력은 - 을 /로 치환
-- 재직중인 사원은 현재날짜를 출ㄹ겨
-- 급여 출력 시 3자리 콤마 구분
select emp_id, 
	emp_name,
    replace(hire_date, '-', '/'),
    replace(ifnull(retire_date, curdate()), '-', '/') as retire_date,
    dept_id,
    phone,
    format(salary, 0)
    from employee
    order by emp_id;
    
-- '20150101' 입력된 날짜를 기준으로 해당 날짜 이후에 입사한 사원들을 모두 조회
-- 모든 mysql 데이터베이스에서 적용 가능한 형태로 작성
select * from employee where hire_date > cast('20150101' as date);

-- '20150101'~'20171231' 입력된 날짜를 기준으로 해당 날짜 이후에 입사한 사원들을 모두 조회
-- 모든 mysql 데이터베이스에서 적용 가능한 형태로 작성
select * from employee where hire_date 
	between cast('20150101' as date) and cast('20171231' as date);
    
/***********************************************************************
	집계(그룹) 함수 : sum(), avg(), count(), min(), max()...
    group by - 그룹함수를 적용하기 위한 그루핑 컬럼 정의
    having - 그룹함수에서 사용하는 조건절
    ** 그룹함수는 그루핑이 가능한 컬럼에 적용하는 것이 좋다!!
***********************************************************************/
select * from employee;
-- (1) sum(숫자) : 전체 총합을 구하는 함수
-- 사원테이블의 총 급여
-- 2026-04-21 기준 급여가 null이면 1000으로 기본값 정의
select sum(salary) from employee; -- null 값의 경우는 제외가 되어 출력됨
-- 그룹함수를 적용할 때 null 값을 대체할 기본값을 정해두는 것이 좋다
select concat(format(sum(ifnull(salary, 1000)), 0), ' 만원') as '총 급여' from employee;

-- (2) avg(숫자) : 전체 평균을 구하는 함수
-- 사원들의 전체 급여 평균을 조회, 3자리씩 ','로 구분하고 앞에 '$', 소숫점 절삭
select concat('$ ', format(floor(avg(ifnull(salary, 0))), 0)) as '평균 급여' from employee;

-- 정보 시스템 ( SYS ) 부서 전체의 급여 총액과 평균을 조회
-- 3자리 구분, 마지막 '만원' 표시
select concat(format(sum(ifnull(salary, 0)), 0), ' 만원') as '급여 총액', 
	concat(format(avg(ifnull(salary, 0)), 0), ' 만원') as '급여 평균'
    from employee
	where dept_id = 'SYS';

-- (3) max(숫자) : 최댓값을 구하는 함수
--  사원테이블에서 가장 높은 급여를 받는 사원 조회
select format(max(salary), 0) as max_salary from employee;

-- (4) min(숫자) : 최솟값을 구하는 함수
--  사원테이블에서 가장 낮은 급여를 받는 사원 조회
select concat(format(min(salary), 0), ' 만원') as min_salary from employee;

-- 사원들의 총 급여, 평균급여, 최대급여, 최소급여를 조회
-- 3자리 구분, 화폐단위 '만원'
-- 현재 날짜 기준, 급여컬럼이 null인 경우에는 0으로 대체한다
select concat(format(sum(ifnull(salary, 0)), 0), '만원') '총 급여',
		concat(format(floor(avg(ifnull(salary, 0))), 0), '만원') '평균 급여',
        concat(format(max(salary), 0), '만원') '최대급여',
		concat(format(min(salary), 0), '만원') '최소급여'
        from employee;

-- (5) count(컬럼명) : raw의 숫자를 세는 함수
-- 컬럼의 값이 숫자가 아니여도 count()함수를 사용할 수 있다 : 유무를 세는 함수이기 때문
-- null은 제외된다
-- 사원 테이블의 전체 로우 수
select count(*) from employee; -- 20개
select count(salary) from employee; -- 19개 : 하나가 null이기 때문
select count(emp_id) from employee;
select count(eng_name) from employee;

-- 재직 사원 수
select concat(count(*), ' 명') '재직자' from employee where retire_date is null;
select concat(count(*)-count(retire_date), ' 명') '재직자' from employee;
-- 퇴사 사원 수
select concat(count(*), ' 명') '퇴사자' from employee where retire_date is not null;

select concat(count(*)-count(retire_date), '명') '재직자',
	concat(count(retire_date), '명') '퇴사자' from employee;

-- '2015'년에 입사한 사원 수를 조회
select count(*) from employee where left(hire_date, 4) = '2015';
-- 정보시스템(SYS) 부서의 사원 수 조회
select count(*) from employee where dept_id = "SYS";
-- 가장 빠른 입사자와 가장 늦은 입사자의 입사일을 조회
select max(hire_date) '가장 늦은 입사자' from employee;
select min(hire_date) '가장 빠른 입사자' from employee;

-- 가장 빠른 입사자의 정보를 조회
select * from employee where hire_date = '2013-01-01';
select * from employee where hire_date = (select min(hire_date) from employee); -- sub Query

-- [group by] : 성별, 날짜별, 부서별 등
-- 그룹함수와 일반컬럼은 함께 사용이 불가하다
select count(salary), salary from employee; -- 에러 발생
-- 사용하기 위해서는 일반컬럼을 group by로 그루핑 진행
-- 단, 이때 사용하는 group by 대상인 일반컬럼은 그루핑이 가능해야 함
select count(salary), salary from employee group by salary;

-- 부서별 사원수, 총급여, 평균급여를 조회
-- null 값은 0으로 치환
select dept_id, 
	count(*) '사원 수', 
    format(sum(ifnull(salary, 0)), 0) '부서별 총 급여', 
    format(floor(avg(ifnull(salary, 0))), 0) '부서별 평균 급여',
	format(max(ifnull(salary, 0)), 0) '부서별 최대 급여', 
    format(min(ifnull(salary, 0)), 0) '부서별 최소 급여'
	from employee
    group by dept_id order by dept_id asc;
    
-- 연도별, 사원수, 총급여, 평균급여, 최대 최소 급여 조회
-- 소숫점 없음, 3자리 구분
select left(hire_date, 4) 연도별, 
	count(*) 직원수,
    format(sum(ifnull(salary, 0)), 0) '총 급여',
    format(truncate(avg(ifnull(salary, 0)), 0), 0) '평균 급여',
    format(max(ifnull(salary, 0)), 0) '최대 급여',
    format(min(ifnull(salary, 0)), 0) '최소 급여'
    from employee
    group by 연도별
    order by 연도별 asc;

-- [having 조건절] : 그룹함수 또는 group by 결과에 대한 조건을 정의할 때 사용
-- 부서별 총 급여 조회
-- 총 급여가 30000 이상인 부서만 조회
select dept_id, sum(ifnull(salary, 0)) as '총 급여'
	from employee 
	group by dept_id
    having sum(ifnull(salary, 0)) >= 30000;
    
-- 연도별, 사원수, 총급여, 평균급여, 최대급여, 최소급여 조회
-- 소숫점 X 3자리 구분
-- 총 급여가 3만 이상인 년도 출력
-- 급여 협상이 안된 사원은 제외
select left(hire_date, 4) '연도별',
	count(*) '사원수',
    format(sum(ifnull(salary, 0)), 0) '총급여',
    format(truncate(avg(ifnull(salary, 0)), 0), 0) '평균급여',
    format(max(salary), 0) '최대급여',
    format(min(salary), 0) '최소급여'
    from employee
    where salary is not null
    group by left(hire_date, 4)
    having sum(salary) >= 30000;
-- format(sum(salary), 0)의 format은 안에 들어가는 내용이 문자열이기 때문에 비교연산자로 계산할 수 없다

-- [rollup 함수]
-- 리포팅을 위한 함수
-- 부서별 사원 수 총 급여, 평균 급여 조회
select dept_id 부서, count(*) 직원수,
	sum(salary) 급여합계,
    avg(salary) 급여평균
	from employee 
    group by dept_id with rollup;
    
-- rollup한 부서 아이디를 추가
select if(grouping(dept_id), '총합계', ifnull(dept_id, '-')) 부서, 
	count(*) 직원수,
	sum(salary) 급여합계,
    avg(salary) 급여평균
	from employee 
    group by dept_id with rollup;
-- if(grouping(컬럼명), 'rollup 데이터 아이디', ifnull(컬럼명, '대체문자'))

-- 연도별, 사원수, 총급여, 평균급여, 최대급여, 최소급여 조회, rollup 함수 적용
-- grouping 함수 안에는 함수를 정의할 수 없음
select if(grouping(year), '총합계', ifnull(year, '-')) as '연도별',
	count(*) '사원수',
    format(sum(salary), 0) '총급여',
    format(truncate(avg(salary), 0), 0) '평균급여',
    format(max(salary), 0) '최대급여',
    format(min(salary), 0) '최소급여'
    from employee, (select emp_id, left(hire_date, 4) year
		from employee) T1
    where employee.emp_id = T1.emp_id and salary is not null
    group by year with rollup;


select * 
	from employee, 
    (select emp_id, left(hire_date, 4) as year from employee) T1
	where employee.emp_id = T1.emp_id;
    
-- [limit 함수] : 출력갯수를 제한하여 조회
-- 오라클의 rownum 함수와 동일

-- 전체  사원리스트 중 상위 5개만 출력
select * from employee limit 5;

-- 최대 급여를 받는 사원을 순서대로 3명 조회
select * from employee order by salary desc limit 3;


/**************************************************************
	조인(JOIN) : 두 개 이상의 테이블을 연동하여 하나의 데이터셋 구성
    ERD : Entit Relationship Diagram - 데이터베이스 설계도(구조도)
    
    ** ANSI-SQL : 데이터베이스 시스템들의 표준 SQL **
    ** JOIN 종류 **
    (1) CROSS JOIN(CATEISIAN :: 카테이션) - 합집합
		: 테이블의 데이터 전체를 JOIN
        ex) 테이블1(10개) * 테이블2(10개) = 100개 : 연관관계가 없을 때
        - 성능이 떨어지기 때문에 권장되지 않음
        - 데이터셋을 크게하여 테스트를 진행하는 경우에나 사용됨
	(2) INNER JOIN(EQUI) - 교집합
		: 두 개 이상의 테이블들이 조인 연결고리를 통해 조인 실행
	(3) OUTER JOIN - INNER JOIN + 조인에서 제외한 ROW 포함
		LEFT OUTER JOIN - 왼쪽의 테이블의 ROW 포함
        RIGHT OUTER JOIN - 오른쪽의 테이블의 ROW 포함
	(4) SELF JOIN - 한(자신) 테이블을 두 개(자신, 사본)의 테이블처럼 JOIN
**************************************************************/
-- CROSS JOIN
-- 형식1 NCSQL > SELECT [컬럼리스트]
-- 			FROM [테이블1] CROSS JOIN [테이블2]
-- 			WHERE [조건절]
-- 형식2 ORACLE > SELECT [컬럼리스트]
-- 			FROM [테이블1], [테이블2]
-- 			WHERE [조건절]

-- employee , department cross join
select count(*) from employee;
select count(*) from department;
select count(*) from unit;

select count(*) from employee cross join department;
select count(*) from employee, department;
select count(*) from employee cross join department cross join unit;
select count(*) from employee, department, unit;
select distinct * from employee, department, unit;
-- 컬럼의 순서대로 데이터가 출력됨

-- 사원, 휴가, 부서 테이블 corss join
select count(*) from employee cross join vacation cross join department;
select count(*) from employee, vacation, department;

-- [INNER JOIN (EQUI JOIN)]
-- 형식 > SELECT [컬럼리스트]
-- 		from [테이블1] inner join [테이블2]
			-- ON [테이블1.조인컬럼] = [테이블2.조인컬럼) 
            -- [INNER JOIN (EQUI JOIN)]
-- 형식 > SELECT [컬럼리스트]
-- 		from [테이블1], [테이블2]
			-- WHERE [테이블1.조인컬럼] = [테이블2.조인컬럼) 
select count(*) from employee inner join department
	on employee.dept_id = department.dept_id;
    
select count(*) from employee, department
	where employee.dept_id = department.dept_id;

-- 사원 테이블, 부서 테이블, 본부테이블 inner join
select *
	from employee e inner join department d
		on e.dept_id = d.dept_id
        inner join unit u
        on d.unit_id = u.unit_id;

select * from employee e, department d, unit u
			where e.dept_id = d.dept_id
            and d.unit_id = u.unit_id;
	
-- 모든 사원들의 사원번호, 사원명, 부서아이디, 부서명, 입사일, 급여를 조회
-- 조인연결키의 컬럼 중 어느 컬럼으로 출력할 것인지를 정의해주면 오류 없이 정상 출력된다
select emp_id, emp_name, employee.dept_id, dept_name, hire_date, salary
	from employee, department
    where employee.dept_id = department.dept_id;
    
select emp_id, emp_name, employee.dept_id, dept_name, hire_date, salary
	from employee inner join department on employee.dept_id = department.dept_id;

-- 영업부에 속한 사원들의 사원명, 입사일, 퇴사일, 급여, 부서아이디, 부서명 조회
-- 재직중인 사원은 현재날짜 출력
select emp_name, hire_date, ifnull(retire_date, curdate()) as retire_date, 
	salary, d.dept_id, dept_name
	from employee e inner join department d on e.dept_id = d.dept_id
    where d.dept_name = '영업';

select emp_name, hire_date, ifnull(retire_date, '재직중') as retire_date,
	salary, d.dept_id, dept_name
	from employee e, department d
    where e.dept_id = d.dept_id and d.dept_name = '영업';
    
-- 2015년 입사자들의 사번, 사원명, 입사일, 부서명, 본부아이디, 본부명을 조회
select e.emp_id, e.emp_name, e.hire_date, d.dept_name, u.unit_id, u.unit_name
	from employee e, department d, unit u
    where e.dept_id = d.dept_id and d.unit_id = u.unit_id
		and left(e.hire_date, 4) = '2015';

select e.emp_id, e.emp_name, e.hire_date, d.dept_name, u.unit_id, u.unit_name
	from employee e inner join department d on e.dept_id = d.dept_id
    inner join unit u on d.unit_id = u.unit_id
    where left(e.hire_date, 4) = '2015';

show databases;
use hrdb2019;
select database();
show tables;

-- 인사과에 속한 사원들 중에 휴가를 사용한 사원의 내역 조회
-- 부서명은 '인사'
select * 
	from employee e, department d, vacation v
    where e.emp_id = v.emp_id and e.dept_id = d.dept_id
    and begin_date is not null and dept_name = '인사'
    order by vacation_id asc;

select *
	from employee e inner join vacation v on e.emp_id = v.emp_id
    inner join department d on e.dept_id = d.dept_id
    where begin_date is not null
    and dept_name = '인사'
    order by vacation_id asc;

-- 사원별 휴가사용 일수를 조회, 사원 아이디, 사원명, 휴가일수 출력
-- 사용일수 기준 내림차순 정렬, 상위 5명 출력
select * from vacation;
select e.emp_id, 
		e.emp_name, 
        count(*) as count
	from employee e, vacation v
    where e.emp_id = v.emp_id
    group by e.emp_id
    order by count desc
    limit 5;

select e.emp_id, e.emp_name, count(*) as count
	from employee e inner join vacation v on e.emp_id = v.emp_id
    group by e.emp_id
    order by count desc
    limit 5;

-- 영업부서 사원의 사원명, 폰번호, 부서명, 휴가사용 이유, 소속본부 조회
-- 휴가 사용 이유가 '두통'인 사원, 소속본부 조회
select e.emp_name, e.phone, d.dept_name, v.reason, u.unit_name
	from employee e, department d, unit u, vacation v
    where e.dept_id = d.dept_id and d.unit_id = u.unit_id and e.emp_id = v.emp_id
    and d.dept_name = '영업'
    and v.reason = '두통';

select e.emp_name, e.phone, d.dept_name, v.reason, u.unit_name
	from employee e 
    inner join department d on e.dept_id = d.dept_id
    inner join unit u on d.unit_id = u.unit_id
    inner join vacation v on e.emp_id = v.emp_id
    where d.dept_name = '영업'
    and v.reason = '두통';

-- 2014년부터 2016년까지 입사한 사원들 중에서 퇴사하지 않은 사원들의
-- 사원아이디, 사원명, 부서명, 입사일, 소속본부를 조회
-- 소속본부 기준으로 오름차순 정렬
select e.emp_id, e.emp_name, d.dept_name, e.hire_date, u.unit_name
	from employee e, department d, unit u
    where e.dept_id = d.dept_id
    and d.unit_id = u.unit_id
    and left(e.hire_date, 4) between '2014' and '2016'
    and e.retire_date is null
    order by u.unit_name;

select e.emp_id, e.emp_name, d.dept_name, e.hire_date, u.unit_name
	from employee e inner join department d on e.dept_id = d.dept_id
    inner join unit u on d.unit_id = u.unit_id
    where left(e.hire_date, 4) between '2014' and '2016'
    and e.retire_date is null
    order by u.unit_name;

-- 부서별 총급여, 평균급여, 총 휴가 사용일수 조회
-- 부서명, 부서아이디, 총급여, 평균급여, 휴가 사용일수
-- vacation과 department 사이의 employee를 inner join 하여 연결한다
select dept_name '부서명', 
		d.dept_id '부서아이디',
        concat(format(sum(e.salary), 0), '만원') as '총 급여',
        concat(format(truncate(avg(e.salary), 2), 0), '만원') as '평균 급여',
        count(*) as '휴가 사용일수'
        from employee e, department d, vacation v
        where e.dept_id = d.dept_id
        and e.emp_id = v.emp_id
        group by d.dept_id;

select dept_name '부서명',
		d.dept_id '부서아이디',
        concat(format(sum(e.salary), 0), '만원') as '총 급여',
        concat(format(truncate(avg(e.salary), 2), 0), '만원') as '평균 급여',
        count(*) as '휴가 사용일수'
        from employee e inner join department d on e.dept_id = d.dept_id
        inner join vacation v on e.emp_id = v.emp_id
        group by d.dept_id;

-- 본부별로 그룹핑 한 후 부서의 휴가사용 일수를 조회
select 	u.unit_id,
		u.unit_name,
		sum(v.duration)
	from employee e, department d, unit u, vacation v
    where e.dept_id = d.dept_id
    and d.unit_id = u.unit_id
    and e.emp_id = v.emp_id
    group by u.unit_id;

-- [OUTER JOIN]
-- ORACLE > INNER JOIN(EQUI JOIN) 문법에 (+)코드를 추가하여 사용함 - MySQL 사용 불가
-- 형식> SELECT [컬럼리스트]
-- 		FROM [테이블1] LEFT/RIGHT OUTER JOIN [테이블2]
-- 					ON [테이블1.조인컬럼] = [테이블2.조인컬럼]

select count(distinct dept_id) from employee; -- 6 : 사원이 없는 부서는 null 값으로 제외되어 있음
select count(dept_id) from department; -- 7

select unit_id, start_date, dept_name, dept_id
	from department
    order by dept_id;
    
select emp_id, emp_name, salary, dept_id
	from employee
    order by dept_id;

select e.dept_id
	from employee e, department d
	where e.dept_id = d.dept_id; -- ADV 부서는 사원데이터가 없어
    
-- 부서별 사원 수 조회
select distinct d.dept_id,
	d.dept_name,
	count(*)
	from employee e, department d
    where e.dept_id = d.dept_id
    group by d.dept_id;

-- LEFT OUTER JOIN : LEFT에 부서테이블 위치
-- 부서별 사원 수 조회, 전체 부서 출력
select d.dept_id,
		d.dept_name,
		count(emp_id) as 사원수
	from department d left outer join employee e
		on d.dept_id = e.dept_id
	group by d.dept_id;
    
-- RIGHT OUTER JOIN : RIGHT에 부서 테이블 위치
select d.dept_id,
		d.dept_name,
		count(emp_id) as 사원수
	from employee e right outer join department d
		on d.dept_id = e.dept_id
	group by d.dept_id;


-- 모든 부서의 아이디, 부서명, 본부명을 조회
-- unit_id가 없는 부서도 포함
-- 본부에 속하지 않은 부서는 '준비중'으로 출력
select * from department;
select dept_id, dept_name, ifnull(unit_name, '준비중') as unit_name
	from department d left outer join unit u
    on d.unit_id = u.unit_id;

-- 본부별, 부서의 휴가 사용일수를 조회
-- 부서의 누락없이 모두 출력
select ifnull(u.unit_id, '-') as '본부',
		d.dept_id as '부서명',
        concat(sum(ifnull(v.duration, 0)), '일') as '휴가 사용일수'
        from employee e right outer join department d on e.dept_id = d.dept_id
        left outer join unit u on d.unit_id = u.unit_id
        left outer join vacation v on e.emp_id = v.emp_id
        group by u.unit_id, d.dept_id
        order by sum(ifnull(v.duration, 0)) desc;
        
-- 2017 ~ 2018까지의 입사한 사원들의 사원명, 입사일, 연봉, 부서명, 본부명 조회
-- 단, 퇴사한 사원들 제외
-- 소속본부를 모두 조회
-- explain analyze
select e.emp_name as 사원명, e.hire_date as 입사일, 
	concat(format(ifnull(e.salary, 0), 0), '만원') as 연봉, 
    ifnull(d.dept_name, '준비중') as 부서명, 
    ifnull(u.unit_name, '준비중') as 본부명
	from employee e right outer join department d on e.dept_id = d.dept_id
    left outer join unit u on d.unit_id = u.unit_id
    where left(e.hire_date, 4) between '2017' and '2018'
    and e.retire_date is null;

-- 서브 쿼리 이용하는 경우
select e.emp_name as 사원명, e.hire_date as 입사일, 
	concat(format(ifnull(e.salary, 0), 0), '만원') as 연봉, 
    ifnull(d.dept_name, '준비중') as 부서명, 
    ifnull(u.unit_name, '준비중') as 본부명
	from (select emp_name, hire_date, salary from employee where retire_date is null) e 
    right outer join department d on e.dept_id = d.dept_id
    left outer join unit u on d.unit_id = u.unit_id
    where left(e.hire_date, 4) between '2017' and '2018';

-- select emp_name, hire_date, salary from employee where retire_date is null

-- [SELF JOIN] 자신의 테이블로 조인
-- 셀프조인은 서브쿼리 형식으로 변환하여 사용됨!
-- 형식1 > SELECT [컬럼리스트]
-- 		FROM [테이블원본], [테이블사본] -- 사본은 별칭을 사용해야 함
-- 		WHERE [테이블원본.조인컬럼] = [테이블사본.조인컬럼]
-- 형식2 > SELECT [컬럼리스트]
-- 		FROM [테이블원본] LEFT / RIGHT JOIN [테이블사본] -- 사본은 별칭을 사용해야 함
-- 		ON [테이블원본.조인컬럼] = [테이블사본.조인컬럼]
select * from employee e1, employee e2
		where e1.emp_id = e2.emp_id;

select *
	from employee e1 left join employee e2 on e1.emp_id = e2.emp_id;

/**************************************************************
	서브쿼리(SubQuery) : 메인 쿼리에 다른 쿼리를 추가하여 실행하는 방식
    (쿼리작성) 괄호 안에 쿼리를 작성하여 메인 쿼리에 추가
    형식 > SELECT [컬럼리스트 추가 -> (스칼라 서브쿼리)] -> 스칼라 서브쿼리는 ORACLE에서 더 이상 지원하지 않음
			FROM [테이블명 추가 -> (인라인 뷰)]
            WHERE [조건절 -> (서브쿼리)]
	단일행 서브쿼리
    다중행 서브쿼리
**************************************************************/
-- [서브쿼리]
-- '정보시스템' 부서의 사원들의 사번, 사원명, 입사일, 부서아이디, 급여 조회
select emp_id, emp_name, hire_date, dept_id, salary from employee
	where dept_id = (select dept_id from department where dept_name = '정보시스템');
-- select dept_id from department where dept_name = '정보시스템';

select e.emp_id, e.emp_name, hire_date, d.dept_id, salary from employee e, department d
	where e.dept_id = d.dept_id and d.dept_name = '정보시스템';

-- 조건절로 들어가는 서브쿼리가 하나의 로우 (단일행)으로 출력되는 쿼리를 단일행 서브쿼리라 칭한다
-- 단일형은 '='로 비교한다
select dept_id from department where dept_name = '정보시스템';

-- 실행하고자 하는 서브쿼리를 먼저 실행해보아야 함

-- 홍길동 사원이 속한 부서아이디, 부서명, 부서 업무 시작일을 조회
-- 우선 서브쿼리 작성
select dept_id from employee where emp_name = '홍길동';

select dept_id, dept_name, start_date
	from department
	where dept_id = (select dept_id from employee where emp_name = '홍길동');

-- 홍길동 사원의 휴가 사용 내역을 조회
select emp_id from employee where emp_name = '홍길동';

select vacation_id,
		emp_id,
        (select emp_name from employee where emp_name = '홍길동') as emp_name, -- 스칼라 서브쿼리 / 권장X
        begin_date,
        end_date,
        reason,
        duration
		from vacation where emp_id = (select emp_id from employee where emp_name = '홍길동');

-- [서브쿼리 형태]
-- '제3본부'에 속한 모든 부서를 조회
select unit_id from unit where unit_name = '제3본부';
select dept_name from department
	where unit_id = (select unit_id from unit where unit_name = '제3본부');

-- 그룹함수와 사용할 때의 시너지가 좋다
-- 사원 중 최고 연봉을 받는 사원의 정보를 조회
select max(salary) from employee;
select * from employee where salary = (select max(salary) from employee);

-- 최근에 입사한 사원의 정보를 조회
select max(hire_date) from employee;
select * from employee where hire_date = (select max(hire_date) from employee);

-- 가장 먼저 퇴사한 사람의 정보
select min(retire_date) from employee;
select * from employee where retire_date = (select min(retire_date) from employee);





































































