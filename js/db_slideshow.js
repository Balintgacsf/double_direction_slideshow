document.addEventListener('DOMContentLoaded', function() {
	
	let images = [
			"https://i.ibb.co/dL0rjZb/hatter5.jpg",
			"https://i.ibb.co/1MkR9LN/hatter4.jpg",
			"https://i.ibb.co/mhhKxP5/hatter3.jpg",
			"https://i.ibb.co/tzX7Vs7/hatter2.jpg",
			"https://i.ibb.co/2tVWW8H/hatter1.jpg",
			"https://i.ibb.co/bXPYc01/hatter0.jpg",
			"https://i.ibb.co/h8J5kxx/hatter31.jpg",
			"https://i.ibb.co/pzH5pQ3/hatter30.jpg",
			"https://i.ibb.co/1T6DfjM/hatter29.jpg",
			"https://i.ibb.co/w4yK5Mg/hatter28.jpg",
			"https://i.ibb.co/Gsbcp1M/hatter27.jpg",
			"https://i.ibb.co/vJswWb0/hatter26.jpg",
			"https://i.ibb.co/7C3RJyD/hatter25.jpg",
			"https://i.ibb.co/mDkP1CF/hatter24.jpg",
			"https://i.ibb.co/8c1sNGT/hatter23.jpg",
			"https://i.ibb.co/QFCr5Mx/hatter22.jpg",
			"https://i.ibb.co/TM17Xfm/hatter21.jpg",
			"https://i.ibb.co/3ctv3W0/hatter20.jpg",
			"https://i.ibb.co/H7tgt5G/hatter19.jpg",
			"https://i.ibb.co/XL7z36X/hatter18.jpg",
			"https://i.ibb.co/3TBJ5wc/hatter17.jpg",
			"https://i.ibb.co/wdH804D/hatter16.jpg",
			"https://i.ibb.co/gMgMWbW/hatter15.jpg",
			"https://i.ibb.co/FwT8VVt/hatter14.jpg",
			"https://i.ibb.co/vBPN3zW/hatter13.jpg",
			"https://i.ibb.co/4fWJSH5/hatter12.jpg",
			"https://i.ibb.co/x8m34S8/hatter11.jpg",
			"https://i.ibb.co/6YS6Kbh/hatter10.jpg",
			"https://i.ibb.co/ChFkhhz/hatter9.jpg",
			"https://i.ibb.co/Jkxjbrt/hatter8.jpg",
			"https://i.ibb.co/cTDp6mh/hatter6.jpg",
			"https://i.ibb.co/VBNcJBr/hatter7.jpg"
		];
	
	function Double_Slideshow_print(img_piece,columns, images) {
		//adding images to our gallery
		for(let i = 0; i < parseInt(img_piece); i++) {
			let img_div_elem = document.createElement("div");
			img_div_elem.className = "img";
			document.querySelector(".double_direction_slideshow").appendChild(img_div_elem);
		}
		
		let img_elem = document.querySelectorAll(".img");
		let h = 0; //helping count how many images loaded
		for(let i = 0; i < img_elem.length; i++) {
			let img = new Image();
			img.onload = function() {
				img_elem[i].style.backgroundImage = 'url('+images[i]+')';
				h++;
				if(h == img_elem.length-1) {
					document.querySelector(".loader").style.cssText = "opacity: 0; display: none;";
				}
			}
			img.src = images[i];
		}
		
	//get the style
		let column_pieces = parseInt(columns);
		let rows = 1;
		let k = 0; //helping to count rows
		//counting how many row we will get, it is important to get the images height
		for(let i = 0; i < img_elem.length; i++) {
			k++;
			if(k == column_pieces) {
				rows++;
				k = 0;
			}
		}
		let holder = document.querySelector(".double_direction_slideshow");
		let win_height = holder.offsetHeight;
		let win_width = holder.offsetWidth;
		
		//setting the images positions and adding height and width to them
		let top = 0;
		let piece = 0;
		for(let i = 0; i < img_elem.length; i++) {
			img_elem[i].style.width = win_width/column_pieces+'px';
			img_elem[i].style.height = win_height/rows+'px';
			img_elem[i].style.top = win_height/rows*top+'px';
			img_elem[i].style.left = win_width/column_pieces*piece+'px';
			piece++;
			if(piece == column_pieces) {
				top++;
				piece = 0;
			}
		}
		//Starting the gallery
		setTimeout(function() {
			top = 0;
			piece = 0;
			for(let i = 0; i < img_elem.length; i++) {
				img_elem[i].style.width = win_width+'px';
				img_elem[i].style.height = win_height+'px';
				img_elem[i].style.top = win_height*top+'px';
				img_elem[i].style.left = win_width*piece+'px';
				piece++;
				if(piece == column_pieces) {
					top++;
					piece = 0;
				}
			}
			
			//showing the buttons
			showButtons(column_pieces, top);
			
		},2000); // waiting to display all of the images and the user can see what is going on
	}
	
	function showButtons(columns, rows) {
		let is_anim_running = false;
		let gallery = document.querySelector(".double_direction_slideshow");
		let gallery_img = document.querySelectorAll(".double_direction_slideshow .img")[0];
		let nav_button = document.querySelectorAll(".nav-button");
		
		let up_step = 0;
		let left_step = 0;
		
		//cheking wich utton wil be displayed
		chek_buttons(0, 0, columns, rows);
		
		for(let i = 0; i < nav_button.length; i++) {
			nav_button[i].addEventListener("click", function() {
				
				//checking is the animation running
				if(is_anim_running === true) {
					return;
				}
				is_anim_running = true;
				setTimeout(function() {
					is_anim_running = false;
				},501);
				
				// TOP BUTTON
				if(this.classList.contains("top")) {
					let TopPos = gallery.offsetTop;
					gallery.style.top = TopPos + gallery_img.offsetHeight+'px';
					up_step--;
				}
				// BOTTOM BUTTON
				if(this.classList.contains("bottom")) {
					let TopPos = gallery.offsetTop;
					gallery.style.top = TopPos - gallery_img.offsetHeight+'px';
					up_step++;
				}
				//LEFT Button
				if(this.classList.contains("left")) {
					let leftPos = gallery.offsetLeft;
					gallery.style.left = leftPos + gallery_img.offsetWidth+'px';
					left_step--;
				}
				//RIGHT BUTTON
				if(this.classList.contains("right")) {
					let leftPos = gallery.offsetLeft;
					gallery.style.left = leftPos - gallery_img.offsetWidth+'px';
					left_step++;
				}
				chek_buttons(up_step, left_step, columns, rows);
			});
		}
	}
	
	function chek_buttons(up_step, left_step, columns, rows) {
		// first we hiding all the buttons, and then we choose which buttons are needed
		let all_button = document.querySelectorAll(".nav-button");
		for(let i = 0; i < all_button.length; i++) {
			all_button[i].style.cssText = "opacity : 0; display : none;";
		}
		//BOTTOM
		if(up_step >= 0 && up_step != rows-1) {
			document.querySelector(".nav-button.bottom").style.cssText = "opacity : 1; display : block;";
		}
		// LEFT
		if(left_step > 0 && left_step != -columns) {
			document.querySelector(".nav-button.left").style.cssText = "opacity : 1; display : block;";
		}
		// TOP
		if(up_step > 0 && up_step != -rows) {
			document.querySelector(".nav-button.top").style.cssText = "opacity : 1; display : block;";
		}
		// RIGHT
		if(left_step >= 0 && left_step != columns-1) {
			document.querySelector(".nav-button.right").style.cssText = "opacity : 1; display : block;";
		}
	}
	
	document.getElementById("go").addEventListener("click", function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0; // make sure that the body is scrolled to the top, becouse user can't scroll(overflow: hidden)
		let pieces = document.getElementById("img_piece");
		let columns = document.getElementById("column_piece");
		columns.blur();
		pieces.blur();
		//listening to the settings
		let quantity = parseInt(pieces.value);
		let column_num = parseInt(columns.value);
		if(quantity >= 32 || quantity <= 0 || column_num >= quantity+1 || column_num <= 0) {
			alert("Bad Values! Maximum images can be 31, columns value must be lower or equal than the images value");
			return;
		}
		let holder_div = document.querySelector(".double_direction_slideshow");
		//get the holder div to its original position
		holder_div.style.top = "45px";
		holder_div.style.left = "0px";
		
		//moving the settings to the top
		document.querySelector(".settings").style.top = '0px';
		document.querySelector(".loader").style.cssText = "opacity: 1; display: block;";
		//empty the holder div except the buttons
		while(holder_div.querySelector("div")) {
			holder_div.removeChild(holder_div.querySelector("div"));
		}
		if(window.innerWidth <= 768) {
			setTimeout(function() { //waiting for mobile devices to hide keyboard
				Double_Slideshow_print(quantity,column_num, images);
			},100);
		} else {
			Double_Slideshow_print(quantity,column_num, images);
		}
	});
});
