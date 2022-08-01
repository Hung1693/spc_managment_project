drop table if exists personnels, profiles;
create table personnels (
  personnel_id serial primary key,
  name text not null,
  position text,
  status text
);
create table profiles (
  profile_id serial primary key,
  personnel_id integer,
  description text,
  CONSTRAINT fk_personnel
   FOREIGN KEY(personnel_id) 
      REFERENCES personnels(personnel_id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

insert into personnels (name, position, status) values ('1', '1', 'yes'), ('2', '2', 'no'), ('3', '3', 'yes'), ('4', '4', 'no');
insert into profiles (persertonnel_id, description) values ('1', '1'), ('1', '1'), ('2','2');
