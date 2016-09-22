var FontDetect = (function(){
	var testText = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	var fontSize = 32;
	var genFonts = "serif,sans-serif,cursive,fantasy,monospace".split(",");
	var allFonts = "serif,sans-serif,cursive,fantasy,monospace,8514oem,Agency FB,Aharoni,Algerian,Amienne,Andale Mono,Andalus,Angsana New,AngsanaUPC,Aparajita,Arabic Typesetting,Arial,Arial Black,Arial Narrow,Arial Rounded MT Bold,Arial Unicode MS,Arnprior,Baskerville Old Face,Batang,BatangChe,Bauhaus 93,Baveuse,Bella Donna,Bell MT,Berlin Sans FB,Berlin Sans FB Demi,Bernard MT Condensed,Berylium,Biondi,Bitstream Charter,Blackadder ITC,Blue Highway,Blue Highway Condensed,Blue Highway D Type,Blue Highway Linocut,Bodoni MT,Bodoni MT Black,Bodoni MT Condensed,Bodoni MT Poster Compressed,Book Antiqua,Bookman Old Style,Bookshelf Symbol 7,Boopee,Bradley Hand ITC,Britannic Bold,Broadway,Browallia New,BrowalliaUPC,Brush Script MT,Burnstown Dam,Byington,Calibri,Calibri Light,Californian FB,Calisto MT,Cambria,Cambria Math,Candara,Carbon Block,Castellar,CatholicSchoolGirls Intl BB,Catriel,Centaur,Century,Century Gothic,Century Schoolbook,Century Schoolbook L,Chiller,Colonna MT,Comic Sans MS,Consolas,Constantia,Cooper Black,Copperplate Gothic Bold,Copperplate Gothic Light,Corbel,Cordia New,CordiaUPC,Courier,Courier 10 Pitch,Courier New,Credit Valley,Curlz MT,DaunPenh,David,DejaVu Math TeX Gyre,DejaVu Sans,DejaVu Sans Mono,DejaVu Serif,DFKai-SB,DilleniaUPC,Dingbats,DokChampa,Dotum,DotumChe,Droid Sans Fallback,Earwig Factory,Ebrima,Edwardian Script ITC,Elephant,Engravers MT,Eras Bold ITC,Eras Demi ITC,Eras Light ITC,Eras Medium ITC,Estrangelo Edessa,EucrosiaUPC,Euphemia,Euphorigenic S,FangSong,Felix Titling,Fixedsys,Footlight MT Light,Forte,Franklin Gothic Book,Franklin Gothic Demi,Franklin Gothic Demi Cond,Franklin Gothic Heavy,Franklin Gothic Medium,Franklin Gothic Medium Cond,FrankRuehl,FreesiaUPC,Freestyle Script,French Script MT,Gabriola,Gadugi,Garamond,Gautami,Georgia,Gigi,Gill Sans MT,Gill Sans MT Condensed,Gill Sans MT Ext Condensed Bold,Gill Sans Ultra Bold,Gill Sans Ultra Bold Condensed,Gisha,Gloucester MT Extra Condensed,Goudy Old Style,Goudy Stout,Grad,Gulim,GulimChe,Gungsuh,GungsuhChe,Haettenschweiler,Harlow Solid Italic,Harrington,Heavy Heap,High Tower Text,Hurry Up,Huxtable,Impact,Imprint MT Shadow,Informal Roman,IrisUPC,Iskoola Pota,JasmineUPC,Javanese Text,Jokerman,Juice ITC,KaiTi,Kalinga,Kartika,Khmer UI,KodchiangUPC,Kokila,Kredit,Kristen ITC,Kunstler Script,Lao UI,Latha,Latin Modern Math,Latin Modern Mono,Latin Modern Mono Caps,Latin Modern Mono Light,Latin Modern Mono Light Cond,Latin Modern Mono Prop,Latin Modern Mono Prop Light,Latin Modern Mono Slanted,Latin Modern Roman,Latin Modern Roman Caps,Latin Modern Roman Demi,Latin Modern Roman Dunhill,Latin Modern Roman Slanted,Latin Modern Roman Unslanted,Latin Modern Sans,Latin Modern Sans Demi Cond,Latin Modern Sans Quotation,Lato,League Gothic,Leelawadee,Leelawadee UI,Leelawadee UI Semilight,Levenim MT,Liberation Mono,Liberation Sans,Liberation Serif,Ligurino,Ligurino Condensed,LilyUPC,Lucida Bright,Lucida Calligraphy,Lucida Console,Lucida Fax,Lucida Handwriting,Lucida Sans,Lucida Sans Typewriter,Lucida Sans Unicode,Magneto,Maiandra GD,Malgun Gothic,Malgun Gothic Semilight,Mangal,Marlett,Matura MT Script Capitals,Meiryo,Meiryo UI,Microsoft Himalaya,Microsoft JhengHei,Microsoft JhengHei Light,Microsoft JhengHei UI,Microsoft JhengHei UI Light,Microsoft New Tai Lue,Microsoft PhagsPa,Microsoft Sans Serif,Microsoft Tai Le,Microsoft Uighur,Microsoft YaHei,Microsoft YaHei Light,Microsoft YaHei UI,Microsoft YaHei UI Light,Microsoft Yi Baiti,MingLiU,MingLiU-ExtB,MingLiU_HKSCS,MingLiU_HKSCS-ExtB,Minya Nouvelle,Miriam,Miriam Fixed,Mistral,Modern,Modern No. 20,Mongolian Baiti,Monospace,Monotype Corsiva,MoolBoran,MS Gothic,MS Mincho,MS Outlook,MS PGothic,MS PMincho,MS Reference Sans Serif,MS Reference Specialty,MS Sans Serif,MS Serif,MS UI Gothic,MT Extra,Mufferaw,MV Boli,Myanmar Text,Narkisim,Neuropol,Niagara Engraved,Niagara Solid,Nimbus Mono L,Nimbus Roman No9 L,Nimbus Sans L,Nirmala UI,Nirmala UI Semilight,Noto Mono,NSimSun,Nyala,OCR A Extended,Old English Text MT,Onyx,Palace Script MT,Palatino Linotype,Papyrus,Parchment,Perpetua,Perpetua Titling MT,Planet Benson 2,Plantagenet Cherokee,Playbill,PMingLiU,PMingLiU-ExtB,Poor Richard,Pristina,Pupcat,Raavi,Rage Italic,Ravie,Roboto,Roboto Condensed,Rockwell,Rockwell Condensed,Rockwell Extra Bold,Rod,Roman,Sakkal Majalla,Sans,Script,Script MT Bold,Segoe MDL2 Assets,Segoe Print,Segoe Script,Segoe UI,Segoe UI Black,Segoe UI Emoji,Segoe UI Historic,Segoe UI Light,Segoe UI Semibold,Segoe UI Semilight,Segoe UI Symbol,Serif,Shonar Bangla,Showcard Gothic,Shruti,SimHei,Simplified Arabic,Simplified Arabic Fixed,SimSun,SimSun-ExtB,Sitka Banner,Sitka Display,Sitka Heading,Sitka Small,Sitka Subheading,Sitka Text,Small Fonts,Snap ITC,Standard Symbols L,Stencil,Stereofidelic,Sybil Green,Sylfaen,Symbol,Symbola,System,Tahoma,Tandelle,Teen,Teen Light,Tempus Sans ITC,Terminal,TeX Gyre Adventor,TeX Gyre Bonum,TeX Gyre Bonum Math,TeX Gyre Chorus,TeX Gyre Cursor,TeX Gyre DejaVu Math,TeX Gyre Heros,TeX Gyre Heros Cn,TeX Gyre Pagella,TeX Gyre Pagella Math,TeX Gyre Schola,TeX Gyre Schola Math,TeX Gyre Termes,TeX Gyre Termes Math,Times New Roman,Traditional Arabic,Trebuchet MS,Tunga,Tw Cen MT,Tw Cen MT Condensed,Tw Cen MT Condensed Extra Bold,URW Bookman L,URW Chancery L,URW Gothic L,URW Palladio L,Utopia,Utsaah,Vani,Velvenda Cooler,Verdana,Vijaya,Viner Hand ITC,Vivaldi,Vladimir Script,Vrinda,Waker,Webdings,Wickenden Cafe NDP,Wide Latin,Wingdings,Wingdings 2,Wingdings 3,Yu Gothic,Yu Gothic Light,Yu Gothic Medium,Yu Gothic UI,Yu Gothic UI Light,Yu Gothic UI Semibold,Yu Gothic UI Semilight,ZDingbats,ZWAdobeF".split(",");
	var ctx      = "getContext" in document.createElement("canvas") ? document.createElement("canvas").getContext("2d") : undefined;
	var hasFlash = (function(){try{return new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(err){return (typeof navigator.plugins !== "undefined" && typeof navigator.plugins["Shockwave Flash"] === "object")}})();
	var _cb, _timer, _swfObj;

	if( ctx === undefined || genFonts.map(function(f){ctx.font=fontSize+"px "+f;return ctx.measureText(testText).width}).every(function(w,i,a){return w==a[0]}) ){
		return undefined; // :(
	}

	function escapeFont(f){
		return f.match(/^\d|[^\w-]/) && !f.match(/^".+"$/) ? '"'+f.replace(/"/g,'\\"')+'"' : f;
	}

	function exists(f){
		f = escapeFont(f);
		ctx.font = fontSize+"px "+f+","+genFonts[0];
		var w = ctx.measureText(testText).width;
		for( var i = 1; i < genFonts.length; i++ ){
			ctx.font = fontSize+"px "+f+","+genFonts[i];
			if( ctx.measureText(testText).width != w ) return false;
		}
		return true;
	}

	function isMono(f){
		f = escapeFont(f);
		if( !exists(f) ) return undefined;
		ctx.font = fontSize+"px "+f;
		var w = ctx.measureText(testText.charAt(0)).width;
		for( i = 1; i < testText.length; i++ ){
			if( Math.abs(ctx.measureText(testText.charAt(i)).width-w) > 1 ) return false;
		}
		return true;
	}

	function enumerate(){
		return allFonts.filter(function(f){return exists(f)});
	}

	function swfFonts(f){
		window.clearTimeout(_timer);
		document.body.removeChild(_swfObj);
		allFonts = f;
		_cb();
	}

	function loadSWF(cb){
		if( hasFlash ){
			_timer = window.setTimeout(cb,5000);
			_cb = cb;
			_swfObj = document.createElement("object");
			_swfObj.data = "FontDetect.swf?onLoad=FontDetect.swfFonts";
			_swfObj.width = _swfObj.height = 1;
			document.body.appendChild(_swfObj);
		}
		else{
			cb();
		}
	}

	return {
		enumerate  : enumerate,
		escapeFont : escapeFont,
		exists     : exists,
		isMono     : isMono,
		loadSWF    : loadSWF,
		swfFonts   : swfFonts
	};
})();
