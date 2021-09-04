xt('span').text().match(/\(([0-9]*)\)/)[1];
				bookmarkCount++;
				$(folder).next('span').empty();
				$(folder).next('span').append('('+bookmarkCount+')');
				$('#bm-manager-notification').replaceWith('');
				$('#manager .tabable').append(data);
				toggleNotice();
				setTimeout("toggleNotice()", 3000);
			} else {
				// Fehlermeldung
			}
		}
	);
	*/	