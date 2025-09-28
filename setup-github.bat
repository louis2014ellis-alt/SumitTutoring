@echo off
echo Setting up GitHub repository for Louis Ellis Tutoring Website
echo.

echo Please enter your GitHub username:
set /p GITHUB_USERNAME=

echo Please enter your repository name (default: louis-tutoring-website):
set /p REPO_NAME=louis-tutoring-website

if "%REPO_NAME%"=="" set REPO_NAME=louis-tutoring-website

echo.
echo Adding GitHub remote...
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo Setting main branch...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ✅ Repository setup complete!
echo.
echo Next steps:
echo 1. Go to https://dashboard.render.com
echo 2. Create a new Web Service
echo 3. Connect your GitHub repository
echo 4. Use these settings:
echo    - Build Command: npm install ^&^& npm run build
echo    - Start Command: npm start
echo.
echo See RENDER_DEPLOYMENT.md for detailed instructions.
echo.
pause
