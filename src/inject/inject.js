chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			const checkInterval = 3 * 1000
			console.info("Button listener started.");
			function timerFunc() {
				if (document.URL.endsWith('seniors')) {
					var btn = document.getElementsByClassName("sc-btzYZH eNLDNg");
					if (btn.length > 0) {
						btn[0].click()
					}
				}
			}

			setInterval(timerFunc, checkInterval);

			var trigger = setInterval(function () {

				if (document.URL.endsWith('seniors')) {
					if (document.getElementsByClassName('sc-cMljjf bqDeCs') != undefined) {
						var errorLabel = document.getElementsByClassName('ant-card-body');

						if (errorLabel[0] != undefined) {
							location.reload();
						}


						var title1 = document.getElementsByClassName('sc-chPdSV hDnWVj');
						var title2 = document.getElementsByClassName('sc-ckVGcZ hzRRwn');
						var outterPane = document.getElementsByClassName('sc-cvbbAY bgZPFQ ant-layout-content');
						var extra = document.getElementsByClassName('sc-cMljjf bqDeCs');
						var seniorPane = document.getElementsByClassName('sc-brqgnP lnccvB');
						var headerLabel = document.getElementsByClassName('hxaRQP');
						var headerPane = document.getElementsByClassName('sc-jAaTju hnctjN');
						var infoLabel = document.getElementsByClassName('sc-ksYbfQ fWpUxf'), i;
						var noSensor = document.getElementsByClassName('sc-kvZOFW icUrjg'), j;
						var insideInfoPane = document.getElementsByClassName('sc-kjoXOD duydLr');
						var innerInfo = document.getElementsByClassName('sc-hmzhuo dFCRGd');
						var infoInsidePane = document.getElementsByClassName('sc-ksYbfQ hgFlvp');
						var headerLabelForEve = document.getElementsByClassName('sc-jAaTju hRMFNb');
						var enableButton = document.getElementsByClassName('ant-btn sc-bdVaJa HWvmN ant-btn-default');

						var nameLabel = document.getElementsByClassName('sc-iRbamj ilgZqM');
						var roomLabel = document.getElementsByClassName('sc-jlyJG dJXfhW');

						if (title1[0] != undefined) {
							title1[0].style.fontSize = '1.875rem';
						}

						if (title1[1] != undefined) {
							title1[1].style.fontSize = '1.875rem';
						}

						if (title1[2] != undefined) {
							title1[2].style.fontSize = '1.875rem';
						}

						if (title2[0] != undefined) {
							title2[0].style.fontSize = '1.3125rem';
						}

						if (outterPane[0] != undefined) {
							outterPane[0].style.backgroundColor = '#f2f2f2';
						}
						for (var i = 0; i < infoLabel.length; i++) {

							extra[i].style.display = 'none';

							nameLabel[i].style.fontWeight = 'bold';
							nameLabel[i].style.fontSize = '1.6875rem';
							roomLabel[i].style.fontSize = '1.125rem';

							seniorPane[i].style.fontSize = seniorPane[i].style.fontSize + 20;
							seniorPane[i].style.display = 'flex';
							seniorPane[i].style.flexDirection = 'row';
							headerLabel[i].style.flexDirection = 'column';
							headerLabel[i].style.whiteSpace = 'nowrap';
							headerLabel[i].style.alignItems = 'flex-start';
							if (headerPane[i] != undefined) {
								headerPane[i].style.flex = '1 1 35%';
							}
							if (headerLabelForEve[i] != undefined) {
								headerLabelForEve[i].style.flex = '1 1 35%';
							}

							if (infoLabel[i] != undefined) {
								infoLabel[i].style.flex = '1 1 65%';
								infoLabel[i].style.justifyContent = 'flex-end';
								infoLabel[i].style.margin = 'auto';
								innerInfo[i].style.padding = 'inherit';
							}

						}

						for (var j = 0; j < noSensor.length; j++) {
							nameLabel[i + j].style.fontWeight = 'bold';
							nameLabel[i + j].style.fontSize = '1.6875rem';
							roomLabel[i + j].style.fontSize = '1.125rem';

							seniorPane[i + j].style.fontSize = seniorPane[i].style.fontSize + 20;
							seniorPane[i + j].style.display = 'flex';
							seniorPane[i + j].style.flexDirection = 'row';
							headerLabel[i + j].style.flexDirection = 'column';
							headerLabel[i + j].style.whiteSpace = 'nowrap';
							headerLabel[i + j].style.alignItems = 'flex-start';
							if (headerPane[i + j] != undefined) {
								headerPane[i + j].style.flex = '1 1 35%';
							}
							if (headerLabelForEve[i + j] != undefined) {
								headerLabelForEve[i + j].style.flex = '1 1 35%';
							}

							if (noSensor[j] != undefined) {
								noSensor[j].style.flex = '1 1 65%';
								noSensor[j].style.justifyContent = 'flex-end';
								noSensor[j].style.alignItems = 'space-between';
								noSensor[j].style.fontSize = '1.125rem';
								noSensor[j].style.padding = 'inherit';
								noSensor[j].style.alignSelf = 'center';
								if (enableButton[j] != undefined) {
									enableButton[j].style.fontSize = '1.3125rem';
								}
							}
						}


						var statusLabel = document.getElementsByClassName('sc-TOsTZ faoBdy');
						var statusValueSimple = document.getElementsByClassName('sc-kgAjT koHxOd');
						var statusValueEvent = document.getElementsByClassName('sc-kgAjT gZPGGg');
						var statusValueNo = document.getElementsByClassName('sc-kgAjT cWxnLq');
						for (var i = 0; i < insideInfoPane.length; i++) {
							if (insideInfoPane[i] != undefined) {
								insideInfoPane[i].style.display = 'flex';
								insideInfoPane[i].getElementsByTagName('svg')[0].style.minWidth = '40px';
								insideInfoPane[i].getElementsByTagName('svg')[0].style.minHeight = '40px';

								statusLabel[i].style.fontSize = '1.125rem';
								if (statusValueSimple[i] != undefined) {
									statusValueSimple[i].style.fontSize = '1.3125rem';
								}
								if (statusValueEvent[i] != undefined) {
									statusValueEvent[i].style.fontSize = '1.3125rem';
								}
								if (statusValueNo[i] != undefined) {
									statusValueNo[i].style.fontSize = '1.3125rem';
								}

							}
						}

					}
				}
			}, 500);
			// ----------------------------------------------------------

		}
	}, 10);
});