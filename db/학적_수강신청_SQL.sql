/************************************************************
	학적과 수강신청 실습 데이터베이스
************************************************************/
-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS `enroll2026`;
show databases;
use enroll2026;
select database();
show tables;

-- INSTRUCTOR 테이블 생성
create table instructor (
	instructor_no		int				primary key,
    instructor_name		varchar(3)		not null,
    age					int 			not null,
    gender				char(1)			not null
);
show tables;

create table subject (
	subject_no			int				primary key,
    subject_name		varchar(15)		not null,
    class_room			varchar(5)		not null,
    instructor_no		int				not null
);

create table student (
	student_id 			int				primary key,
    student_name		varchar(3)		not null,
    address				varchar(8)		not null
);

create table class_time (
	time_id 			int				primary key,
    subject_no			int				not null,
    class_time			varchar(10)		not null
);

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



































