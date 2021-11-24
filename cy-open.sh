#!/bin/bash

open -a XQuartz

IP=$(ipconfig getifaddr en0)
/usr/X11/bin/xhost + $IP

DISPLAY=${IP}:0 docker compose -f docker-compose.yml -f cypress/docker-compose.cy-open.yml up --exit-code-from cypress $@
