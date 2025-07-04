Use master 
go
drop database if exists secondhand
go
create database secondhand collate Croatian_CI_AS;
go

use secondhand

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






