## Angular UI for kakuzei.com website ![build](https://github.com/kakuzei/angular.kakuzei.com/workflows/build/badge.svg)

### Introduction

angular.kakuzei.com provides a UI for browsing pictures.

### Requirements

* Node 12 with npm

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
