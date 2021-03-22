CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  description VARCHAR(80),
  price INTEGER,
  image_url TEXT
);

insert into product (name, description, price, image_url) values ('Hannah Comello', 'Nam dui.', 19, 'http://dummyimage.com/125x214.jpg/ff4444/ffffff');
insert into product (name, description, price, image_url) values ('Edita Stacey', 'Aenean sit amet justo.', 43, 'http://dummyimage.com/182x162.jpg/ff4444/ffffff');
insert into product (name, description, price, image_url) values ('Daryl Beswick', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 74, 'http://dummyimage.com/198x137.png/5fa2dd/ffffff');
insert into product (name, description, price, image_url) values ('Estele McKimmey', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 42, 'http://dummyimage.com/126x101.bmp/ff4444/ffffff');
insert into product (name, description, price, image_url) values ('Locke Di Francesco', 'Mauris ullamcorper purus sit amet nulla.', 81, 'http://dummyimage.com/146x140.jpg/ff4444/ffffff');
insert into product (name, description, price, image_url) values ('Kial Treadaway', 'Nam nulla.', 5, 'http://dummyimage.com/103x143.jpg/cc0000/ffffff');
insert into product (name, description, price, image_url) values ('Sela Vescovini', 'Donec semper sapien a libero.', 27, 'http://dummyimage.com/103x184.bmp/dddddd/000000');
insert into product (name, description, price, image_url) values ('Danice Thomlinson', 'Nulla ut erat id mauris vulputate elementum.', 88, 'http://dummyimage.com/156x184.png/cc0000/ffffff');
insert into product (name, description, price, image_url) values ('Allayne Denyer', 'Aliquam sit amet diam in magna bibendum imperdiet.', 92, 'http://dummyimage.com/189x185.jpg/5fa2dd/ffffff');
insert into product (name, description, price, image_url) values ('Casey Mucklow', 'In hac habitasse platea dictumst.', 66, 'http://dummyimage.com/173x186.bmp/cc0000/ffffff');