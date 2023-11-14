#!/bin/bash

cd common
npm run lint
cd ..
cd backend
npm run lint
cd ..
cd frontend
npm run lint
