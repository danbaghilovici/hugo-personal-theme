To compile the styles:

```
cd modules/bootstrap
npm install
# compile styles to hugo resources folder
sass scss\custom.scss:..\bootstrap\..\..\assets\custom.css --no-source-map
# this is for separate compiling
#sass scss\bootstrap.scss:..\bootstrap\..\..\assets\bootstrap.css scss\custom.scss:..\bootstrap\..\..\assets\custom.css --no-source-map
```