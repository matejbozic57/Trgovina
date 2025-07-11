/*Use master 
go
drop database if exists secondhand
go
create database secondhand collate Croatian_CI_AS;
go

use secondhand
*/

ALTER DATABASE db_abb4f6_wp8_admin SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_abb4f6_wp8_admin COLLATE Latin1_General_100_CI_AI_SC_UTF8;
GO
ALTER DATABASE db_abb4f6_wp8_admin SET MULTI_USER;
GO

create table odjece(
sifra int not null primary key identity  (1,1),
cijena decimal (18,2) not null,
velicina varchar (50) not null,
opis varchar (50) not null,
naziv varchar (50) not null,
stanje varchar (50) not null,
);

create table kupci(
sifra int not null primary key identity  (1,1),
ime varchar (50) not null,
prezime varchar (50) not null,
mail varchar (50) null,
telefon varchar (8) null ,
);

create table prodaje(
sifra int not null primary key identity (1,1),
datumprodaje datetime ,
kupac int not null references kupci (sifra),
);

create table stavke (
sifra int not null primary key identity (1,1),
kolicina varchar (50) not null,
odjeca int not null references odjece (sifra),
prodaja int not null references prodaje (sifra),
);

select * from odjece

insert into odjece (naziv, opis, velicina, cijena, stanje)

values ('majica', 'bijela', 'M', '20', 'novo');

insert into odjece (naziv, opis, velicina, cijena, stanje)

values ('traperice zenske', 'plave', 'M', '40', 'koristeno');

insert into odjece (naziv, opis, velicina, cijena, stanje)

values ('kosulja muska', 'crna', 'M', '55', 'novo');

insert into odjece (naziv, opis, velicina, cijena, stanje)

values ('zenski sat', 'zlatni', 'custom', '85', 'novo');





