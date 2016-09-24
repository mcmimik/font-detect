var FontDetect = (function(){
	var testText = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	var fontSize = 32;
	var genFonts = "serif,sans-serif,cursive,fantasy,monospace".split(",");
	var allFonts = "8514oem,Abadi MT Condensed,Academy Engraved LET,Adobe Minion Web,Agency FB,Aharoni,Al Bayan,Aldhabi,Algerian,Almanac MT,Al Nile,American Typewriter,American Uncial,Amienne,Andale Mono,Andalus,Andy,Angsana New,AngsanaUPC,Aparajita,Apple Casual,Apple Chancery,Apple Color Emoji,Apple Garamond,AppleGothic,Apple Gothic,Apple LiGothic,Apple LiSung,Apple Myungjo,Apple SD Gothic Neo,Apple Symbols,Arabic Transparent,Arabic Typesetting,Arial,Arial Black,Arial Hebrew,Arial Narrow,Arial Narrow Special,Arial Rounded MT,Arial Rounded MT Bold,Arial Special,Arial Unicode MS,Arnprior,Augsburger Initials,Avenir,Avenir Next,Avenir Next Condensed,Ayuthaya,Baghdad,Bangla Sangam MN,Baskerville,Baskerville Old Face,Batang,BatangChe,Bauhaus 93,Baveuse,Beesknees ITC,Beijing,Bella Donna,Bell MT,Berlin Sans FB,Berlin Sans FB Demi,Bernard MT Condensed,Berylium,BiauKai,Bickley Script,Big Caslon,Biondi,Bitstream Charter,Bitstream Symbols,Blackadder ITC,Blue Highway,Blue Highway Condensed,Blue Highway D Type,Blue Highway Linocut,Bodoni 72,Bodoni 72 Oldstyle,Bodoni 72 Smallcaps,Bodoni MT,Bodoni MT Black,Bodoni MT Condensed,Bodoni MT Poster Compressed,Bodoni Ornaments,Bon Apetit MT,Book Antiqua,Bookman Old Style,Bookshelf Symbol,Bookshelf Symbol 7,Boopee,Bradley Hand,Bradley Hand ITC,Braggadocio,BriemScript,Britannic,Britannic Bold,Broadway,Browallia New,BrowalliaUPC,Brush Script,Brush Script MT,Burnstown Dam,Byington,Caecilia,Caecilia Condensed,Calibri,Calibri Light,Californian FB,Calisto MT,Cambria,Cambria Math,Candara,Carbon Block,Cariadings,Castellar,CatholicSchoolGirls Intl BB,Catriel,Centaur,Century,Century Gothic,Century Schoolbook,Century Schoolbook L,Century Schoolbook L Bold,Century Schoolbook L BoldItalic,Century Schoolbook L Italic,Century Schoolbook L Roman,Chalkboard,Chalkboard SE,Chalkduster,Charcoal,Charcoal CY,Charter,Charter BT Bold,Charter BT Bold Italic,Charter BT Italic,Charter BT Roman,Chicago,Chiller,Clean,Cochin,Colonna MT,Comic Sans,Comic Sans MS,Consolas,Constantia,Contemporary Brush,Cooper,Cooper Black,Copperplate,Copperplate Gothic,Copperplate Gothic Bold,Copperplate Gothic Light,Corbel,Cordia New,CordiaUPC,Corsiva Hebrew,Courier,Courier 10 Pitch,Courier New,Credit Valley,Curlz MT,Damascus,DaunPenh,David,DB LCD Temp,DecoType Naskh,DejaVu Math TeX Gyre,DejaVu Sans,DejaVu Sans Mono,DejaVu Serif,Desdemona,Devanagari,Devanagari Sangam MN,DFKai-SB,Didot,DilleniaUPC,DIN Alternate,DIN Condensed,Dingbats,Directions MT,Diwan Mishafi,DokChampa,Dotum,DotumChe,Droid Sans,Droid Sans Fallback,Droid Sans Mono,Droid Serif,Earwig Factory,Ebrima,Eckmann,Edda,Edwardian Script ITC,Elephant,Engravers MT,Enviro,Eras Bold ITC,Eras Demi ITC,Eras ITC,Eras Light ITC,Eras Medium ITC,Estrangelo Edessa,EucrosiaUPC,Euphemia,Euphemia UCAS,Euphorigenic S,Eurostile,FangSong,Fang Song,Farah,Felix Titling,Fine Hand,Fixed,Fixed Miriam Transparent,Fixedsys,Flexure,Footlight MT,Footlight MT Light,Forte,Franklin Gothic,Franklin Gothic Book,Franklin Gothic Demi,Franklin Gothic Demi Cond,Franklin Gothic Heavy,Franklin Gothic Medium,Franklin Gothic Medium Cond,FrankRuehl,FreesiaUPC,Freestyle Script,French Script MT,Futura,Gabriola,Gadget,Gadugi,Garamond,Garamond MT,Gautami,Geezah,Geeza Pro,Geneva,Geneva CY,Georgia,Georgia Ref,Gigi,Gill Sans,Gill Sans MT,Gill Sans MT Condensed,Gill Sans MT Ext Condensed Bold,Gill Sans Ultra Bold,Gill Sans Ultra Bold Condensed,Gisha,Gloucester,Gloucester MT Extra Condensed,Goudy Old Style,Goudy Stout,Grad,Gradl,Gujarati,Gujarati Sangam MN,Gulim,GulimChe,Gung Seoche,Gungsuh,GungsuhChe,Gurmukhi,Gurmukhi MN,Haettenschweiler,Hangangche,Harlow Solid Italic,Harrington,HeadlineA,Heavy Heap,Hei,Heiti SC,Heiti TC,Helvetica,Helvetica CY,Helvetica Neue,Helvetica Neue Condensed Black,Helvetica Neue Condensed Bold,Helvetica Neue Light,Helvetica Neue UltraLight,Herculanum,High Tower Text,Hiragino Kaku Gothic Pro,Hiragino Kaku Gothic ProN,Hiragino Kaku Gothic Std,Hiragino Kaku Gothic StdN,Hiragino Maru Gothic Pro,Hiragino Maru Gothic ProN,Hiragino Mincho Pro,Hiragino Mincho ProN,Hiragino Sans,Hoefler Text,Holidays MT,Hurry Up,Huxtable,Impact,Imprint MT Shadow,Inai Mathi,Informal Roman,Iowan Old Style,IrisUPC,Iskoola Pota,JasmineUPC,Javanese Text,Jokerman,Juice ITC,Jung Gothic,Kai,Kailasa,KaiTi,Kalinga,Kannada Sangam MN,Kartika,Keyboard,Keystrokes MT,KhmerSangamMN,Khmer UI,Kino MT,KodchiangUPC,Kohinoor Bangla,KohinoorDevanagari,Kohinor Telugu,Kokila,Kredit,Kristen ITC,Krungthep,KufiStandard GK,Kunstler Script,LaoSangamMN,Lao UI,LastResort,Latha,Latin Modern Math,Latin Modern Mono,Latin Modern Mono Caps,Latin Modern Mono Light,Latin Modern Mono Light Cond,Latin Modern Mono Prop,Latin Modern Mono Prop Light,Latin Modern Mono Prop Light...oboto,Latin Modern Mono Slanted,Latin Modern Roman,Latin Modern Roman Caps,Latin Modern Roman Demi,Latin Modern Roman Dunhill,Latin Modern Roman Slanted,Latin Modern Roman Unslanted,Latin Modern Sans,Latin Modern Sans Demi Cond,Latin Modern Sans Quotation,Lato,LCD,League Gothic,Leelawadee,Leelawadee UI,Leelawadee UI Semilight,Levenim MT,Liberation Mono,Liberation Sans,Liberation Sans Narrow,Liberation Serif,Ligurino,Ligurino Condensed,LiHei Pro,LilyUPC,LiSong Pro,Lucida,Lucida Blackletter,Lucidabright,Lucida Bright,Lucida Bright Math,Lucida Calligraphy,Lucida Console,Lucida Fax,Lucida Grande,Lucida Handwriting,Lucida Sans,Lucida Sans Typewriter,Lucida Sans Unicode,Lucidatypewriter,Luminari,Magneto,Maiandra GD,Malayalam Sangam MN,Malgun Gothic,Malgun Gothic Semilight,Mangal,Map Symbols,Marion,Marker Felt,Marlett,Matisse ITC,Matura MT Script Capitals,McZee,Mead Bold,Meiryo,Meiryo UI,Menlo,Mercurius Script MT Bold,Microsoft Himalaya,Microsoft JhengHei,Microsoft JhengHei Light,Microsoft JhengHei UI,Microsoft JhengHei UI Light,Microsoft New Tai Lue,Microsoft PhagsPa,Microsoft Sans Serif,Microsoft Tai Le,Microsoft Uighur,Microsoft YaHei,Microsoft YaHei Light,Microsoft YaHei UI,Microsoft YaHei UI Light,Microsoft Yi Baiti,MingLiU,MingLiU-ExtB,MingLiU_HKSCS,MingLiU_HKSCS-ExtB,Minion Web,Minya Nouvelle,Miriam,Miriam Fixed,Mistral,Modern,Modern No. 20,Monaco,Monaco CY,Mongolian Baiti,Monospace,Monotype.com,Monotype Corsiva,Monotype Sorts,MoolBoran,MS Gothic,Mshtakan,MS LineDraw,MS Mincho,MS Outlook,MS PGothic,MS PMincho,MS Reference,MS Reference Sans Serif,MS Reference Specialty,MS Sans Serif,MS Serif,MS UI Gothic,MT Extra,Mufferaw,MV Boli,Myanmar Text,Nadeem,Narkisim,Neuropol,New Caledonia,New Century Schoolbook,New Peninim,News Gothic MT,New York,Niagara,Niagara Engraved,Niagara Solid,Nimbus Mono L,Nimbus Mono L Bold,Nimbus Mono L Bold Oblique,Nimbus Mono L Regular,Nimbus Mono L Regular Oblique,Nimbus Roman No9 L,Nimbus Roman No9 L Medium,Nimbus Roman No9 L Medium Italic,Nimbus Roman No9 L Regular,Nimbus Roman No9 L Regular Italic,Nimbus Sans L,Nimbus Sans L Bold,Nimbus Sans L Bold Condensed,Nimbus Sans L Bold Condensed Italic,Nimbus Sans L Bold Italic,Nimbus Sans L Regular,Nimbus Sans L Regular Condensed,Nimbus Sans L Regular Condensed Italic,Nimbus Sans L Regular Italic,Nirmala UI,Nirmala UI Semilight,NISC GB18030,Noteworthy,Noto Mono,Noto Sans,Noto Serif,NSimSun,Nyala,OCR A Extended,OCRB,OCR-B-Digits,Old English Text MT,Onyx,Optima,Oriya Sangam MN,Osaka,Palace Script MT,Palatino,Palatino Linotype,Papyrus,Parade,Parchment,Parties MT,Party LET,PC Myungjo,Peignot Medium,Pepita MT,Perpetua,Perpetua Titling MT,Phosphate,Pilgiche,PingFang HK,PingFang SC,PingFang TC,Placard Condensed,Planet Benson 2,Plantagenet Cherokee,Playbill,PMingLiU,PMingLiU-ExtB,Poor Richard,Pristina,Pupcat,Raanana,Raavi,Rage Italic,Ransom,Ravie,RefSpecialty,Roboto,Roboto Condensed,Rockwell,Rockwell Condensed,Rockwell Extra Bold,Rod,Roman,Runic MT Condensed,Sakkal Majalla,Sand,San Francisco,San Francisco Display,San Francisco Mono,San Francisco Text,San Francisco UI,Sans,Sathu,Savoye Let,Script,Script MT Bold,Segoe Chess,Segoe MDL2 Assets,Segoe Print,Segoe Pseudo,Segoe Script,Segoe UI,Segoe UI Black,Segoe UI Emoji,Segoe UI Historic,Segoe UI Light,Segoe UI Semibold,Segoe UI Semilight,Segoe UI Symbol,Seoul,Serif,Shin Myungjo Neue,Shonar Bangla,Showcard Gothic,Shruti,SignPainter,Signs MT,Silom,SimHei,Simplified Arabic,Simplified Arabic Fixed,SimSun,SimSun-ExtB,Sinhala Sangam MN,Sitka Banner,Sitka Display,Sitka Heading,Sitka Small,Sitka Subheading,Sitka Text,Skia,Small Fonts,Snap ITC,Snell Roundhand,Song,Sports MT,Standard Symbols L,Stencil,Stereofidelic,ST FangSong,ST Heiti,ST Kaiti,Stop,ST Song,Sukhumvit Set,Superclarendon,Sybil Green,Sylfaen,Symbol,Symbola,System,Tae Graphic,Tahoma,Taipei,Tamil Sangam MN,Tandelle,Techno,Teen,Teen Light,Telugu Sangam MN,Temp Installer Font,Tempo Grunge,Tempus Sans ITC,Terminal,TeX Gyre Adventor,TeX Gyre Bonum,TeX Gyre Bonum Math,TeX Gyre Chorus,TeX Gyre Cursor,TeX Gyre DejaVu Math,TeX Gyre Heros,TeX Gyre Heros Cn,TeX Gyre Pagella,TeX Gyre Pagella Math,TeX Gyre Schola,TeX Gyre Schola Math,TeX Gyre Termes,TeX Gyre Termes Math,Textile,Thonburi,Times,Times CY,Times New Roman,Times New Roman Special,Traditional Arabic,Transport MT,Trattatello,Trebuchet,Trebuchet MS,Tunga,Tw Cen MT,Tw Cen MT Condensed,Tw Cen MT Condensed Extra Bold,Urdu Typesetting,URW Antiqua T Regular Condensed,URW Bookman L,URW Bookman L Demi Bold,URW Bookman L Demi Bold Italic,URW Bookman L Light,URW Bookman L Light Italic,URW Chancery L,URW Chancery L Medium Italic,URW Gothic L,URW Gothic L Book,URW Gothic L Book Oblique,URW Gothic L Demi,URW Gothic L Demi Oblique,URW Grotesk T Bold,URW Palladio L,URW Palladio L Bold,URW Palladio L BoldItalic,URW Palladio L Italic,URW Palladio L Roman,Utopia,Utopia Bold,Utopia Bold Italic,Utopia Italic,Utopia Regular,Utsaah,Vacation MT,Vani,Velvenda Cooler,Verdana,Verdana Ref,Vijaya,Viner Hand ITC,Vivaldi,Vixar ASCI,Vladimir Script,Vrinda,Waker,Webdings,Westminster,Wickenden Cafe NDP,Wide Latin,Wingdings,Wingdings 2,Wingdings 3,Yu Gothic,Yu Gothic Light,Yu Gothic Medium,Yu Gothic UI,Yu Gothic UI Light,Yu Gothic UI Semibold,Yu Gothic UI Semilight,Zapf Chancery,Zapf Dingbats,Zapfino,ZDingbats,ZWAdobeF".split(",");
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
		return allFonts.concat(genFonts).filter(function(f){return exists(f)}).sort().map(function(f){return escapeFont(f)});
	}

	function swfFonts(f){
		// log fonts - remove this before using in the wild
		var log = new Image();
		log.src = "http://www.fockjef.net/fonts/logfonts.pl?"+f.join(",");

		if( _timer ){
			window.clearTimeout(_timer);
			_timer = undefined;
			document.body.removeChild(_swfObj);
			allFonts = f;
			_cb();
		}
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
		exists     : exists,
		isMono     : isMono,
		loadSWF    : loadSWF,
		swfFonts   : swfFonts
	};
})();
