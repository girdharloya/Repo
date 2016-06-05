		var username = "";
		var chatbot = "";

		function send_message(message,prevState){
			chatbot = "<span class = 'current_message'>"+ "<span class = 'bot' >Chatbot</span>" +":"+ message + "</span>";				
			$("#container").html(prevState+chatbot);
			$(".current_message").hide().delay(500).fadeIn();
			$(".current_message").removeClass("current_message");
		}

		function get_username(){
			send_message("Hello there whats your name","");
		}
		function ai(message,prevState){
			if(username.length==0){
				username = message;
			send_message("Hello nice to meet you "+username+" , how are u doing",prevState);
			}
			if(message.indexOf("how are you ")>=0||message.indexOf("how are u")>=0){
				send_message("Thanks , Iam Good",prevState);
			}
			if(message.indexOf("time")>=0){
				var date = new Date();
				var hr = date.getHours();
				var min = date.getMinutes();
				var secs = date.getSeconds();
				send_message("Current Time is: "+hr+":"+min+":"+secs,prevState);
			}

		}

		$(function(){
			get_username();
			$("#textbox").keypress(function(event){
				if(event.which == 13)
				$("#submit").click();	
			});

			$("#submit").click(function(){
				var username = "<span class = 'username'>Me:</span>"
				var txt = username+$("#textbox").val();
				var prevState = $("#container").html();
				console.log(prevState.length);
				if(prevState!="") prevState=prevState+"<br>";
				prevState = prevState + txt +"<br>";
			$("#container").html(prevState);
			$("#container").scrollTop($("#container").prop("scrollHeight"));
			ai($("#textbox").val(),prevState);
			$("#textbox").val("");

			});

		});	
