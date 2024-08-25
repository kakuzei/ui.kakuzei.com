## UI for kakuzei.com website using the Angular framework ![build](https://github.com/kakuzei/angular.kakuzei.com/workflows/CI%20Pipeline/badge.svg)

### Introduction

ui.kakuzei.com provides a UI for browsing pictures.

### Requirements

* Node 20 with npm

### Docker

##### Build the image

Build a docker image by executing the following command:

```bash
docker build -t kakuzei/ui.kakuzei.com .
```

##### Start the container

Start the UI by executing the following command:

```bash
docker run -d -p 80:80 -p 443:433 kakuzei/ui.kakuzei.com
```

### License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
