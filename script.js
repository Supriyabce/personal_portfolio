const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;
        for (let i = 0; i < totalNavList; i++) {
      	  const a=navList[i].querySelector("a");
      	  a.addEventListener("click",function (){
      	  	removeBackSectionClass();
      	  	
            for(let j=0;j<totalNavList;j++){
            	if (navList[j].querySelector("a").classList.contains("active")) {
            	addBackSectionClass(j);
            	//allSection[j].classList.add("back-setion");	
            	}
      			navList[j].querySelector("a").classList.remove("active");
      		}
      		this.classList.add("active");
      		showSection(this);
      		if(window.innerWidth<1200) {
      			asideSectionTogglerBtn();
      		}
          })
        } 
        function removeBackSectionClass(){
        for(let i=0;i<totalSection;i++){
      			allSection[i].classList.remove("back-section");
      		}
        } 
        function addBackSectionClass(num){
            allSection[num].classList.add("back-section");
        }
        function showSection(element){
         	for(let i=0;i<totalSection;i++){
      			allSection[i].classList.remove("active");
      		}
      		const target=element.getAttribute("href").split("#")[1];
      	   
      	    document.querySelector("#"+target).classList.add("active")
      	}
      		function updateNav(element){
      			for(let i=0;i<totalNavList;i++){
      			navList[i].querySelector("a").classList.remove("active");
      			const target=element.getAttribute("href").split("#")[1];	
      			if (target==navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      				navList[i].querySelector("a").classList.add("active");
      			}
      		 }
      		}

      		document.querySelector(".hire-me").addEventListener("click",function(){
      			const sectionIndex=this.getAttribute("data-section-index");
      			showSection(this);
      			updateNav(this);
      			removeBackSectionClass();
      			addBackSectionClass(sectionIndex);
      		})
      	    
        
        const navTogglerBtn=document.querySelector(".nav-toggler"),
              aside=document.querySelector(".aside");

        navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)
        
   
        function asideSectionTogglerBtn(){
        	aside.classList.toggle("open");
        	navTogglerBtn.classList.toggle("open");
        	for(let i=0;i<totalSection;i++){
      			allSection[i].classList.toggle("open");
      		}
        }
		function sendEmail(){
			Email.send({
				secureToken : "7d0081df-d05f-4b73-8e47-e859b34e89f8",
				Host : "smtp.elasticemail.com",
				Username : "supriyarani30399@gmail.com",
				Password : "CED445B2169549458D3B0716F08FF3EE9754",
				To : 'supriyarani30399@gmail.com',
				From : document.getElementById("email").value,
				Subject : "new contact form enquiry",
				Body : "Name: " + document.getElementById("name").value
					+ "<br> Email: " + document.getElementById("email").value
					+ "<br> subject: " + document.getElementById("subject").value
					+ "<br> Message: " + document.getElementById("message").value
				}).then(
				message => alert("Message Send Successfully")
				);
		}