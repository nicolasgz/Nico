var Header = require('../pages/header_page.js');
var Utils = require('../pages/utils_page.js');
var Leads = require('../pages/leads_page.js');
var Cases = require('../pages/cases_page.js');
module.exports = function() {

	this.Then(/^I expect logged user is "([^"]*)"$/, function(expectedName) {
		var username = HeaderPage.getUsername();

		expect(username).to
	            .equal(expectedName, `Expected that ${username} to be equal to ${expectedName}.`);
	});

	this.Then(/^I click on all tabs$/, function(data){
		var titles = data.raw();
		titles.forEach(function(title){
			Header.clickOnTabWithTitle(title);
		})
	});

	this.Then(/^I click on each tab and verify is displayed$/, function(data){
		
		// | Leads |
		// | Contacts |
		// | Tasks |

		// titles = [['Leads'],['Contacts'],['Tasks']]
		var titles = data.hashes();
		// console.log(`titles: >>>>>> ${titles}`)
		// for (var k in titles) {
		//     // use hasOwnProperty to filter out keys from the Object.prototype
		//     if (titles.hasOwnProperty(k)) {
		//         console.log(`key is: ${k} value is: ${titles[k]}`);
		//     }
		// }


		titles.forEach(function(a_title){

			
			// console.log(`a_title: >>>>>> ${a_title['tab_name']}`)
			// (1) a_title = ['Leads']
			// (2) a_title = ['Contacts']
			// (3) a_title = ['Tasks']
			var tab_title = a_title['tab_name']
			console.log('CLICKED TAB: ' + tab_title);
			Header.clickOnTabWithTitle(tab_title);
			Cases.isCasesLabelPresent();
			// console.log(">>>>>>>>>>>>>>>>>Enters isCasesLabelPresent>>>>>>>>>>>>>>>>>>")
			// var visible;


			// switch(tab_title) {
			// 	case 'Cases':
			// 	    Cases.isCasesLabelPresent();
   //  				console.log(">>>>>>>>>>>>>>>>>Enters isCasesLabelPresent>>>>>>>>>>>>>>>>>>")
   //  				break;
			// 	case 'Leads':
			// 	    // Leads.isLeadsLabelPresent();
			// 	    // console.log('Im a Lead');
			// 	    // Leads.isLeadsLabelPresent;
			//  	   // break;
		 // 	   case 'Tasks':
		 // 	   		console.log('Im a Task');
		 // 	   		break;
			// case n:
			//     code block
			//     break;
			// default:
			//     code block
				// }

				// expect(visible).to.equal(true, `Expected that ${tab_title} to be displayed.`);
		})
		

		// switch(tab_name) {
		// 	case 'Leads':
		// 	    Header.clickOnTabWithTitle(title);
		// 	    Leads.isLeadsLabelPresent();
		//  	   break;
		// // case n:
		// //     code block
		// //     break;
		// // default:
		// //     code block
		// }

		// var titles = data.raw();
		// titles.forEach(function(title){
		// 	Header.clickOnTabWithTitle(title);
		// })
	});
};