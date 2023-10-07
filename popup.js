console.log('It works!');

var accentC = document.getElementById('oldaccent');
var msgreact = document.getElementById('messagereactions');
var secretFuncC = document.getElementById('secretfunctions');
var postReactionsC = document.getElementById('postreactions');
var hiderC = document.getElementById('hider');
var addSticker = document.getElementById('addsticker');
var parseId = document.getElementById('parseid');
var copyLink = document.getElementById('copylink');
var customAccent = document.getElementById('color-picker-accent');
var colorPicker = document.getElementById('color-picker-selection');
var colorPickerText = document.getElementById('color-picker-selection-text');
var resetCaccent = document.getElementById('resetaccent');
var resetCsel = document.getElementById('resetsel');
var resetCtext = document.getElementById('resetseltext');
var customLogo = document.getElementById('customlogo');
var customBg = document.getElementById('custombg');
var customFont = document.getElementById('customfont');
var customLogoText = document.getElementById('customlogotb');
var customBgText = document.getElementById('custombgtb');
var customFontText = document.getElementById('customfonttb');
var resetLogo = document.getElementById('resetlogo');
var resetBg = document.getElementById('resetbg');
var resetFont = document.getElementById('resetfont');
var checkId = document.getElementById('checkid');
var nameAva = document.getElementById('nameava');
var themeChange = document.getElementById('themechange');
var isThemeChanged;
var ID;


themeChange.addEventListener('click', (event) => {
	if(!isThemeChanged)
	{
	const styleElement = document.createElement("style");
	chrome.storage.local.set({ issThemeChanged: true });
	isThemeChanged = true;
	styleElement.id = "lightTheme";
    styleElement.innerHTML = ".YcnqAJrg5X8zKzCe{color:#e1e3e6;}.ButtonInstallpreload,.GvpQJxOI0iScuRW2.CuJ4nsmh6wS_UnoD{background-color:#2483e4;}.sH6RDidRxauHzAZY,span.ButtonInstall > span.qeVEhP7dHLw0W4hC{color:#fff!important;}#home > div > div.RaOWj8vYJiHXOki3.vkuiInternalPanelHeader.Ofwd02L1tI6hcEhn.vkuiInternalPanelHeader--ios.vp5gMD2vLu1nm7ni.vkuiInternalPanelHeader--vis.vkuiInternalPanelHeader--sep.ZN4J6quRcOSJ0_7O.OYsSdd0QSXbEzp_k > div > div.rfmOPQFYHkNAuOn7 > div.h6C9DlL5EmwYZ94B.vkuiInternalPanelHeader__before > div > svg > g > path:nth-child(3){fill:black;}.ie6jnmeUOSRv1qMj.Y1aohYZJ5QjB1Nuw .rY27IPGdeDBioVrF,.ie6jnmeUOSRv1qMj .rY27IPGdeDBioVrF{border-color:rgba(0, 0, 0, 0.24)!important;}.eE7bcOEr98jEbUOF{color:black;}.Y1aohYZJ5QjB1Nuw,.ie6jnmeUOSRv1qMj{background-color:#f2f3f5;}.config-reset-icon > svg{color:black;}.RkE9rvfSw8lp10IS,.sgKS3x5MeEJKRKxo{color:black;}.EC8bn4FFx4VEZ2XF::after {background:rgba(0, 0, 0, 0.24);}.Ohn9lWvtLkvsh76Q .HRXNfAA7h_U1dgq0, .Ohn9lWvtLkvsh76Q::before,.rfmOPQFYHkNAuOn7{background-color:#fff;} .textfieldpro,.IoYEpSfrGhmp41uC,.y2tAdaKbIKTTIdCH::after,.betathing {background-color:#f5f5f5;color:#6d7885;}";
	document.head.appendChild(styleElement);
	}
	else
	{
	const customStyle = document.getElementById("lightTheme");
    if (customStyle) {
        customStyle.remove();
    }
	isThemeChanged = false;
	chrome.storage.local.set({ issThemeChanged: false });
	}
});

nameAva.addEventListener('change', (event) => {
    const checked = event.target.checked;
    chrome.storage.local.set({ checkboxStateAva: checked });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "nameAva", isChecked: checked });
    });
});

checkId.addEventListener('click', (event) => {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "checkId" });
    });
});

resetLogo.addEventListener('click', (event) => {
	customLogoText.value="undefined";
	chrome.storage.local.set({
    customLogo: customLogoText.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customLogo", cLogo: customLogoText.value });
    });
});

resetFont.addEventListener('click', (event) => {
	customFontText.value="undefined";
	chrome.storage.local.set({
    customFont: customFontText.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customFont", cLogo: customFontText.value });
    });
});

