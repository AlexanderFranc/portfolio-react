@echo off
cd /d "%~dp0"
set NODE_EXE=
for /f "delims=" %%P in ('where node 2^>nul') do set "NODE_EXE=%%P"
if not defined NODE_EXE if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" set "NODE_EXE=%LOCALAPPDATA%\Programs\nodejs\node.exe"
if not defined NODE_EXE if exist "%ProgramFiles%\nodejs\node.exe" set "NODE_EXE=%ProgramFiles%\nodejs\node.exe"
if not defined NODE_EXE (
  start "" "%~dp0index.html"
  exit /b 0
)
start "" /min "%NODE_EXE%" "%~dp0server.js"
timeout /t 2 /nobreak >nul
start "" "http://localhost:5052/"
