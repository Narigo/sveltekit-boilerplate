#!/bin/bash

open -a XQuartz

IP=$(ipconfig getifaddr en0)
/usr/X11/bin/xhost + $IP

DISPLAY=${IP}:0 docker compose -f docker-compose.yml -f integration/docker-compose.playwright.yml run --service-ports app
