drop table if exists personnels, profiles;
create table personnels (
  personnel_id serial primary key,
  name text not null,
  position text,
  status text
);


insert into personnels (name, position, status) values ('Brown', 'CPT', 'yes'), ('Reyes', 'SPC', 'yes'), ('Reyes', 'SSG', 'yes'), ('Mcgee', 'SGT', 'yes'), ('Coleman', 'PFC', 'yes'), ('Howell', 'PV2', 'no'), ('Dominguez', 'SFC', 'yes'), ('Cobb', 'PFC', 'no');

