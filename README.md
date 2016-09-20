# font-detect  
Javascript font detection using HTML5 canvas and Flash if supported

### Usage: FontDetect.load( *callback-function* )  

|Method|Description|
|:---|:---|
| `FontDetect.enumerate()` | returns an Array of available fonts
| `FontDetect.exists(f)` | takes a font name *f* as a string and returns true if it is available
| `FontDetect.isMono(f)` | takes a font name *f* as a string and returns true if it is monospaced
| `FontDetect.setAllFonts(f)` | takes an Array *f* and assigns it to the font list used for enumeration
| `FontDetect.getAllFonts()` | returns an Array of the font list used for enumeration
| `FontDetect.escapeFont(f)` | takes a font name *f* as a string and returns the string properly escaped

##### Demo [here](http://fockjef.net/fonts/)
