/************************************************************
	학적과 수강신청 실습 데이터베이스
************************************************************/
-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS `enroll2026`;
show databases;
use enroll2026;
select database();
show tables;

-- 강사 : INSTRUCTOR 테이블 생성
create table instructor (
	instructor_no		int				primary key,
    instructor_name		varchar(3)		not null,
    age					int 			not null,
    gender				char(1)			not null
);
show tables;

-- 과목 SUBJECT 테이블 생성
create table subject (
	subject_no			int				primary key,
    subject_name		varchar(15)		not null,
    class_room			varchar(5)		not null,
    instructor_no		int				not null
    -- table 생성과 동시에 제약사항을 부여할 경우
    -- constraint fk_subject_instructor_no foreign key(instructor_no) references instructor(instructor_no) on delete / update cascade;
    
    -- class_room null 허용으로 변경
);

-- 학생 STUDENT 테이블 생성
create table student (
	student_id 			int				primary key, -- auto_increment로 진행했어도 좋았을 것.
    student_name		varchar(3)		not null,
    address				varchar(8)		not null
);

-- 수업시간 CLASS_TIME 테이블 생성
create table class_time (
	time_id 			int				primary key,
    subject_no			int				not null,
    class_time			varchar(10)		not null
    -- class_time not null 에서 null 허용으로 변경 진행 완료
);

-- 수강신청 ENROLLMENT 테이블 생성
create table enrollment (
	student_id			int,
    subject_no			int,
	grade				char(1)
);

show tables;

-- foreign key 연결
-- (1) subject
alter table subject add constraint fk_subject_instructor foreign key(instructor_no) references instructor(instructor_no)
	on delete cascade on update cascade;
select * from information_schema.table_constraints where table_name = 'subject';

-- (2) class_time
desc class_time;
alter table class_time add constraint fk_class_time foreign key(subject_no) references subject(subject_no)
	on delete cascade on update cascade;
select * from information_schema.table_constraints where table_name = 'class_time';

-- (3) enrollment
alter table enrollment add constraint fk_enrollment_student_id foreign key(student_id) references student(student_id)
	on delete cascade on update cascade;
alter table enrollment add constraint fk_enrollment_subject_no foreign key(subject_no) references subject(subject_no)
	on delete cascade on update cascade;

select * from information_schema.table_constraints where table_name = 'instructor';
select * from information_schema.table_constraints where table_name = 'subject';
select * from information_schema.table_constraints where table_name = 'student';
select * from information_schema.table_constraints where table_name = 'class_time';
select * from information_schema.table_constraints where table_name = 'enrollment';

desc instructor;
select * from instructor;

desc student;
select * from student;

desc enrollment;
select * from enrollment;

desc subject;
select * from subject;

desc class_time;
select * from class_time;

-- 강사 테이블 데이터 입력
desc instructor;
select * from instructor;
alter table instructor modify column instructor_name varchar(10) not null;

insert into instructor(instructor_no, instructor_name, age, gender)
		values('1', '홍길동', '30', 'M');
insert into instructor(instructor_no, instructor_name, age, gender)
		values('2', '김영희', '30', 'F');
insert into instructor(instructor_no, instructor_name, age, gender)
		values('3', 'Anne', '25', 'F');

select * from instructor;


-- 학생 테이블 데이터 입력
-- 학생 테이븡릐 address 컬럼에 디폴트 제약 추가 : '서울시 강남구'
alter table student modify column address varchar(30) default '서울시 강남구';
desc student;

insert into student(student_id, student_name)
		values('1', '정효리');
insert into student(student_id, student_name)
		values('2', '안경태');
insert into student(student_id, student_name)
		values('3', '오감자');
insert into student(student_id, student_name)
		values('4', '정주교');
insert into student(student_id, student_name)
		values('5', '고소해');

select * from student;


-- 과목 테이블 데이터 입력
desc subject;

insert into subject(subject_no, subject_name, class_room, instructor_no)
		values('1', 'MySQL', '101호', 1);
insert into subject(subject_no, subject_name, class_room, instructor_no)
		values('2', 'HTML', '103호', 2);
insert into subject(subject_no, subject_name, class_room, instructor_no)
		values('3', 'Oracle', '201호', 1);
insert into subject(subject_no, subject_name, class_room, instructor_no)
		values('4', 'React', '301호', 3);
insert into subject(subject_no, subject_name, class_room, instructor_no)
		values('5', 'NodeJS', '303호', 3);

select * from subject;


-- 강의시간 테이블 데이터 입력
desc class_time;
insert into class_time(time_id, subject_no, class_time) values('1', 1, '120분');
insert into class_time(time_id, subject_no, class_time) values('2', 2, '160분');
insert into class_time(time_id, subject_no, class_time) values('3', 3, '200분');
insert into class_time(time_id, subject_no, class_time) values('4', 4, '120분');
insert into class_time(time_id, subject_no, class_time) values('5', 5, '100분');
	
select * from class_time;

