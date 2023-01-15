FROM ubuntu:focal

RUN apt update 

# &&  apt-get -y install sudo

# RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo
# USER docker


RUN apt install -y nodejs
RUN apt install -y npm
RUN npm -g install n
RUN apt install -y wget
RUN n 18
COPY . /p5js_sketching
RUN cd /p5js_sketching && npm install
RUN cd /p5js_sketching && make check-format
RUN cd /p5js_sketching && make build

