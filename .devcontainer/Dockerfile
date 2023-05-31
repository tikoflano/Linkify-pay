FROM node:20-slim

ENV NG_CLI_ANALYTICS="false"

RUN apt update && apt install -y git
RUN yarn global add @angular/cli

RUN SHELL="/bin/bash" ng completion
RUN ng config -g cli.packageManager yarn
