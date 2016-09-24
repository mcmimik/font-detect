# FontDetect.js
  
Javascript font detection using HTML5 canvas and Flash if supported

### Usage: FontDetect.loadSWF(*callback-function*)  

|Method|Description|
|:---|:---|
| `enumerate()` | returns an Array of available fonts
| `exists(f)` | takes a font name *f* as a string and returns true if it is available
| `isMono(f)` | takes a font name *f* as a string and returns true if it is monospaced
| `loadSWF(cb)` | dynamically loads Flash font detection swf and executes cb on completion

##### Demo [here](https://fockjef.github.com/font-detect/demo.html)
