# font-detect  
Javascript font detection using HTML5 canvas and Flash if supported

### Usage: FontDetect.load( *callback-function* )  

|Method|Description|
|:---|:---|
| `loadSWF(cb)` | dynamically loads Flash font detection swf and executes cb on completion
| `enumerate()` | returns an Array of available fonts
| `escapeFont(f)` | takes a font name *f* as a string and returns the string properly escaped
| `exists(f)` | takes a font name *f* as a string and returns true if it is available
| `isMono(f)` | takes a font name *f* as a string and returns true if it is monospaced

##### Demo [here](http://fockjef.net/fonts/)