resetBg.addEventListener('click', (event) => {
	customBgText.value="undefined";
	chrome.storage.local.set({
    customBg: customBgText.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customBg", cLogo: customBgText.value });
    });
});

customLogo.addEventListener('click', (event) => {
	 event.preventDefault();
	chrome.storage.local.set({
    customLogo: customLogoText.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customLogo", cLogo: customLogoText.value });
    });
});

customBg.addEventListener('click', (event) => {
	 event.preventDefault();
	chrome.storage.local.set({
    customBg: customBgText.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customBg", cBg: customBgText.value });
    });
});

customFont.addEventListener('click', (event) => {
	 event.preventDefault();
	chrome.storage.local.set({
    customFont: customFontText.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customFont", cFont: customFontText.value });
    });
});

resetCaccent.addEventListener('click', (event) => {
	customAccent.value="#FFFFFF";
	chrome.storage.local.set({
    customAccent: customAccent.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customAccent", cAccent: customAccent.value });
    });
});

resetCsel.addEventListener('click', (event) => {
	colorPicker.value="#3291ff";
	chrome.storage.local.set({
    colorPicker: colorPicker.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "colorPicker", cAccent: colorPicker.value });
    });
});

resetCtext.addEventListener('click', (event) => {
	colorPickerText.value="#FFFFFF";
	chrome.storage.local.set({
    colorPickerText: colorPickerText.value,
  });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "colorPickerText", cAccent: colorPickerText.value });
    });
});


function saveToCache() {
  if(customAccent.value!=undefined)
  {
  var customAccentValue = customAccent.value;
  }
  else
  {
  var customAccentValue = "#FFFFFF";
  }
  if(colorPicker.value!=undefined)
  {
  var colorPickerValue = colorPicker.value;
  }
  else
  {
  var colorPickerValue = "#3291FF";
  }
  if(colorPickerText.value!=undefined)
  {
  var colorPickerTextValue = colorPickerText.value;
  }
  else
  {
  var colorPickerTextValue = "#FFFFFF";  
  }

  chrome.storage.local.set({
    customAccent: customAccentValue,
    colorPicker: colorPickerValue,
    colorPickerText: colorPickerTextValue,
  });
  
  console.log("Changed:"+customAccentValue+" "+colorPickerValue+" "+colorPickerTextValue)
  
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "customAccent", cAccent: customAccentValue });
		chrome.tabs.sendMessage(activeTabId, { type: "colorPicker", cPicker: colorPickerValue });
		chrome.tabs.sendMessage(activeTabId, { type: "colorPickerText", cText: colorPickerTextValue });
    });
}

// Обработчик изменения значений переменных
customAccent.addEventListener('change', saveToCache);
colorPicker.addEventListener('change', saveToCache);
colorPickerText.addEventListener('change', saveToCache);


copyLink.addEventListener('click', (event) => {
	if(parseId.value != "Данный элемент не является пользователем или группой")
	{
		copyToClipboard(parseId.value);
		parseId.value = "Скопировано в буфер!";
	}
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.greeting) {
	 console.log("Greetings "+message.greeting);
    // Обработка полученного сообщения
	if(message.greeting == "undefined")
	{
		parseId.value = "Данный элемент не является пользователем или группой";
	}
    parseId.value = message.greeting;
    // Другие действия с сообщением...
  }
});

accentC.addEventListener('change', (event) => {
    const checked = event.target.checked;
    chrome.storage.local.set({ checkboxState: checked });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "toggleOldAccent", isChecked: checked });
    });
});

msgreact.addEventListener('change', (event) => {
    const checked = event.target.checked;
    chrome.storage.local.set({ checkboxState1: checked });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "toggleMsgReactions", isChecked: checked });
    });
});

secretFuncC.addEventListener('change', (event) => {
    const checked = event.target.checked;
    chrome.storage.local.set({ secretFuncState: checked });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "toggleSecretFunctions", isChecked: checked });
    });
});

postReactionsC.addEventListener('change', (event) => {
    const checked = event.target.checked;
    chrome.storage.local.set({ postReactionsState: checked });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "togglePostReactions", isChecked: checked });
    });
});

hiderC.addEventListener('change', (event) => {
    const checked = event.target.checked;
    chrome.storage.local.set({ hiderState: checked });
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, { type: "toggleHider", isChecked: checked });
    });
});

