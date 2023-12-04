#!/bin/bash

cd common
npm run pretty
cd ..
cd backend
npm run pretty
cd ..
cd frontend
npm run pretty
cd ..
cd common
npm run lint
cd ..
cd backend
npm run lint
cd ..
cd frontend
npm run lint