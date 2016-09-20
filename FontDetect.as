//	FontDetect.as --- as3compile -M FontDetect FontDetect.as
package {
	import flash.display.LoaderInfo;
	import flash.display.Sprite;
	import flash.external.ExternalInterface;
	import flash.text.Font;

	public class FontDetect extends Sprite{
		public function FontDetect(){
			ExternalInterface.call(
				LoaderInfo(this.root.loaderInfo).parameters.onLoad,
				Font.enumerateFonts(true).map(
					function(f){
						return f.fontName;
					}
				).sort(Array.CASEINSENSITIVE)
			);
		}
	}
}