addSticker.addEventListener('click', () => {
  const stickerId = document.getElementById('addstickertextfield').value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTabId = tabs[0].id;
    chrome.tabs.sendMessage(activeTabId, { type: "addSticker", stickerId });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Получение состояния чекбоксов из Local Storage
		chrome.storage.local.get(["issThemeChanged","checkboxStateAva","checkboxState", "checkboxState1", "secretFuncState", "postReactionsState", "hiderState", "customAccent", "colorPicker", "colorPickerText","customLogo","customBg","customFont"], function(items) {
		accentC.checked = items.checkboxState;
        msgreact.checked = items.checkboxState1;
        secretFuncC.checked = items.secretFuncState;
        postReactionsC.checked = items.postReactionsState;
        hiderC.checked = items.hiderState;
		customAccent.value = items.customAccent;
		colorPicker.value = items.colorPicker;
		colorPickerText.value = items.colorPickerText;
		customLogoText.value = items.customLogo;
		customBgText.value = items.customBg;
		customFontText.value = items.customFont;
		nameAva.checked = items.checkboxStateAva;
		if(items.issThemeChanged)
		{
			const styleElement = document.createElement("style");
			chrome.storage.local.set({ issThemeChanged: true });
			styleElement.id = "lightTheme";
			styleElement.innerHTML = ".YcnqAJrg5X8zKzCe{color:#e1e3e6;}.ButtonInstallpreload,.GvpQJxOI0iScuRW2.CuJ4nsmh6wS_UnoD{background-color:#2483e4;}.sH6RDidRxauHzAZY,span.ButtonInstall > span.qeVEhP7dHLw0W4hC{color:#fff!important;}#home > div > div.RaOWj8vYJiHXOki3.vkuiInternalPanelHeader.Ofwd02L1tI6hcEhn.vkuiInternalPanelHeader--ios.vp5gMD2vLu1nm7ni.vkuiInternalPanelHeader--vis.vkuiInternalPanelHeader--sep.ZN4J6quRcOSJ0_7O.OYsSdd0QSXbEzp_k > div > div.rfmOPQFYHkNAuOn7 > div.h6C9DlL5EmwYZ94B.vkuiInternalPanelHeader__before > div > svg > g > path:nth-child(3){fill:black;}.ie6jnmeUOSRv1qMj.Y1aohYZJ5QjB1Nuw .rY27IPGdeDBioVrF,.ie6jnmeUOSRv1qMj .rY27IPGdeDBioVrF{border-color:rgba(0, 0, 0, 0.24)!important;}.eE7bcOEr98jEbUOF{color:black;}.Y1aohYZJ5QjB1Nuw,.ie6jnmeUOSRv1qMj{background-color:#f2f3f5;}.config-reset-icon > svg{color:black;}.RkE9rvfSw8lp10IS,.sgKS3x5MeEJKRKxo{color:black;}.EC8bn4FFx4VEZ2XF::after {background:rgba(0, 0, 0, 0.24);}.Ohn9lWvtLkvsh76Q .HRXNfAA7h_U1dgq0, .Ohn9lWvtLkvsh76Q::before,.rfmOPQFYHkNAuOn7{background-color:#fff;} .textfieldpro,.IoYEpSfrGhmp41uC,.y2tAdaKbIKTTIdCH::after,.betathing {background-color:#f5f5f5;color:#6d7885;}";
			document.head.appendChild(styleElement);
			isThemeChanged = true;
		}

        // Отправка сообщения в content_script.js
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const activeTabId = tabs[0].id;
            chrome.tabs.sendMessage(activeTabId, { type: "toggleOldAccent", isChecked: items.checkboxState });
            chrome.tabs.sendMessage(activeTabId, { type: "toggleMsgReactions", isChecked: items.checkboxState1 });
			chrome.tabs.sendMessage(activeTabId, { type: "toggleSecretFunctions", isChecked: items.secretFuncState });
			chrome.tabs.sendMessage(activeTabId, { type: "togglePostReactions", isChecked: items.postReactionsState });
			chrome.tabs.sendMessage(activeTabId, { type: "toggleHider", isChecked: items.hiderState });
			chrome.tabs.sendMessage(activeTabId, { type: "customAccent", cAccent: items.customAccent });
			chrome.tabs.sendMessage(activeTabId, { type: "colorPicker", cPicker: items.colorPicker });
			chrome.tabs.sendMessage(activeTabId, { type: "colorPickerText", cText: items.colorPickerText });
			chrome.tabs.sendMessage(activeTabId, { type: "customLogo", cLogo: items.customLogo });
			chrome.tabs.sendMessage(activeTabId, { type: "customBg", cBg: items.customBg });
			chrome.tabs.sendMessage(activeTabId, { type: "customFont", cFont: items.customFont });
			chrome.tabs.sendMessage(activeTabId, { type: "nameAva" });
        });
    });
});
