## Angular UI for kakuzei.com website [![Build Status](https://travis-ci.org/kakuzei/angular.kakuzei.com.svg?branch=master)](https://travis-ci.org/kakuzei/angular.kakuzei.com) 

### Introduction

angular.kakuzei.com provides a UI for browsing pictures.

### Requirements

* Node 8 with npm

### Docker

##### Build the image

Build a docker image by executing the following command:

```bash
docker build -t kakuzei.com/angular .
```

##### Start the container

Start the UI by executing the following command:

```bash
docker run -d -p 80:80 443:433 kakuzei.com/angular
```

### License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