-- 등록 데이터 입력
desc enrollment;
insert into enrollment(student_id, subject_no, grade) values(1, 1, 'A');
insert into enrollment(student_id, subject_no, grade) values(1, 2, 'B');
insert into enrollment(student_id, subject_no, grade) values(1, 3, 'C');
insert into enrollment(student_id, subject_no, grade) values(2, 1, 'B');
insert into enrollment(student_id, subject_no, grade) values(2, 2, 'C');
insert into enrollment(student_id, subject_no, grade) values(2, 3, 'C');
insert into enrollment(student_id, subject_no, grade) values(3, 1, 'A');
insert into enrollment(student_id, subject_no, grade) values(3, 2, 'A');
insert into enrollment(student_id, subject_no, grade) values(3, 3, 'D');

select * from enrollment;


-- A학점을 받은 학생의 정보를 조회
select s.student_name '학생명', s.address '주소', e.grade '학점'
		from student s, enrollment e
			where s.student_id = e.student_id and e.grade = 'A';

select s.student_name '학생명', s.address '주소', e.grade '학점'
		from student s inner join enrollment e on s.student_id = e.student_id where e.grade = 'A';

-- C학점을 받은 학생의 정보와 과목명을 조회
select st.student_name '학생명', st.address '주소', sb.subject_name '과목명', e.grade '학점'
		from student st, enrollment e, subject sb
			where st.student_id = e.student_id and sb.subject_no = e.subject_no
				and e.grade = 'C';

select st.student_name '학생명', st.address '주소', sb.subject_name '과목명', e.grade '학점'
		from student st inner join enrollment e on st.student_id = e.student_id
				inner join subject sb on sb.subject_no = e.subject_no where e.grade = 'C';

-- 100분 강의하는 과목정보와 강사정보를 조회
desc class_time;
desc subject;
select sb.subject_no, sb.subject_name, i.instructor_no, i.instructor_name
		from class_time ct, subject sb, instructor i
			where ct.subject_no = sb.subject_no
				and sb.instructor_no = i.instructor_no
					and ct.class_time = '100분';

select sb.subject_no, sb.subject_name, i.instructor_no, i.instructor_name
		from class_time ct inner join subject sb on ct.subject_no = sb.subject_no
				inner join instructor i on sb.instructor_no = i.instructor_no
			where ct.class_time = '100분';


-- 100분 강의하는 강사정보, 과목명을 조회 => 서브쿼리 사용, 과목명 (스칼라 서브쿼리)

desc subject;
desc class_time;
-- (1) 100분 강의하는 과목 아이디를 출력하는 쿼리 작성
select subject_no from class_time where class_time = '100분'; -- 5

-- (2) 100분 강의하는 과목명을 불러오는 쿼리 작성
select subject_name from subject where subject_no = (select subject_no from class_time where class_time = '100분'); -- NodeJS

-- (3) (2)의 결과값의 과목명을 강의하는 강사의 번호를 출력하는 쿼리 작성
select instructor_no from subject where subject_name =
	(select subject_name from subject where subject_no = (select subject_no from class_time where class_time = '100분'));

-- (3) 100분 강의하는 강사정보, 과목명을 조회
select instructor_no, instructor_name, age, gender,
	(select subject_name from subject where subject_no = (select subject_no from class_time where class_time = '100분')) as subject_name
		from instructor
			where instructor_no = (select instructor_no from subject where subject_name =
	(select subject_name from subject where subject_no = (select subject_no from class_time where class_time = '100분')));



-- 김영희 강사가 강의하는 모든 과목 조회
select subject_no, subject_name 
	from subject 
		where instructor_no = (select instructor_no from instructor where instructor_name = '김영희');
        
        
-- 홍길동 강사가 강의하는 과목과 과목을 수강한 학생정보와 성적을 조회
desc instructor;
select i.instructor_name, sb.subject_no, sb.subject_name, st.student_name, st.address, e.grade
		from subject sb inner join enrollment e on sb.subject_no = e.subject_no
						inner join student st on e.student_id = st.student_id
                        inner join instructor i on sb.instructor_no = i.instructor_no
						where i.instructor_name = '홍길동';
-- 모든 강사가 강의하는 과목과 성적 조회 ( 모든 강사 포함)
desc enrollment;
desc instructor;
desc student;
select i.instructor_name, st.student_name, sb.subject_no, sb.subject_name, e.grade
		from instructor i inner join subject sb on i.instructor_no = sb.instructor_no
						inner join enrollment e on sb.subject_no = e.subject_no
                        inner join student st on st.student_id = e.student_id;

-- 모든 강사이기 때문에 outer join 진행
select i.instructor_name, ifnull(st.student_name, '-') as student_name, sb.subject_no, sb.subject_name, ifnull(e.grade, '-') as grade
		from instructor i left outer join subject sb on i.instructor_no = sb.instructor_no
				left outer join enrollment e on sb.subject_no = e.subject_no
                left outer join student st on st.student_id = e.student_id;









































