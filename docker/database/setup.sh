#!/bin/bash
set -e
service mysql start
mysql < /app/init_database.sql
service mysql stop