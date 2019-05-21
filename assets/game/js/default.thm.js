window.skins={};
window.Exml={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/exml/Brand.exml'] = window.Exml.Brand = (function (_super) {
	__extends(Brand, _super);
	function Brand() {
		_super.call(this);
		this.skinParts = ["cardImg","cardNum","bigColor","smallColor","isShowCard"];
		
		this.height = 144;
		this.width = 97;
		this.elementsContent = [this.cardImg_i(),this.cardNum_i(),this.bigColor_i(),this.smallColor_i(),this.isShowCard_i()];
	}
	var _proto = Brand.prototype;

	_proto.cardImg_i = function () {
		var t = new eui.Image();
		this.cardImg = t;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker-positive_png";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cardNum_i = function () {
		var t = new eui.Label();
		this.cardNum = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "4";
		t.textAlign = "left";
		t.textColor = 0xee2c33;
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.bigColor_i = function () {
		var t = new eui.Image();
		this.bigColor = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pokeType-big-2_png";
		t.width = 65;
		t.x = 16;
		t.y = 52;
		return t;
	};
	_proto.smallColor_i = function () {
		var t = new eui.Image();
		this.smallColor = t;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pokeType-small-2_png";
		t.visible = false;
		t.width = 20;
		t.x = 70;
		t.y = 15;
		return t;
	};
	_proto.isShowCard_i = function () {
		var t = new eui.Image();
		this.isShowCard = t;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker-back_png";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Brand;
})(eui.Skin);generateEUI.paths['resource/exml/Game.exml'] = window.Exml.Game = (function (_super) {
	__extends(Game, _super);
	function Game() {
		_super.call(this);
		this.skinParts = ["tipBrandGroup","licensingImg","getArrayGroup","synthesis0","synthesis2","synthesis3","synthesis4","synthesisGroup","gameTime","gameScore","gameMove","shezhi","xinyouxi","tishi","chexiao","tuichuImg","againGame","signOut","newGameGroup"];
		
		this.height = 1624;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.tipBrandGroup_i(),this.licensingImg_i(),this.getArrayGroup_i(),this.synthesisGroup_i(),this._Rect1_i(),this._Label1_i(),this.gameTime_i(),this._Label2_i(),this.gameScore_i(),this._Label3_i(),this.gameMove_i(),this._Image9_i(),this.shezhi_i(),this.xinyouxi_i(),this.tishi_i(),this.chexiao_i(),this.newGameGroup_i()];
	}
	var _proto = Game.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1624;
		t.source = "bg_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipBrandGroup_i = function () {
		var t = new eui.Group();
		this.tipBrandGroup = t;
		t.height = 144;
		t.width = 97;
		t.x = 515;
		t.y = 100;
		return t;
	};
	_proto.licensingImg_i = function () {
		var t = new eui.Image();
		this.licensingImg = t;
		t.height = 144;
		t.source = "poker-back_png";
		t.width = 97;
		t.x = 628;
		t.y = 100;
		return t;
	};
	_proto.getArrayGroup_i = function () {
		var t = new eui.Group();
		this.getArrayGroup = t;
		t.height = 1100;
		t.width = 750;
		t.x = 0;
		t.y = 297;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Theme1_cardback_png";
		t.width = 97;
		t.x = 8.875;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Theme1_cardback_png";
		t.width = 97;
		t.x = 114.75;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Theme1_cardback_png";
		t.width = 97;
		t.x = 220.625;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Theme1_cardback_png";
		t.width = 97;
		t.x = 326.5;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Theme1_cardback_png";
		t.width = 97;
		t.x = 432.375;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Theme1_cardback_png";
		t.width = 97;
		t.x = 538.25;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Theme1_cardback_png";
		t.width = 97;
		t.x = 644.125;
		t.y = 0;
		return t;
	};
	_proto.synthesisGroup_i = function () {
		var t = new eui.Group();
		this.synthesisGroup = t;
		t.height = 144;
		t.width = 418;
		t.x = 16.75;
		t.y = 100;
		t.elementsContent = [this.synthesis0_i(),this.synthesis2_i(),this.synthesis3_i(),this.synthesis4_i()];
		return t;
	};
	_proto.synthesis0_i = function () {
		var t = new eui.Image();
		this.synthesis0 = t;
		t.height = 144;
		t.source = "Theme1_collect_png";
		t.width = 97;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.synthesis2_i = function () {
		var t = new eui.Image();
		this.synthesis2 = t;
		t.height = 144;
		t.source = "Theme1_collect_png";
		t.width = 97;
		t.x = 107;
		t.y = 0;
		return t;
	};
	_proto.synthesis3_i = function () {
		var t = new eui.Image();
		this.synthesis3 = t;
		t.height = 144;
		t.source = "Theme1_collect_png";
		t.width = 97;
		t.x = 214;
		t.y = 0;
		return t;
	};
	_proto.synthesis4_i = function () {
		var t = new eui.Image();
		this.synthesis4 = t;
		t.height = 144;
		t.source = "Theme1_collect_png";
		t.width = 97;
		t.x = 321;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 80;
		t.ellipseWidth = 80;
		t.fillAlpha = 0.3;
		t.height = 60;
		t.strokeAlpha = 0.3;
		t.width = 750;
		t.x = 0;
		t.y = 9;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 50;
		t.size = 30;
		t.text = "TIME:";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 40;
		t.y = 15;
		return t;
	};
	_proto.gameTime_i = function () {
		var t = new eui.Label();
		this.gameTime = t;
		t.bold = true;
		t.height = 50;
		t.text = "00:00";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 95;
		t.x = 152;
		t.y = 14.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 50;
		t.text = "SCORE:";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 116;
		t.x = 315;
		t.y = 15;
		return t;
	};
	_proto.gameScore_i = function () {
		var t = new eui.Label();
		this.gameScore = t;
		t.anchorOffsetX = 0;
		t.height = 50;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 133.09;
		t.x = 434;
		t.y = 14.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 50;
		t.text = "MOVE:";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 568;
		t.y = 15;
		return t;
	};
	_proto.gameMove_i = function () {
		var t = new eui.Label();
		this.gameMove = t;
		t.bold = true;
		t.height = 50;
		t.text = "1000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 669;
		t.y = 14.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.source = "ditu_png";
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 1237;
		return t;
	};
	_proto.shezhi_i = function () {
		var t = new eui.Image();
		this.shezhi = t;
		t.height = 70;
		t.source = "shezhi_png";
		t.width = 70;
		t.x = 90;
		t.y = 1260;
		return t;
	};
	_proto.xinyouxi_i = function () {
		var t = new eui.Image();
		this.xinyouxi = t;
		t.height = 70;
		t.source = "xinyouxi_png";
		t.width = 70;
		t.x = 370;
		t.y = 1260;
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Image();
		this.tishi = t;
		t.height = 70;
		t.source = "tishi_png";
		t.width = 70;
		t.x = 490;
		t.y = 1260;
		return t;
	};
	_proto.chexiao_i = function () {
		var t = new eui.Image();
		this.chexiao = t;
		t.height = 70;
		t.source = "chexiao_png";
		t.width = 70;
		t.x = 610;
		t.y = 1260;
		return t;
	};
	_proto.newGameGroup_i = function () {
		var t = new eui.Group();
		this.newGameGroup = t;
		t.height = 1624;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Image10_i(),this.tuichuImg_i(),this.againGame_i(),this.signOut_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.height = 1624;
		t.strokeAlpha = 0.3;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 474;
		t.horizontalCenter = 0;
		t.source = "xinyouxiBg_png";
		t.width = 636;
		t.y = 350;
		return t;
	};
	_proto.tuichuImg_i = function () {
		var t = new eui.Image();
		this.tuichuImg = t;
		t.height = 78;
		t.source = "tuichu_png";
		t.width = 78;
		t.x = 42;
		t.y = 408;
		return t;
	};
	_proto.againGame_i = function () {
		var t = new eui.Image();
		this.againGame = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "chongwanbenju_png";
		t.width = 400;
		t.y = 516;
		return t;
	};
	_proto.signOut_i = function () {
		var t = new eui.Image();
		this.signOut = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "tuichuyouxi_png";
		t.width = 400;
		t.y = 664;
		return t;
	};
	return Game;
})(eui.Skin);generateEUI.paths['resource/exml/GameOver.exml'] = window.Exml.GameOver = (function (_super) {
	__extends(GameOver, _super);
	function GameOver() {
		_super.call(this);
		this.skinParts = ["out","gameOverTime","gameOverMove","gameOverScore"];
		
		this.height = 1624;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameOver.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1624;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.out_i(),this.gameOverTime_i(),this.gameOverMove_i(),this.gameOverScore_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.height = 1624;
		t.strokeAlpha = 0.3;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 557;
		t.horizontalCenter = 0;
		t.source = "gameOver_png";
		t.width = 636;
		t.y = 330;
		return t;
	};
	_proto.out_i = function () {
		var t = new eui.Image();
		this.out = t;
		t.height = 78;
		t.source = "tuichu_png";
		t.width = 78;
		t.x = 36.18;
		t.y = 403.21;
		return t;
	};
	_proto.gameOverTime_i = function () {
		var t = new eui.Label();
		this.gameOverTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 54;
		t.size = 35;
		t.text = "00:00";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 418;
		t.y = 505.33;
		return t;
	};
	_proto.gameOverMove_i = function () {
		var t = new eui.Label();
		this.gameOverMove = t;
		t.height = 54;
		t.size = 35;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 418;
		t.y = 619.64;
		return t;
	};
	_proto.gameOverScore_i = function () {
		var t = new eui.Label();
		this.gameOverScore = t;
		t.bold = true;
		t.height = 54;
		t.size = 35;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 418;
		t.y = 736.97;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/exml/SetUp.exml'] = window.Exml.SetUp = (function (_super) {
	__extends(SetUp, _super);
	function SetUp() {
		_super.call(this);
		this.skinParts = ["tuichu","feedBack","score","cleanUp","about","feedBackRect","scoreRect","cleanUpRect","aboutRect"];
		
		this.height = 1624;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = SetUp.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.height = 1624;
		t.strokeAlpha = 0.3;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 592;
		t.horizontalCenter = 0;
		t.width = 750;
		t.y = 340;
		t.elementsContent = [this._Image1_i(),this.tuichu_i(),this.feedBack_i(),this.score_i(),this.cleanUp_i(),this.about_i(),this.feedBackRect_i(),this.scoreRect_i(),this.cleanUpRect_i(),this.aboutRect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 592;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shezhiBg_png";
		t.width = 640;
		t.y = 0;
		return t;
	};
	_proto.tuichu_i = function () {
		var t = new eui.Image();
		this.tuichu = t;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tuichu_png";
		t.width = 78;
		t.x = 32;
		t.y = 72;
		return t;
	};
	_proto.feedBack_i = function () {
		var t = new eui.Image();
		this.feedBack = t;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.width = 20;
		t.x = 531;
		t.y = 175.32;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Image();
		this.score = t;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.width = 20;
		t.x = 531;
		t.y = 276.32;
		return t;
	};
	_proto.cleanUp_i = function () {
		var t = new eui.Image();
		this.cleanUp = t;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.width = 20;
		t.x = 531;
		t.y = 374.98;
		return t;
	};
	_proto.about_i = function () {
		var t = new eui.Image();
		this.about = t;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.width = 20;
		t.x = 531;
		t.y = 473.33;
		return t;
	};
	_proto.feedBackRect_i = function () {
		var t = new eui.Rect();
		this.feedBackRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 44;
		t.strokeAlpha = 0;
		t.width = 408;
		t.x = 140;
		t.y = 172;
		return t;
	};
	_proto.scoreRect_i = function () {
		var t = new eui.Rect();
		this.scoreRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 44;
		t.strokeAlpha = 0;
		t.width = 408;
		t.x = 140;
		t.y = 268;
		return t;
	};
	_proto.cleanUpRect_i = function () {
		var t = new eui.Rect();
		this.cleanUpRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 44;
		t.strokeAlpha = 0;
		t.width = 408;
		t.x = 140;
		t.y = 370;
		return t;
	};
	_proto.aboutRect_i = function () {
		var t = new eui.Rect();
		this.aboutRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 44;
		t.strokeAlpha = 0;
		t.width = 408;
		t.x = 140;
		t.y = 468;
		return t;
	};
	return SetUp;
})(eui.Skin);